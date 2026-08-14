#!/usr/bin/env python3
"""
Generator de coperte pentru reel-urile Nextflow.ai.

Ia un cadru din clip și scoate o copertă 1080×1920 gata de urcat pe Instagram:
gradare pe culorile agenției, întunecare graduală în jos și câteva cuvinte mari
peste. Fără AI — doar editare pe imaginea reală.

Exemple
-------
    python3 tools/coperta_reel.py cadru.jpg -t "ai-ul nu e|un moft"
    python3 tools/coperta_reel.py cadru.jpg -t "cât te costă|că amâni" --ghost AI
    python3 tools/coperta_reel.py cadru.jpg -t "2 săptămâni" --eyebrow "automatizare" -o copertă.jpg

`|` desparte rândurile din titlu. Mărimea textului se calculează singură ca
să încapă pe lățime.

Cerințe: Python 3.9+ și Pillow (`pip install pillow`).
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from PIL import (Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter,
                     ImageFont, ImageOps)
except ImportError:
    sys.exit('Lipsește Pillow. Instalează-l cu:  pip install pillow')

# ── Format și culori de brand ────────────────────────────────────────────
WIDTH, HEIGHT = 1080, 1920          # formatul de copertă pentru reel
BLACK = (11, 11, 11)                # --black din globals.css
GREEN = (16, 185, 129)              # --green din globals.css

# Instagram decupează pătratul din centru (y 420…1500) pentru grila de
# profil, așa că textul stă în interiorul lui la ambele layout-uri.
TEXT_BASELINE = 1448   # layout „jos" — titlul se termină aici
TEXT_TOP = 520         # layout „sus" — titlul începe aici
MARGIN = 74

FONT_DIR = Path(__file__).parent / 'fonts'
FONT_HEADLINE = 'InterDisplay-Black.ttf'
FONT_EYEBROW = 'Inter-Bold.ttf'


def load_font(name: str, size: int, font_dir: Path) -> ImageFont.FreeTypeFont:
    path = font_dir / name
    if not path.exists():
        sys.exit(
            f'Nu găsesc fontul {path}.\n'
            'Descarcă Inter de pe https://github.com/rsms/inter/releases și pune\n'
            f'InterDisplay-Black.ttf și Inter-Bold.ttf în {font_dir}/, sau dă --font-dir.'
        )
    return ImageFont.truetype(str(path), size)


def fill_crop(im: Image.Image, w: int, h: int, focus: float) -> Image.Image:
    """Umple cadrul w×h păstrând proporțiile. `focus` (0..1) mută decupajul
    pe verticală: 0 = păstrează partea de sus, 1 = păstrează partea de jos."""
    src_ratio, dst_ratio = im.width / im.height, w / h
    if src_ratio > dst_ratio:
        new_w = int(im.height * dst_ratio)
        left = int((im.width - new_w) * 0.5)
        im = im.crop((left, 0, left + new_w, im.height))
    else:
        new_h = int(im.width / dst_ratio)
        top = int((im.height - new_h) * focus)
        im = im.crop((0, top, im.width, top + new_h))
    return im.resize((w, h), Image.LANCZOS)


def vertical_gradient(w: int, h: int, stops: list[tuple[float, int]]) -> Image.Image:
    """Mască de gradient vertical. stops = [(poziție 0..1, opacitate 0..255)]."""
    mask = Image.new('L', (1, h))
    px = mask.load()
    for y in range(h):
        t = y / (h - 1)
        value = stops[-1][1]
        for (p0, a0), (p1, a1) in zip(stops, stops[1:]):
            if p0 <= t <= p1:
                k = 0.0 if p1 == p0 else (t - p0) / (p1 - p0)
                value = int(a0 + (a1 - a0) * k)
                break
        px[0, y] = value
    return mask.resize((w, h))


def duotone(photo, shadow, mid, highlight, strength: float):
    """Mapează luminanța pe o rampă de trei culori, apoi amestecă cu originalul.
    Stil grafic, plat — culorile reale se pierd aproape complet."""
    gray = ImageOps.autocontrast(photo.convert('L'), cutoff=1)

    channels = []
    for c in range(3):
        lut = []
        for v in range(256):
            t = v / 255
            if t < 0.5:
                lut.append(int(shadow[c] + (mid[c] - shadow[c]) * (t / 0.5)))
            else:
                lut.append(int(mid[c] + (highlight[c] - mid[c]) * ((t - 0.5) / 0.5)))
        channels.append(gray.point(lut))

    return Image.blend(photo, Image.merge('RGB', channels), strength)


def split_tone(photo, strength: float, glow: float = 0.6):
    """Gradare de film: culorile reale rămân, verdele intră doar în umbre,
    luminile se încălzesc ușor. Pielea rămâne piele, imaginea rămâne vie."""
    # Saturație și contrast în plus — antidotul pentru „palid".
    photo = ImageEnhance.Color(photo).enhance(1 + 0.30 * strength)
    photo = ImageEnhance.Contrast(photo).enhance(1 + 0.20 * strength)

    lum = photo.convert('L')

    # Umbrele primesc verdele brandului, prin screen — le colorează fără să
    # le închidă. Masca e luminanța inversată, deci luminile rămân neatinse.
    tint = Image.new('RGB', photo.size, (int(6 * strength), int(58 * strength), int(44 * strength)))
    lifted = ImageChops.screen(photo, tint)
    shadow_mask = ImageOps.invert(lum).point(lambda v: int(v * 0.85))
    photo = Image.composite(lifted, photo, shadow_mask)

    # Luminile primesc un strop de căldură, ca pielea să nu vireze spre verde.
    warm = ImageChops.multiply(photo, Image.new('RGB', photo.size, (255, 250, 242)))
    photo = Image.composite(warm, photo, lum.point(lambda v: int(v * 0.6)))

    # Negrurile coborâte, ca titlul alb să aibă pe ce sta.
    black_point = int(14 * strength)
    photo = photo.point(lambda v: max(0, int((v - black_point) * 255 / (255 - black_point))))

    # Lumină verde difuză dintr-un colț — de aici vine identitatea de brand,
    # fără să atingă culorile din restul cadrului.
    if glow > 0:
        w, h = photo.size
        halo = Image.new('RGB', (w, h), (0, 0, 0))
        ImageDraw.Draw(halo).ellipse(
            (-w * 0.43, -h * 0.16, w * 0.57, h * 0.36),
            fill=(round(10 * glow), round(120 * glow), round(88 * glow)),
        )
        halo = halo.filter(ImageFilter.GaussianBlur(w * 0.21))
        photo = ImageChops.screen(photo, halo)

    return ImageEnhance.Brightness(photo).enhance(1.02)


def build_cover(src, out, headline, ghost=None, eyebrow=None, focus=0.35,
                tone=0.76, layout='jos', scale=1.0, stil='viu', glow=0.6,
                font_dir=FONT_DIR):
    # Toată geometria e definită pe 1080×1920 și se înmulțește cu `scale`,
    # ca o copertă mai mare să arate identic, doar cu mai mulți pixeli.
    w, h = round(WIDTH * scale), round(HEIGHT * scale)
    margin = round(MARGIN * scale)
    baseline = round(TEXT_BASELINE * scale)
    text_top = round(TEXT_TOP * scale)

    photo = fill_crop(Image.open(src).convert('RGB'), w, h, focus)

    # ── 1. Gradare ──
    if stil == 'duotone':
        photo = duotone(photo, (4, 12, 10), (13, 78, 60), (236, 252, 246), tone)
        photo = ImageEnhance.Contrast(photo).enhance(1.16)
        photo = ImageEnhance.Brightness(photo).enhance(0.94)
    else:
        photo = split_tone(photo, tone, glow)
    base = photo.convert('RGBA')

    # ── 2. Cuvânt repetat, estompat, în fundal ──
    if ghost:
        layer = Image.new('RGBA', (w, h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(layer)
        font = load_font(FONT_HEADLINE, round(150 * scale), font_dir)
        word = ghost.upper()
        step = draw.textlength(word, font=font) + 40 * scale
        rows = (210, 370, 530) if layout == 'jos' else (1130, 1290, 1450)
        for row, y in enumerate(rows):
            x = -60 * scale if row % 2 else 20 * scale
            while x < w:
                draw.text((x, round(y * scale)), word, font=font, fill=(255, 255, 255, 26))
                x += step
        base = Image.alpha_composite(base, layer)

    # ── 3. Întunecare graduală dinspre marginea pe care stă titlul ──
    if layout == 'jos':
        stops = [(0.0, 55), (0.26, 20), (0.50, 110), (0.70, 226), (1.0, 250)]
    else:
        stops = [(0.0, 248), (0.24, 216), (0.44, 96), (0.68, 24), (1.0, 96)]
    shade = Image.new('RGBA', (w, h), BLACK + (255,))
    shade.putalpha(vertical_gradient(w, h, stops))
    base = Image.alpha_composite(base, shade)

    # ── 4. Vignetă laterală discretă ──
    vig = Image.new('L', (w, h), 0)
    ImageDraw.Draw(vig).ellipse(
        (-w * 0.35, -h * 0.12, w * 1.35, h * 1.12), fill=255
    )
    vig = vig.filter(ImageFilter.GaussianBlur(150 * scale))
    dark = Image.new('RGBA', (w, h), BLACK + (110,))
    dark.putalpha(Image.eval(vig, lambda v: int((255 - v) * 0.43)))
    base = Image.alpha_composite(base, dark)

    draw = ImageDraw.Draw(base)
    lines = headline.split('|')

    # ── 5. Titlul, micșorat până încape pe lățime ──
    size = round(118 * scale)
    min_size = round(46 * scale)
    font = load_font(FONT_HEADLINE, size, font_dir)
    while max(draw.textlength(l, font=font) for l in lines) > w - margin * 2 and size > min_size:
        size -= max(1, round(2 * scale))
        font = load_font(FONT_HEADLINE, size, font_dir)

    line_h = int(size * 1.03)
    top = text_top if layout == 'sus' else baseline - line_h * len(lines)

    y = top
    for line in lines:
        draw.text((margin, y), line, font=font, fill=(255, 255, 255, 255))
        y += line_h

    # ── 6. Accent verde deasupra titlului ──
    if eyebrow:
        tag_font = load_font(FONT_EYEBROW, round(30 * scale), font_dir)
        ty = top - round(54 * scale)
        draw.ellipse((margin, ty + 9 * scale, margin + 13 * scale, ty + 22 * scale),
                     fill=GREEN + (255,))
        draw.text((margin + 28 * scale, ty), eyebrow.upper(), font=tag_font,
                  fill=GREEN + (255,))
    else:
        draw.rectangle((margin, top - 40 * scale, margin + 92 * scale, top - 33 * scale),
                       fill=GREEN + (255,))

    base.convert('RGB').save(out, quality=96, subsampling=0)
    return w, h, size


def main():
    p = argparse.ArgumentParser(
        description='Generează o copertă 1080×1920 pentru un reel Nextflow.ai.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='Titlul se desparte pe rânduri cu |  — ex: -t "ai-ul nu e|un moft"',
    )
    p.add_argument('sursa', help='cadrul din clip (jpg/png)')
    p.add_argument('-t', '--text', required=True, help='titlul; | desparte rândurile')
    p.add_argument('-o', '--out', help='fișierul de ieșire (implicit <sursa>-coperta.jpg)')
    p.add_argument('--ghost', help='cuvânt repetat estompat în fundal, ex: AI')
    p.add_argument('--eyebrow', help='eticheta mică verde de deasupra titlului')
    p.add_argument('--focus', type=float, default=0.35,
                   help='decupajul pe verticală, 0=sus … 1=jos (implicit 0.35)')
    p.add_argument('--tone', type=float, default=0.76,
                   help='intensitatea duotone-ului, 0=poza originală … 1=complet (implicit 0.76)')
    p.add_argument('--layout', choices=('jos', 'sus'), default='jos',
                   help='unde stă titlul: jos (implicit) sau sus')
    p.add_argument('--scale', type=float, default=1.0,
                   help='multiplică formatul peste 1080×1920, ex: 2 dă 2160×3840 (implicit 1)')
    p.add_argument('--stil', choices=('viu', 'duotone'), default='viu',
                   help='viu = gradare de film, culorile rămân (implicit); '
                        'duotone = stil grafic plat, verde peste tot')
    p.add_argument('--glow', type=float, default=0.6,
                   help='lumina verde din colț, 0=deloc … 1=puternic (implicit 0.6, doar pe stilul viu)')
    p.add_argument('--font-dir', type=Path, default=FONT_DIR, help='folderul cu fonturile Inter')
    args = p.parse_args()

    src = Path(args.sursa)
    if not src.exists():
        sys.exit(f'Nu găsesc fișierul: {src}')
    if not 0.0 <= args.focus <= 1.0:
        sys.exit('--focus trebuie să fie între 0 și 1')
    if not 0.0 <= args.tone <= 1.0:
        sys.exit('--tone trebuie să fie între 0 și 1')
    if not 0.5 <= args.scale <= 4.0:
        sys.exit('--scale trebuie să fie între 0.5 și 4')
    if not 0.0 <= args.glow <= 1.0:
        sys.exit('--glow trebuie să fie între 0 și 1')

    out = Path(args.out) if args.out else src.with_name(f'{src.stem}-coperta.jpg')
    w, h, size = build_cover(src, out, args.text, args.ghost, args.eyebrow,
                             args.focus, args.tone, args.layout, args.scale,
                             args.stil, args.glow, args.font_dir)
    print(f'{out}  —  {w}×{h}, titlu {size}px')


if __name__ == '__main__':
    main()
