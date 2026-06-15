from PIL import Image, ImageDraw, ImageFont, ImageFilter
import textwrap

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG  = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

def draw_text_with_shadow(draw, text, pos, font, fill=(255,255,255), shadow=(0,0,0), shadow_offset=4):
    x, y = pos
    draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=shadow + (180,))
    draw.text((x, y), text, font=font, fill=fill)

def add_gradient_overlay(img, top_alpha=200, bottom_alpha=220):
    """Add dark gradient at top and bottom for text readability."""
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    w, h = img.size

    # Top gradient
    for i in range(int(h * 0.35)):
        alpha = int(top_alpha * (1 - i / (h * 0.35)))
        draw.line([(0, i), (w, i)], fill=(0, 0, 0, alpha))

    # Bottom gradient
    for i in range(int(h * 0.45)):
        y = h - 1 - i
        alpha = int(bottom_alpha * (1 - i / (h * 0.45)))
        draw.line([(0, y), (w, y)], fill=(0, 0, 0, alpha))

    img = img.convert("RGBA")
    img = Image.alpha_composite(img, overlay)
    return img.convert("RGB")

def wrap_and_draw(draw, text, font, max_width, x, y, fill=(255,255,255), shadow=(0,0,0), center=True):
    """Wrap text and draw centered or left-aligned."""
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = (current + " " + word).strip()
        bbox = draw.textbbox((0,0), test, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)

    total_h = sum(draw.textbbox((0,0), l, font=font)[3] - draw.textbbox((0,0), l, font=font)[1] + 8 for l in lines)
    cy = y
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font)
        lw = bbox[2] - bbox[0]
        lh = bbox[3] - bbox[1]
        dx = (max_width - lw) // 2 if center else 0
        draw_text_with_shadow(draw, line, (x + dx, cy), font, fill=fill, shadow=shadow)
        cy += lh + 8
    return cy

def create_graphic(input_path, output_path, top_label, headline, subline, tag):
    img = Image.open(input_path)
    w, h = img.size

    img = add_gradient_overlay(img, top_alpha=210, bottom_alpha=230)
    draw = ImageDraw.Draw(img)

    padding = int(w * 0.06)
    text_w = w - 2 * padding

    # --- TOP LABEL ---
    font_tag = ImageFont.truetype(FONT_BOLD, int(h * 0.038))
    label_bbox = draw.textbbox((0,0), top_label, font=font_tag)
    label_w = label_bbox[2] - label_bbox[0]
    label_h = label_bbox[3] - label_bbox[1]
    lx = (w - label_w) // 2
    ly = int(h * 0.05)
    # Pill background for label
    pill_pad = 14
    draw.rounded_rectangle(
        [lx - pill_pad, ly - pill_pad//2, lx + label_w + pill_pad, ly + label_h + pill_pad//2],
        radius=20, fill=(30, 80, 255, 200)
    )
    draw.text((lx, ly), top_label, font=font_tag, fill=(255, 255, 255))

    # --- BOTTOM BLOCK ---
    font_headline = ImageFont.truetype(FONT_BOLD, int(h * 0.075))
    font_sub      = ImageFont.truetype(FONT_REG,  int(h * 0.042))
    font_brand    = ImageFont.truetype(FONT_BOLD, int(h * 0.032))

    # Measure headline block height
    words = headline.split()
    lines = []
    current = ""
    for word in words:
        test = (current + " " + word).strip()
        bbox = draw.textbbox((0,0), test, font=font_headline)
        if bbox[2] - bbox[0] <= text_w:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)

    line_h = draw.textbbox((0,0), "A", font=font_headline)[3] + 10
    sub_h  = draw.textbbox((0,0), "A", font=font_sub)[3] + 10
    brand_h = draw.textbbox((0,0), "A", font=font_brand)[3] + 10
    total_block = len(lines) * line_h + sub_h + brand_h + int(h * 0.04)

    start_y = h - total_block - int(h * 0.06)

    # Draw headline lines
    cy = start_y
    for line in lines:
        bbox = draw.textbbox((0,0), line, font=font_headline)
        lw = bbox[2] - bbox[0]
        dx = (w - lw) // 2
        draw_text_with_shadow(draw, line, (dx, cy), font_headline, fill=(255,255,255), shadow=(0,0,0), shadow_offset=3)
        cy += line_h

    cy += int(h * 0.015)

    # Subline
    sub_bbox = draw.textbbox((0,0), subline, font=font_sub)
    sub_w = sub_bbox[2] - sub_bbox[0]
    draw_text_with_shadow(draw, subline, ((w - sub_w)//2, cy), font_sub, fill=(200, 220, 255), shadow=(0,0,0))
    cy += sub_h + int(h * 0.018)

    # Separator line
    draw.line([(padding*2, cy), (w - padding*2, cy)], fill=(255,255,255,100), width=1)
    cy += int(h * 0.015)

    # Brand tag
    brand_bbox = draw.textbbox((0,0), tag, font=font_brand)
    brand_w = brand_bbox[2] - brand_bbox[0]
    draw.text(((w - brand_w)//2, cy), tag, font=font_brand, fill=(150, 190, 255))

    img.save(output_path, quality=95)
    print(f"Saved: {output_path}")


# ---- IMAGE 1: Google Ads ----
create_graphic(
    input_path  = "/root/.claude/uploads/59c2a275-b5ba-562a-930b-176d1b5856a2/071d7600-IMG_5843.jpeg",
    output_path = "/home/user/NextFlow/social_graphic_1_google_ads.jpg",
    top_label   = "🤖  AI MARKETING AGENCY",
    headline    = "CONCURENȚA TA RULEAZĂ RECLAME AI.",
    subline     = "Tu mai aștepți?  Schimbarea e acum.",
    tag         = "NextFlow Agency  •  nextflow.ro"
)

# ---- IMAGE 2: Analytics ----
create_graphic(
    input_path  = "/root/.claude/uploads/59c2a275-b5ba-562a-930b-176d1b5856a2/0c062db4-IMG_5842.jpeg",
    output_path = "/home/user/NextFlow/social_graphic_2_analytics.jpg",
    top_label   = "📊  REZULTATE REALE",
    headline    = "DATELE NU MINT. TU TE MAI ASCUNZI?",
    subline     = "Ia decizia care îți schimbă afacerea.",
    tag         = "NextFlow Agency  •  nextflow.ro"
)

print("Done! Both graphics created.")
