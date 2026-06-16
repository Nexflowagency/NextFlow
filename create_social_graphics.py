from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter
import numpy as np

FONTS = "/home/user/NextFlow/fonts"
F_EXTRABOLD = f"{FONTS}/Montserrat-ExtraBold.ttf"
F_SEMIBOLD  = f"{FONTS}/Montserrat-SemiBold.ttf"
F_REGULAR   = f"{FONTS}/Montserrat-Regular.ttf"
F_LIGHT     = f"{FONTS}/Montserrat-Light.ttf"

GREEN       = (0, 200, 90)
WHITE       = (255, 255, 255)
OFF_WHITE   = (230, 235, 230)
DARK        = (10, 10, 10)


def add_vignette(img):
    """Smooth radial dark vignette around edges."""
    arr = np.array(img).astype(np.float32)
    h, w = arr.shape[:2]
    cx, cy = w / 2, h / 2
    Y, X = np.ogrid[:h, :w]
    dist = np.sqrt(((X - cx) / (w * 0.55))**2 + ((Y - cy) / (h * 0.55))**2)
    mask = np.clip(dist - 0.3, 0, 1)
    mask = (mask ** 1.6) * 0.75
    for c in range(3):
        arr[:, :, c] *= (1 - mask)
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def add_bottom_gradient(img, strength=0.88, height_ratio=0.62):
    """Deep cinematic gradient at bottom."""
    arr = np.array(img).astype(np.float32)
    h, w = arr.shape[:2]
    zone = int(h * height_ratio)
    for i in range(zone):
        y = h - 1 - i
        t = i / zone
        factor = 1 - (1 - t ** 1.8) * strength
        arr[y, :, :3] *= factor
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def add_top_gradient(img, strength=0.55, height_ratio=0.22):
    """Subtle dark gradient at top for label readability."""
    arr = np.array(img).astype(np.float32)
    h, w = arr.shape[:2]
    zone = int(h * height_ratio)
    for i in range(zone):
        t = i / zone
        factor = 1 - (1 - t ** 1.4) * strength
        arr[i, :, :3] *= factor
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def add_noise(img, amount=6):
    """Subtle film grain for premium texture."""
    arr = np.array(img).astype(np.int16)
    noise = np.random.randint(-amount, amount + 1, arr.shape, dtype=np.int16)
    arr = np.clip(arr + noise, 0, 255).astype(np.uint8)
    return Image.fromarray(arr)


def text_lines(draw, text, font, max_width):
    """Word-wrap text into lines fitting max_width."""
    words = text.split()
    lines, cur = [], ""
    for word in words:
        test = (cur + " " + word).strip()
        if draw.textbbox((0, 0), test, font=font)[2] <= max_width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def draw_text_shadow(draw, text, pos, font, color=WHITE, shadow_color=(0,0,0), blur_r=0, offset=3, shadow_alpha=160):
    """Draw text with drop shadow."""
    x, y = pos
    # Shadow
    tmp = Image.new("RGBA", draw._image.size, (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    td.text((x + offset, y + offset), text, font=font, fill=shadow_color + (shadow_alpha,))
    draw._image.paste(Image.alpha_composite(draw._image.convert("RGBA"), tmp).convert("RGB"))
    # Main text
    draw.text((x, y), text, font=font, fill=color)


def create_graphic(input_path, output_path, tag, headline, subline, brand):
    img = Image.open(input_path)
    img = ImageOps.exif_transpose(img)
    w, h = img.size

    # --- Color grading pipeline ---
    img = add_top_gradient(img, strength=0.50, height_ratio=0.20)
    img = add_bottom_gradient(img, strength=0.92, height_ratio=0.65)
    img = add_vignette(img)
    img = add_noise(img, amount=5)

    draw = ImageDraw.Draw(img)
    pad = int(w * 0.07)
    text_w = w - 2 * pad

    # ── SIZES (relative to image height) ──
    sz_tag      = int(h * 0.028)
    sz_headline = int(h * 0.066)
    sz_subline  = int(h * 0.033)
    sz_brand    = int(h * 0.025)

    font_tag      = ImageFont.truetype(F_SEMIBOLD,  sz_tag)
    font_headline = ImageFont.truetype(F_EXTRABOLD, sz_headline)
    font_subline  = ImageFont.truetype(F_LIGHT,     sz_subline)
    font_brand    = ImageFont.truetype(F_SEMIBOLD,  sz_brand)

    # ── TOP TAG ──
    tag_text = tag.upper()
    dot_font = ImageFont.truetype(F_SEMIBOLD, sz_tag)

    # Green dot accent
    dot_r = int(sz_tag * 0.38)
    dot_x = pad
    dot_y = int(h * 0.055) + dot_r
    draw.ellipse([dot_x, dot_y - dot_r, dot_x + dot_r*2, dot_y + dot_r], fill=GREEN)

    # Tag text
    tag_x = dot_x + dot_r * 2 + int(w * 0.022)
    tag_y = int(h * 0.055)
    draw.text((tag_x, tag_y), tag_text, font=font_tag, fill=WHITE)

    # Thin green underline under tag
    tag_bbox = draw.textbbox((tag_x, tag_y), tag_text, font=font_tag)
    line_y = tag_bbox[3] + int(h * 0.007)
    draw.line([(pad, line_y), (pad + int(w * 0.18), line_y)], fill=GREEN, width=2)

    # ── BOTTOM TEXT BLOCK ──
    lines = text_lines(draw, headline, font_headline, text_w)
    line_h = int(sz_headline * 1.18)
    sub_h  = int(sz_subline  * 1.5)
    brand_h = int(sz_brand   * 1.5)
    spacer  = int(h * 0.022)
    accent_h = int(h * 0.004)

    sub_lines_est = text_lines(draw, subline, font_subline, text_w)
    sub_line_h_est = int(sz_subline * 1.45)
    total = len(lines) * line_h + spacer + len(sub_lines_est) * sub_line_h_est + spacer * 2 + accent_h + spacer + brand_h
    start_y = h - total - int(h * 0.065)

    # Headline
    cy = start_y
    for line in lines:
        lw = draw.textbbox((0, 0), line, font=font_headline)[2]
        x = pad  # left-aligned — more editorial
        # Shadow layer
        shadow_img = Image.new("RGBA", img.size, (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow_img)
        sd.text((x + 3, cy + 3), line, font=font_headline, fill=(0, 0, 0, 140))
        img = Image.alpha_composite(img.convert("RGBA"), shadow_img).convert("RGB")
        draw = ImageDraw.Draw(img)
        draw.text((x, cy), line, font=font_headline, fill=WHITE)
        cy += line_h

    cy += spacer

    # Subline (wrapped)
    sub_lines = text_lines(draw, subline, font_subline, text_w)
    sub_line_h = int(sz_subline * 1.45)
    for sl in sub_lines:
        shadow_img2 = Image.new("RGBA", img.size, (0, 0, 0, 0))
        sd2 = ImageDraw.Draw(shadow_img2)
        sd2.text((pad + 2, cy + 2), sl, font=font_subline, fill=(0, 0, 0, 120))
        img = Image.alpha_composite(img.convert("RGBA"), shadow_img2).convert("RGB")
        draw = ImageDraw.Draw(img)
        draw.text((pad, cy), sl, font=font_subline, fill=OFF_WHITE)
        cy += sub_line_h
    cy += spacer

    # Thin green accent line
    draw.rectangle([pad, cy, pad + int(w * 0.12), cy + accent_h], fill=GREEN)
    cy += accent_h + spacer

    # Brand
    draw.text((pad, cy), brand.upper(), font=font_brand, fill=GREEN)

    img.save(output_path, quality=97)
    print(f"Saved: {output_path}  ({w}x{h})")


# ── GRAPHIC 1 — Google Ads ──
create_graphic(
    input_path  = "/root/.claude/uploads/59c2a275-b5ba-562a-930b-176d1b5856a2/071d7600-IMG_5843.jpeg",
    output_path = "/home/user/NextFlow/social_graphic_1_google_ads.jpg",
    tag      = "AI Marketing Agency",
    headline = "Vizibilitatea ta online începe cu o decizie.",
    subline  = "Brandurile care adoptă AI cresc de 3× mai rapid.",
    brand    = "NextFlow Agency  ·  nextflow.ro",
)

# ── GRAPHIC 2 — Analytics ──
create_graphic(
    input_path  = "/root/.claude/uploads/59c2a275-b5ba-562a-930b-176d1b5856a2/0c062db4-IMG_5842.jpeg",
    output_path = "/home/user/NextFlow/social_graphic_2_analytics.jpg",
    tag      = "Data-Driven Growth",
    headline = "Rezultatele nu mint. Strategia ta o face.",
    subline  = "Transformăm datele tale în decizii care generează profit.",
    brand    = "NextFlow Agency  ·  nextflow.ro",
)

print("Done.")
