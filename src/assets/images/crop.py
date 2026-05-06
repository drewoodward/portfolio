import os
import sys
from PIL import Image

def crop_16_9(path):
    target_ratio = 16 / 9

    if not os.path.isfile(path):
        print(f"Skipping (not a file): {path}")
        return

    out_dir = os.path.join(os.path.dirname(path) or ".", "cropped")
    os.makedirs(out_dir, exist_ok=True)

    img = Image.open(path)
    w, h = img.size
    current_ratio = w / h

    if current_ratio > target_ratio:
        new_width = h * target_ratio
        left = (w - new_width) / 2
        crop_box = (left, 0, left + new_width, h)
    else:
        new_height = w / target_ratio
        top = (h - new_height) / 2
        crop_box = (0, top, w, top + new_height)

    filename = os.path.basename(path)
    out_path = os.path.join(out_dir, f"16-9_{filename}")
    img.crop(crop_box).save(out_path)
    print(f"Processed: {path} -> {out_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python crop.py <file1> [file2 ...]")
        sys.exit(1)

    for arg in sys.argv[1:]:
        crop_16_9(arg)
