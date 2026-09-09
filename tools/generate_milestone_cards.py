"""Generate sleek technical milestone graphics for Scene 3 (years 2021, 2023, 2024, 2025, 2026, 2027)."""
import os
import math
from PIL import Image, ImageDraw, ImageFont

OUT_DIR = "public/years"
os.makedirs(OUT_DIR, exist_ok=True)

W, H = 528, 396  # 4:3 high DPI

MILESTONES = [
    {
        "year": "2021",
        "tag": "ACADEMIC FOUNDATION",
        "title": "SSLC COMPLETED",
        "sub": "SDA Matriculation Higher Secondary",
        "accent": (255, 120, 50),
        "icon": "foundation"
    },
    {
        "year": "2023",
        "tag": "ENGINEERING ADMISSION",
        "title": "HSC 80% · B.E. CSE",
        "sub": "Jai Shriram Engineering College",
        "accent": (255, 90, 40),
        "icon": "college"
    },
    {
        "year": "2024",
        "tag": "RESEARCH & PRESENTATION",
        "title": "NEURAL LINK IN HUMAN BRAIN",
        "sub": "NETRIX 2024-2025 Paper Presentation",
        "accent": (255, 60, 40),
        "icon": "neural"
    },
    {
        "year": "2025",
        "tag": "EXPO FIRST PLACE & AWARDS",
        "title": "BEST PROJECT AWARD",
        "sub": "Guardian Union: Detect the Unseen · NOVA 2K25",
        "accent": (255, 160, 40),
        "icon": "award"
    },
    {
        "year": "2026",
        "tag": "AI SYSTEMS & GAMES",
        "title": "AI CCTV & LEGALSCANAI",
        "sub": "Object Detection · OpenCV · Unity 2D Runner",
        "accent": (222, 27, 28),
        "icon": "ai_cctv"
    },
    {
        "year": "2027",
        "tag": "FUTURE HORIZON",
        "title": "B.E. CSE GRADUATION",
        "sub": "Intelligent Systems · Scalable Software",
        "accent": (255, 80, 50),
        "icon": "grad"
    }
]

def draw_hud_grid(draw):
    for x in range(0, W, 24):
        draw.line([(x, 0), (x, H)], fill=(25, 18, 16), width=1)
    for y in range(0, H, 24):
        draw.line([(0, y), (W, y)], fill=(25, 18, 16), width=1)

def draw_brackets(draw, accent):
    c_len = 22
    pad = 18
    draw.line([(pad, pad), (pad + c_len, pad)], fill=accent, width=2)
    draw.line([(pad, pad), (pad, pad + c_len)], fill=accent, width=2)
    draw.line([(W - pad, pad), (W - pad - c_len, pad)], fill=accent, width=2)
    draw.line([(W - pad, pad), (W - pad, pad + c_len)], fill=accent, width=2)
    draw.line([(pad, H - pad), (pad + c_len, H - pad)], fill=accent, width=2)
    draw.line([(pad, H - pad), (pad, H - pad - c_len)], fill=accent, width=2)
    draw.line([(W - pad, H - pad), (W - pad - c_len, H - pad)], fill=accent, width=2)
    draw.line([(W - pad, H - pad), (W - pad, H - pad - c_len)], fill=accent, width=2)

def draw_icon(draw, cx, cy, icon_type, accent):
    if icon_type == "neural":
        nodes = [
            (cx - 50, cy - 25), (cx - 50, cy + 25),
            (cx, cy - 40), (cx, cy), (cx, cy + 40),
            (cx + 50, cy - 25), (cx + 50, cy + 25)
        ]
        for i, n1 in enumerate(nodes):
            for n2 in nodes[i+1:]:
                dist = math.hypot(n1[0] - n2[0], n1[1] - n2[1])
                if dist < 75:
                    draw.line([n1, n2], fill=(accent[0]//2, accent[1]//2, accent[2]//2), width=1)
        for x, y in nodes:
            draw.ellipse([x - 6, y - 6, x + 6, y + 6], fill=accent, outline=(255, 255, 255))

    elif icon_type == "ai_cctv":
        draw.rectangle([cx - 48, cy - 36, cx + 48, cy + 36], outline=accent, width=2)
        draw.line([(cx - 60, cy), (cx + 60, cy)], fill=accent, width=1)
        draw.line([(cx, cy - 48), (cx, cy + 48)], fill=accent, width=1)
        draw.ellipse([cx - 14, cy - 14, cx + 14, cy + 14], outline=(255, 255, 255), width=2)
        draw.polygon([(cx - 36, cy - 26), (cx - 30, cy - 26), (cx - 36, cy - 20)], fill=accent)
        draw.polygon([(cx + 36, cy + 26), (cx + 30, cy + 26), (cx + 36, cy + 20)], fill=accent)

    elif icon_type == "award":
        draw.polygon([
            (cx, cy - 42), (cx + 36, cy - 22), (cx + 30, cy + 22),
            (cx, cy + 42), (cx - 30, cy + 22), (cx - 36, cy - 22)
        ], outline=accent, fill=(40, 24, 16), width=2)
        draw.ellipse([cx - 12, cy - 12, cx + 12, cy + 12], fill=accent, outline=(255, 255, 255))
        draw.arc([cx - 52, cy - 20, cx - 20, cy + 26], start=90, end=270, fill=accent, width=2)
        draw.arc([cx + 20, cy - 20, cx + 52, cy + 26], start=270, end=90, fill=accent, width=2)

    elif icon_type == "college":
        draw.polygon([(cx, cy - 35), (cx + 45, cy - 15), (cx, cy + 5), (cx - 45, cy - 15)], fill=accent)
        draw.line([(cx - 30, cy - 8), (cx - 30, cy + 25), (cx, cy + 35), (cx + 30, cy + 25), (cx + 30, cy - 8)], fill=accent, width=2)
        draw.line([(cx + 45, cy - 15), (cx + 45, cy + 15)], fill=(255, 255, 255), width=2)

    elif icon_type == "foundation":
        draw.rectangle([cx - 35, cy - 10, cx + 35, cy + 30], outline=accent, width=2)
        draw.rectangle([cx - 24, cy - 35, cx + 24, cy - 12], outline=accent, width=2)
        draw.line([(cx, cy - 44), (cx, cy - 35)], fill=(255, 255, 255), width=2)
        draw.ellipse([cx - 6, cy + 4, cx + 6, cy + 16], fill=accent)

    elif icon_type == "grad":
        draw.line([(cx - 50, cy), (cx + 50, cy)], fill=accent, width=2)
        draw.line([(cx, cy - 50), (cx, cy + 50)], fill=accent, width=2)
        draw.polygon([(cx, cy - 38), (cx + 12, cy), (cx, cy + 38), (cx - 12, cy)], fill=accent)
        draw.polygon([(cx - 38, cy), (cx, cy + 12), (cx + 38, cy), (cx, cy - 12)], fill=accent)
        draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=(255, 255, 255))

for m in MILESTONES:
    img = Image.new("RGB", (W, H), (10, 8, 8))
    draw = ImageDraw.Draw(img)

    accent = m["accent"]
    for r in range(180, 0, -10):
        alpha = int(40 * (1 - r / 180))
        glow_color = (alpha, int(alpha * 0.4), int(alpha * 0.2))
        draw.ellipse([W//2 - int(r*1.3), H//2 - r, W//2 + int(r*1.3), H//2 + r], fill=glow_color)

    draw_hud_grid(draw)
    draw_brackets(draw, accent)

    draw_icon(draw, W // 2, 130, m["icon"], accent)

    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 68)
        font_tag = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 13)
        font_title = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 20)
        font_sub = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", 14)
    except:
        font_large = ImageFont.load_default()
        font_tag = font_large
        font_title = font_large
        font_sub = font_large

    draw.text((W // 2, 60), m["year"], fill=(40, 26, 22), font=font_large, anchor="mm")

    tag_text = f"• {m['tag']} •"
    draw.text((W // 2, 238), tag_text, fill=accent, font=font_tag, anchor="mm")

    draw.text((W // 2, 275), m["title"], fill=(250, 240, 235), font=font_title, anchor="mm")

    draw.text((W // 2, 310), m["sub"], fill=(170, 150, 140), font=font_sub, anchor="mm")

    draw.line([(40, 345), (W - 40, 345)], fill=(45, 32, 28), width=1)
    draw.text((42, 362), "SYSTEM / TIMELINE ARCHIVE", fill=(95, 75, 68), font=font_tag, anchor="lm")
    draw.text((W - 42, 362), f"LOG::{m['year']}", fill=accent, font=font_tag, anchor="rm")

    out_path = os.path.join(OUT_DIR, f"{m['year']}.jpg")
    img.save(out_path, quality=94)
    print(f"Generated {out_path}")
