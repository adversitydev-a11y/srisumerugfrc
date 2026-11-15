from __future__ import annotations

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
EXTRACTED_PATH = ROOT / "work" / "content-extract" / "extracted-content-refresh.json"
OUTPUT_PATH = ROOT / "src" / "assets" / "content document" / "content.md"


REPLACEMENTS = {
    "â€“": "-",
    "â€”": "-",
    "â€™": "'",
    "â€˜": "'",
    "â€œ": '"',
    "â€": '"',
    "â€³": '"',
    "Â²": "2",
    "Â³": "3",
    "MÃ­nimum": "Minimum",
    "DÃ©cor": "Decor",
    "dÃ©cor": "decor",
    "Concerete": "Concrete",
}


def clean(value: object) -> str:
    text = str(value or "").strip()
    for old, new in REPLACEMENTS.items():
        text = text.replace(old, new)
    return " ".join(text.split())


def bullet(items: list[str]) -> str:
    return "\n".join(f"- {clean(item)}" for item in items if clean(item))


def numbered(items: list[str]) -> str:
    return "\n".join(f"{index}. {clean(item)}" for index, item in enumerate(items, start=1) if clean(item))


def table(headers: list[str], rows: list[list[str]]) -> str:
    header = "| " + " | ".join(headers) + " |"
    divider = "| " + " | ".join("---" for _ in headers) + " |"
    body = "\n".join("| " + " | ".join(clean(cell) for cell in row) + " |" for row in rows)
    return "\n".join([header, divider, body])


def source_name(source: dict) -> str:
    path = clean(source.get("path", ""))
    return Path(path).name if path else "Unknown source"


def docx_blocks(source: dict) -> list[str]:
    return [clean(block.get("text", "")) for block in source.get("blocks", []) if block.get("kind") == "paragraph"]


def ppt_slides(source: dict) -> list[dict]:
    return source.get("slides", [])


def build_archive(sources: list[dict]) -> str:
    parts: list[str] = ["## Complete Source Archive", ""]
    parts.append(
        "This archive preserves every extracted text block from the content document folder. "
        "The legacy `.ppt` is represented by the existing converted PPTX extraction because LibreOffice was not available on PATH for live conversion."
    )
    parts.append("")

    for source in sources:
        name = source_name(source)
        parts.extend([f"### {name}", ""])
        if source.get("type") == "docx":
            paragraphs = docx_blocks(source)
            parts.append(f"Extracted paragraphs: {len(paragraphs)}")
            parts.append("")
            for index, text in enumerate(paragraphs, start=1):
                parts.append(f"{index}. {text}")
            parts.append("")
        elif source.get("type") == "pptx":
            slides = ppt_slides(source)
            parts.append(f"Extracted slides: {len(slides)}")
            parts.append("")
            for slide in slides:
                title = f"Slide {slide.get('slide')}"
                parts.extend([f"#### {title}", ""])
                texts = [clean(item) for item in slide.get("texts", []) if clean(item)]
                notes = [clean(item) for item in slide.get("notes", []) if clean(item)]
                if texts:
                    parts.append(bullet(texts))
                else:
                    parts.append("- No extractable text on this slide.")
                if notes:
                    parts.append("")
                    parts.append("Notes:")
                    parts.append(bullet(notes))
                parts.append("")

    return "\n".join(parts).rstrip()


def build_markdown(sources: list[dict]) -> str:
    docx = sources[0]
    micro = sources[1]
    deck = sources[2]

    doc_blocks = docx_blocks(docx)
    micro_slides = ppt_slides(micro)
    deck_slides = ppt_slides(deck)

    advantages_doc = [
        "Lightweight: GFRC can be made thinner than traditional precast and weighs significantly less per square foot.",
        "Thin sections: GFRC can work at practical thin-wall casting limits where steel-reinforced precast cannot.",
        "Larger pieces with fewer seams: longer panels and slabs can reduce breaks and joints.",
        "Faster turnaround: high early strength allows many GFRC projects to be demoulded in around 24 hours.",
        "Built-in reinforcement: alkali-resistant glass fibers reinforce most GFRC backer coats.",
        "No vibration required: spray-up mist coats help release air bubbles and support smooth surfaces.",
        "Complex shapes: if the mould can be built, GFRC can form complex three-dimensional architectural elements.",
        "Durability: GFRC resists weather, corrosion, fire, abrasion, fungi and impact while needing low maintenance.",
        "Cost-effective installation: lower weight can reduce lifting, erection, yard and structure costs.",
        "Manufacturing flexibility: custom panel shapes, colors, finishes and built-in connections can be produced in one place.",
    ]

    performance_features = [
        "Resistant to weather, corrosion, fire, abrasion and fungi",
        "Light weight due to thin sections",
        "Non combustible",
        "Low thermal movement",
        "High impact resistance",
        "Suitable in earthquake prone areas",
        "High density with low porosity",
        "Ease of forming complex shapes",
        "Effective noise barrier",
        "Very low maintenance",
        "Can impart any surface texture and finish",
        "Manufacturing flexibility",
        "Easy to handle, transport and fast to install",
        "Environment friendly",
        "Proven long term performance",
    ]

    product_rows = [
        ["GRC Screens / Jali / Duct Covers", "Screens, jali, sunscreens, decorative facade screens and duct covering systems.", "Architectural shading, ventilation, decorative screening and facade utility covers."],
        ["GRC Columns, Capitals and Bases", "Columns, capitals, bases, arches and pillar enhancements.", "Decorative architectural elements for buildings, gardens, pavilions and parks."],
        ["GRC / GFRC Panel Cladding", "External wall cladding, interior wall cladding and facade panels.", "Appearance improvement, weather protection, thermal insulation, sound insulation and fire-spread resistance."],
        ["GRC / GFRC Cornices", "External cornices, internal cornices, cornices with arches and painted or pigmented finishes.", "Simple architectural finish for lower and higher building levels."],
        ["GRC / GFRC Brackets", "Designer brackets with fine finish and intricate design patterns.", "Decorative building enhancement using quality raw material and advanced methods."],
        ["GRC / GFRC Domes", "Varied dome patterns with sturdy structure and fine finishing.", "Architectural dome features made with advanced tools, sophisticated technology and quality control."],
        ["Additional GFRC Elements", "Panels, arches, balustrades, planters, keystones, bands, sound barriers, window frames, modular building components and landscape products.", "Extended product family identified across the source documents and presentation deck."],
    ]

    technical_rows = [
        ["Characteristic LOP (N/mm2)", "7", "7"],
        ["Characteristic MOR (N/mm2)", "10", "18"],
        ["Minimum bulk dry density (Kg/m3)", "1800", "1800"],
        ["Minimum bulk wet density (Kg/m3)", "2000", "2000"],
    ]

    application_items = [
        "Industrial and commercial buildings",
        "Residential complexes and individual villas",
        "Decorative facades and total prefab enclosures",
        "Sunscreens / grills",
        "Column cladding, capitals and bases",
        "Brackets, keystones, cornices and corbels",
        "Panels, arches, balustrades and planters",
        "Domes, bands / biscuits and sound barriers",
        "External and interior wall cladding",
        "Window frames, landscape products, garden planter boxes and modular building components",
        "Renovation and restoration projects",
        "Locations where lower weight, restricted rigging or faster installation matters",
    ]

    sections: list[str] = [
        "# GFRC Website Content",
        "",
        "Structured website content compiled from every extractable document in `src/assets/content document`.",
        "",
        "## Source Coverage",
        "",
        table(
            ["Folder file", "Extraction source used", "Coverage"],
            [
                ["GFRC_Content.docx", source_name(docx), f"{len(doc_blocks)} text blocks extracted"],
                ["Content for GFRC Micro website.pptx", source_name(micro), f"{len(micro_slides)} slides extracted"],
                ["GFRC PRESENTATION_Sumeru.ppt", "GFRC PRESENTATION_Sumeru.converted.pptx", f"{len(deck_slides)} converted slides extracted"],
            ],
        ),
        "",
        "## Brand And Site Positioning",
        "",
        "- Brand name: Sri Sri Sumeru Realty Pvt Ltd - GFRC",
        "- Company: Sri Sumeru Realty Private Limited",
        "- Unit lead: Neeta Sharma, GFRC Unit-Head",
        "- Core offer: lightweight Glass Fiber Reinforced Concrete architectural elements for facades, cladding, screens, columns, cornices, brackets, domes, planters, restoration and modular construction.",
        "- Website promise: durable, lightweight, low-maintenance, design-flexible GFRC elements that can be cast into complex shapes, colors, textures and finishes.",
        "",
        "## Recommended Navigation",
        "",
        bullet(["Home", "About GFRC", "Advantages", "Products", "Applications", "Technical Specifications", "Production Unit", "GFRC Team", "Contact"]),
        "",
        "## Home Page Content",
        "",
        "### Hero",
        "",
        "- Eyebrow: Glass Fiber Reinforced Concrete",
        "- H1: Lightweight Architectural Concrete for Durable Design.",
        "- Lead copy: GFRC is a lightweight, durable Glass Fiber Reinforced Concrete composite made from Portland cement, fine aggregate, water, acrylic co-polymer, alkali-resistant glass fiber reinforcement and additives. It can be cast into nearly unlimited shapes, colors and textures for modern facades, screens, columns, domes, cladding, restoration work and decorative architectural elements.",
        "- Primary CTA: Explore GFRC Products",
        "- Secondary CTA: View Technical Specifications",
        "",
        "### Home Highlights",
        "",
        bullet([
            "About 50% lighter than many traditional cast stone or precast options because GFRC can be made thinner.",
            "Thin-wall casting support through higher flexural and tensile strength from glass fiber reinforcement.",
            "Fast demoulding potential, with many GFRC projects demoulded in around 24 hours.",
            "Flexible surface texture, color and finish based on customer and design requirements.",
        ]),
        "",
        "### Marquee / Quick Feature Strip",
        "",
        "Weather resistant / Lightweight / Non combustible / Low maintenance / Complex shapes / Fast installation / Proven long-term performance",
        "",
        "## About GFRC Page Content",
        "",
        "### What Is GFRC?",
        "",
        "GFRC stands for Glass Fiber Reinforced Concrete. It is a cement-based composite comprised of Portland cement, fine aggregate, water, acrylic co-polymer, alkali-resistant glass fiber reinforcement and additives. In many international markets it is referred to as GRC, or Glassfibre Reinforced Concrete.",
        "",
        "The glass fibers reinforce the concrete much like steel reinforcement does in conventional concrete. This reinforcement gives GFRC higher flexural and tensile strength than normal concrete, enabling thin-wall casting applications and complex architectural forms.",
        "",
        "### Story And Use Case",
        "",
        "GFRC makes it possible to reproduce intricate architectural forms such as jharokhas, cornices, domes and columns. It was first created in Russia in the 1940s, became popular during the 1970s, and has contributed to modern construction for more than 30 years.",
        "",
        "### Composition",
        "",
        bullet(["Portland cement", "Fine aggregate", "Water", "Acrylic co-polymer", "Alkali-resistant glass fiber reinforcement", "Additives", "Concrete / polymer aggregate / glass fiber reinforcement"]),
        "",
        "### Fabrication Processes",
        "",
        bullet(["Spray-Up process", "Premix process"]),
        "",
        "## Why GFRC / Advantages Page Content",
        "",
        numbered(advantages_doc),
        "",
        "### Distinct Performance Features",
        "",
        bullet(performance_features),
        "",
        "## Products Page Content",
        "",
        table(["Product", "Source-backed content", "Website description"], product_rows),
        "",
        "## Applications Page Content",
        "",
        "GFRC is suited for industrial and commercial buildings, residential complexes, individual villas, decorative facades, total prefab enclosures and individual decorative architectural elements. It is especially useful where the core building structure cannot support heavier cement-based products, where upper-level installation weight is a constraint, where complex architectural pieces need to be installed as larger components, or where rigging and installation equipment is restricted.",
        "",
        bullet(application_items),
        "",
        "## Technical Specifications Page Content",
        "",
        table(["Property", "Grade 10 / 10P", "Grade 18 / 18P"], technical_rows),
        "",
        "Notes:",
        "",
        bullet(["Grades referenced in the source presentation: 10 or 10P, and 18 or 18P.", "Use table-style UI sections when publishing this data so values remain readable and comparable."]),
        "",
        "## Production Unit Page Content",
        "",
        "### Space And Utility Requirements",
        "",
        bullet(["Land area: 20m x 9m shed including air compressor, mixer, electricity and water line", "Curing and finishing area: 25m x 15m", "Additional land area: 10m x 10m"]),
        "",
        "### Machinery Mentioned",
        "",
        bullet(["Air compressor", "Mixer", "Electricity line", "Water line", "GFRC machineries", "Spray gun / power spray", "Compressor for spray gun", "Mixer with bucket", "Hoist motors", "Grinding machines", "Pallets", "Chain pulleys"]),
        "",
        "### Current Flow",
        "",
        bullet(["MD", "CEO", "Consultant", "Manager - GFRC", "Supervisor - Production", "Dispatch / Stores / Billing", "Supervisor - Erection", "Pattern Maker - 1", "Moulder - 1", "Workers - 5", "Fitters - 1", "Helper - 3"]),
        "",
        "### Future Flow",
        "",
        bullet(["MD", "CEO", "Consultant", "Manager - GFRC", "Supervisor - Production", "Dispatch / Stores / Billing", "Engineer - Erection", "Pattern Maker - 1", "Moulder - 1", "Workers - 10", "Site Engineers - 2", "Fitters - 3", "Helper - 10", "Sales - GFRC"]),
        "",
        "## Commercial Planning Notes",
        "",
        "The source deck includes Capex Current, Capex Future and OPEX Current slides. These figures should be treated as planning/internal content unless the business confirms they are safe for public website publication.",
        "",
        "### Public-Safe Website Wording",
        "",
        "GFRC production planning includes mould making, mixing, spraying or premix workflows, curing and finishing areas, production labour, erection labour, site engineering, material handling and future machinery planning.",
        "",
        "## GFRC Team Page Content",
        "",
        "### Neeta Sharma - GFRC Unit-Head",
        "",
        "Neeta Sharma introduces herself as head of the GFRC Department of Sri Sumeru Realty Pvt Ltd with over fourteen years of experience in the GFRC sector across projects of varied scale and complexity.",
        "",
        "Key experience points:",
        "",
        bullet([
            "Demonstrated commitment to excellence, innovation and client satisfaction in GFRC work.",
            "Spearheaded development and implementation of advanced GFRC manufacturing techniques, improving efficiency and product quality.",
            "Led cross-functional teams in design and execution of high-profile GFRC projects from architectural facades to intricate sculptures.",
            "Contributed to research and development initiatives pushing GFRC technology, including sustainable materials and cutting-edge fabrication methods.",
            "Established strategic partnerships with suppliers and industry stakeholders to streamline supply chain operations and timely delivery.",
            "Contributed to GFRC awareness through industry conferences, workshops and publications.",
            "Committed to using GFRC expertise to drive innovation and excellence within the organization.",
        ]),
        "",
        "## FAQ / Blog Topic Content",
        "",
        bullet([
            "What is GFRC?",
            "Why is GFRC lighter than traditional precast?",
            "Where can GFRC be used?",
            "What products can be made in GFRC?",
            "How are GFRC screens, jali and duct covers used?",
            "What is GFRC panel cladding?",
            "What are GFRC columns, capitals, bases, cornices, brackets and domes?",
            "What are the Grade 10 / 10P and Grade 18 / 18P technical specifications?",
            "How does GFRC support restoration, renovation and complex architectural design?",
        ]),
        "",
        "## Contact Page Content",
        "",
        "- Form title: Enquire About GFRC Products",
        "- Short copy: Share your project requirement for GFRC screens, cladding, columns, cornices, brackets, domes or custom architectural elements. The GFRC team will review the scope and respond with the next steps.",
        "- Suggested fields: Name, Company, Phone, Email, Project location, Product interest, Approximate quantity or area, Message / drawings available.",
        "",
        build_archive(sources),
        "",
    ]

    return "\n".join(sections).rstrip() + "\n"


def main() -> None:
    sources = json.loads(EXTRACTED_PATH.read_text(encoding="utf-8"))
    OUTPUT_PATH.write_text(build_markdown(sources), encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
