import os
from PIL import Image

artifact_dir = r"C:\Users\Rakshitha\.gemini\antigravity\brain\0e5a4700-e2e9-455b-86b5-3c6b355e3899"
desktop_path = os.path.join(artifact_dir, "about_us_desktop.png")

img = Image.open(desktop_path)
width, height = img.size

# S1 + S2 + S3: Page Header, Marquee, Overview (approx 0 to 1400)
crop1 = img.crop((0, 0, width, min(1450, height)))
crop1.save(os.path.join(artifact_dir, "preview_about_hero_overview.png"))
print("Saved preview_about_hero_overview.png")

# S4: Core Values (approx 1400 to 2200)
crop2 = img.crop((0, 1400, width, min(2250, height)))
crop2.save(os.path.join(artifact_dir, "preview_about_core_values.png"))
print("Saved preview_about_core_values.png")

# S5: Why Choose Us (approx 2200 to 3250)
crop3 = img.crop((0, 2200, width, min(3250, height)))
crop3.save(os.path.join(artifact_dir, "preview_about_why_choose_us.png"))
print("Saved preview_about_why_choose_us.png")

# S6 + S7: Clients & Testimonials (approx 3200 to 4450)
crop4 = img.crop((0, 3200, width, min(4450, height)))
crop4.save(os.path.join(artifact_dir, "preview_about_clients_testimonials.png"))
print("Saved preview_about_clients_testimonials.png")

# S8: Technical Knowledge & FAQ (approx 4400 to end)
crop5 = img.crop((0, 4400, width, min(5650, height)))
crop5.save(os.path.join(artifact_dir, "preview_about_faq_inquiry.png"))
print("Saved preview_about_faq_inquiry.png")

