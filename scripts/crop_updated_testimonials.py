import os
from PIL import Image

artifact_dir = r"C:\Users\Rakshitha\.gemini\antigravity\brain\0e5a4700-e2e9-455b-86b5-3c6b355e3899"
desktop_path = os.path.join(artifact_dir, "updated_about_us_desktop.png")

img = Image.open(desktop_path)
width, height = img.size

# Crop Testimonials section (approx 3600 to 4750)
crop = img.crop((0, 3600, width, min(4800, height)))
out_path = os.path.join(artifact_dir, "preview_updated_indian_testimonials.png")
crop.save(out_path)
print("Saved preview_updated_indian_testimonials.png")

