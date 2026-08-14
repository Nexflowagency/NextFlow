#!/usr/bin/env python3
"""
Generator de coperte pentru reel-urile Nextflow.ai.

Ia un cadru din clip și scoate o copertă 1080×1920 gata de urcat pe Instagram:
gradare duotone pe culorile agenției, întunecare graduală în jos și câteva
cuvinte mari peste. Fără AI — doar editare pe imaginea reală.

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
    from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps
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
    """Mapează luminanța pe o rampă de trei culori, apoi amestecă cu originalul."""
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


def build_cover(src, out, headline, ghost=None, eyebrow=None, focus=0.35,
                tone=0.76, layout='jos', font_dir=FONT_DIR):
    photo = fill_crop(Image.open(src).convert('RGB'), WIDTH, HEIGHT, focus)

    # ── 1. Gradare: negru → verde brand → alb răcoros ──
    photo = duotone(photo, (4, 12, 10), (13, 78, 60), (236, 252, 246), tone)
    photo = ImageEnhance.Contrast(photo).enhance(1.16)
    photo = ImageEnhance.Brightness(photo).enhance(0.94)
    base = photo.convert('RGBA')

    # ── 2. Cuvânt repetat, estompat, în fundal ──
    if ghost:
        layer = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
        draw = ImageDraw.Draw(layer)
        font = load_font(FONT_HEADLINE, 150, font_dir)
        word = ghost.upper()
        step = draw.textlength(word, font=font) + 40
        rows = (210, 370, 530) if layout == 'jos' else (1130, 1290, 1450)
        for row, y in enumerate(rows):
            x = -60 if row % 2 else 20
            while x < WIDTH:
                draw.text((x, y), word, font=font, fill=(255, 255, 255, 26))
                x += step
        base = Image.alpha_composite(base, layer)

    # ── 3. Întunecare graduală dinspre marginea pe care stă titlul ──
    if layout == 'jos':
        stops = [(0.0, 55), (0.26, 20), (0.50, 110), (0.70, 226), (1.0, 250)]
    else:
        stops = [(0.0, 248), (0.24, 216), (0.44, 96), (0.68, 24), (1.0, 96)]
    shade = Image.new('RGBA', (WIDTH, HEIGHT), BLACK + (255,))
    shade.putalpha(vertical_gradient(WIDTH, HEIGHT, stops))
    base = Image.alpha_composite(base, shade)

    # ── 4. Vignetă laterală discretă ──
    vig = Image.new('L', (WIDTH, HEIGHT), 0)
    ImageDraw.Draw(vig).ellipse(
        (-WIDTH * 0.35, -HEIGHT * 0.12, WIDTH * 1.35, HEIGHT * 1.12), fill=255
    )
    vig = vig.filter(ImageFilter.GaussianBlur(150))
    dark = Image.new('RGBA', (WIDTH, HEIGHT), BLACK + (110,))
    dark.putalpha(Image.eval(vig, lambda v: int((255 - v) * 0.43)))
    base = Image.alpha_composite(base, dark)

    draw = ImageDraw.Draw(base)
    lines = headline.split('|')

    # ── 5. Titlul, micșorat până încape pe lățime ──
    size = 118
    font = load_font(FONT_HEADLINE, size, font_dir)
    while max(draw.textlength(l, font=font) for l in lines) > WIDTH - MARGIN * 2 and size > 46:
        size -= 2
        font = load_font(FONT_HEADLINE, size, font_dir)

    line_h = int(size * 1.03)
    top = TEXT_TOP if layout == 'sus' else TEXT_BASELINE - line_h * len(lines)

    y = top
    for line in lines:
        draw.text((MARGIN, y), line, font=font, fill=(255, 255, 255, 255))
        y += line_h

    # ── 6. Accent verde deasupra titlului ──
    if eyebrow:
        tag_font = load_font(FONT_EYEBROW, 30, font_dir)
        ty = top - 54
        draw.ellipse((MARGIN, ty + 9, MARGIN + 13, ty + 22), fill=GREEN + (255,))
        draw.text((MARGIN + 28, ty), eyebrow.upper(), font=tag_font, fill=GREEN + (255,))
    else:
        draw.rectangle((MARGIN, top - 40, MARGIN + 92, top - 33), fill=GREEN + (255,))

    base.convert('RGB').save(out, quality=95, subsampling=0)
    return size


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
    p.add_argument('--font-dir', type=Path, default=FONT_DIR, help='folderul cu fonturile Inter')
    args = p.parse_args()

    src = Path(args.sursa)
    if not src.exists():
        sys.exit(f'Nu găsesc fișierul: {src}')
    if not 0.0 <= args.focus <= 1.0:
        sys.exit('--focus trebuie să fie între 0 și 1')
    if not 0.0 <= args.tone <= 1.0:
        sys.exit('--tone trebuie să fie între 0 și 1')

    out = Path(args.out) if args.out else src.with_name(f'{src.stem}-coperta.jpg')
    size = build_cover(src, out, args.text, args.ghost, args.eyebrow,
                       args.focus, args.tone, args.layout, args.font_dir)
    print(f'{out}  —  {WIDTH}×{HEIGHT}, titlu {size}px')


if __name__ == '__main__':
    main()
