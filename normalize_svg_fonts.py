#!/usr/bin/env python3
"""
Normalize SVG font sizes across all SVGs in data.js.
Creates two versions (min 10px and min 12px) for comparison,
then applies the chosen one.

Usage:
  python3 normalize_svg_fonts.py --preview    # Show both mappings and sample output
  python3 normalize_svg_fonts.py --apply 10   # Apply min-10px mapping
  python3 normalize_svg_fonts.py --apply 12   # Apply min-12px mapping
"""

import re
import sys
import os

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.js")

# Current font sizes found in SVGs and their intended mapping
# Each current size maps to a new size that maintains the visual hierarchy

MAPPING_MIN_10 = {
    20: 10,
    22: 11,
    25: 12,
    26: 13,
    28: 14,
    29: 15,
    31: 16,
    38: 19,
    42: 21,
}

MAPPING_MIN_12 = {
    20: 12,
    22: 13,
    25: 14,
    26: 15,
    28: 16,
    29: 17,
    31: 18,
    38: 22,
    42: 24,
}


def find_svg_blocks(content):
    """Find all SVG blocks in the content and return their spans."""
    pattern = re.compile(r'<svg\b[^>]*>.*?</svg>', re.DOTALL)
    return list(pattern.finditer(content))


def apply_font_mapping(svg_text, mapping):
    """Replace font-size values within an SVG string according to the mapping."""
    def replace_font_size(match):
        old_size = int(match.group(1))
        new_size = mapping.get(old_size, old_size)
        return f'font-size="{new_size}"'

    return re.sub(r'font-size="(\d+)"', replace_font_size, svg_text)


def get_font_size_counts(content):
    """Count occurrences of each font-size in SVG blocks."""
    svgs = find_svg_blocks(content)
    counts = {}
    for svg_match in svgs:
        sizes = re.findall(r'font-size="(\d+)"', svg_match.group())
        for s in sizes:
            s = int(s)
            counts[s] = counts.get(s, 0) + 1
    return counts


def preview(content):
    """Show the font size mappings and counts for both options."""
    counts = get_font_size_counts(content)
    svgs = find_svg_blocks(content)

    print(f"Found {len(svgs)} SVG blocks in data.js")
    print(f"\nCurrent font sizes found in SVGs:")
    print(f"{'Size':>6} {'Count':>7}  {'Role':>20}")
    print("-" * 40)

    role_map = {
        20: "Smallest",
        22: "Fine print",
        25: "Small text",
        26: "Detail text",
        28: "Body text",
        29: "Section text",
        31: "Subtitles",
        38: "Large subtitle",
        42: "Main titles",
    }

    for size in sorted(counts.keys()):
        role = role_map.get(size, "Unknown")
        print(f"{size:>4}px {counts[size]:>7}x  {role:>20}")

    print(f"\n{'='*60}")
    print(f"OPTION A: Minimum 10px")
    print(f"{'='*60}")
    print(f"{'Current':>8} → {'New':>4}  {'Role':>20}  {'Count':>7}")
    print("-" * 50)
    for old_size in sorted(MAPPING_MIN_10.keys()):
        if old_size in counts:
            new_size = MAPPING_MIN_10[old_size]
            role = role_map.get(old_size, "Unknown")
            print(f"{old_size:>6}px → {new_size:>3}px  {role:>20}  {counts[old_size]:>7}x")

    print(f"\n{'='*60}")
    print(f"OPTION B: Minimum 12px")
    print(f"{'='*60}")
    print(f"{'Current':>8} → {'New':>4}  {'Role':>20}  {'Count':>7}")
    print("-" * 50)
    for old_size in sorted(MAPPING_MIN_12.keys()):
        if old_size in counts:
            new_size = MAPPING_MIN_12[old_size]
            role = role_map.get(old_size, "Unknown")
            print(f"{old_size:>6}px → {new_size:>3}px  {role:>20}  {counts[old_size]:>7}x")

    # Show a sample SVG snippet with both mappings
    if svgs:
        sample = svgs[0].group()
        # Get first few text elements
        text_elements = re.findall(r'<text[^>]*font-size="(\d+)"[^>]*>[^<]*</text>', sample)[:5]
        if text_elements:
            print(f"\n{'='*60}")
            print("Sample: First SVG text elements")
            print(f"{'='*60}")

            sample_texts = re.findall(r'(<text[^>]*font-size="\d+"[^>]*>[^<]*</text>)', sample)[:3]
            for t in sample_texts:
                print(f"\nOriginal:  {t[:120]}...")
                t10 = apply_font_mapping(t, MAPPING_MIN_10)
                print(f"Min 10px:  {t10[:120]}...")
                t12 = apply_font_mapping(t, MAPPING_MIN_12)
                print(f"Min 12px:  {t12[:120]}...")


def apply(content, min_size):
    """Apply the chosen mapping to all SVGs in the content."""
    mapping = MAPPING_MIN_10 if min_size == 10 else MAPPING_MIN_12

    svgs = find_svg_blocks(content)
    if not svgs:
        print("No SVG blocks found!")
        return content

    # Track changes
    total_replacements = 0
    result = content

    # Process SVGs in reverse order to maintain correct positions
    for svg_match in reversed(svgs):
        original_svg = svg_match.group()
        new_svg = apply_font_mapping(original_svg, mapping)
        if original_svg != new_svg:
            changes = sum(1 for a, b in zip(
                re.findall(r'font-size="\d+"', original_svg),
                re.findall(r'font-size="\d+"', new_svg)
            ) if a != b)
            total_replacements += changes
            result = result[:svg_match.start()] + new_svg + result[svg_match.end():]

    print(f"Applied min-{min_size}px mapping to {len(svgs)} SVG blocks")
    print(f"Total font-size attributes changed: {total_replacements}")
    return result


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    print(f"Reading {DATA_FILE}...")
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    print(f"File size: {len(content):,} characters")

    if sys.argv[1] == "--preview":
        preview(content)

    elif sys.argv[1] == "--apply" and len(sys.argv) == 3:
        min_size = int(sys.argv[2])
        if min_size not in (10, 12):
            print("Error: min size must be 10 or 12")
            sys.exit(1)

        new_content = apply(content, min_size)

        # Write back
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Successfully wrote updated {DATA_FILE}")

        # Verify
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            verify_content = f.read()
        verify_counts = get_font_size_counts(verify_content)
        print(f"\nVerification - new font sizes in SVGs:")
        for size in sorted(verify_counts.keys()):
            print(f"  {size}px: {verify_counts[size]}x")

    else:
        print(__doc__)
        sys.exit(1)


if __name__ == "__main__":
    main()
