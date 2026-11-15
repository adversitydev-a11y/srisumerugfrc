from __future__ import annotations

import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

NS = {
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
}


def natural_key(path: str) -> list[object]:
    return [int(part) if part.isdigit() else part for part in re.split(r"(\d+)", path)]


def clean_text(value: str) -> str:
    return re.sub(r"[ \t]+", " ", value).strip()


def docx_paragraph_text(paragraph: ET.Element) -> str:
    parts: list[str] = []
    for node in paragraph.iter():
        tag = node.tag.rsplit("}", 1)[-1]
        if tag == "t" and node.text:
            parts.append(node.text)
        elif tag in {"tab"}:
            parts.append("\t")
        elif tag in {"br", "cr"}:
            parts.append("\n")
    return clean_text("".join(parts))


def extract_docx(path: Path) -> dict:
    with zipfile.ZipFile(path) as zf:
        document_xml = ET.fromstring(zf.read("word/document.xml"))

    blocks: list[dict] = []
    body = document_xml.find("w:body", NS)
    if body is None:
        return {"type": "docx", "path": str(path), "blocks": blocks}

    for child in body:
        tag = child.tag.rsplit("}", 1)[-1]
        if tag == "p":
            text = docx_paragraph_text(child)
            if text:
                blocks.append({"kind": "paragraph", "text": text})
        elif tag == "tbl":
            rows: list[list[str]] = []
            for row in child.findall(".//w:tr", NS):
                cells = []
                for cell in row.findall("w:tc", NS):
                    cell_parts = [docx_paragraph_text(p) for p in cell.findall(".//w:p", NS)]
                    cells.append(clean_text(" ".join(part for part in cell_parts if part)))
                if any(cells):
                    rows.append(cells)
            if rows:
                blocks.append({"kind": "table", "rows": rows})

    return {"type": "docx", "path": str(path), "blocks": blocks}


def pptx_slide_text(xml: bytes) -> list[str]:
    root = ET.fromstring(xml)
    texts: list[str] = []
    for shape in root.findall(".//p:sp", NS):
        chunks = [node.text or "" for node in shape.findall(".//a:t", NS)]
        text = clean_text(" ".join(chunks))
        if text:
            texts.append(text)
    for graphic_frame in root.findall(".//p:graphicFrame", NS):
        rows: list[str] = []
        for row in graphic_frame.findall(".//a:tr", NS):
            cells = []
            for cell in row.findall("a:tc", NS):
                chunks = [node.text or "" for node in cell.findall(".//a:t", NS)]
                cell_text = clean_text(" ".join(chunks))
                if cell_text:
                    cells.append(cell_text)
            if cells:
                rows.append(" | ".join(cells))
        if rows:
            texts.extend(rows)
    return texts


def extract_pptx(path: Path) -> dict:
    slides = []
    with zipfile.ZipFile(path) as zf:
        slide_names = sorted(
            [name for name in zf.namelist() if re.fullmatch(r"ppt/slides/slide\d+\.xml", name)],
            key=natural_key,
        )
        notes_names = {
            int(re.search(r"notesSlide(\d+)\.xml", name).group(1)): name
            for name in zf.namelist()
            if re.fullmatch(r"ppt/notesSlides/notesSlide\d+\.xml", name)
        }
        for index, slide_name in enumerate(slide_names, start=1):
            slide = {"slide": index, "texts": pptx_slide_text(zf.read(slide_name))}
            notes_name = notes_names.get(index)
            if notes_name:
                notes = pptx_slide_text(zf.read(notes_name))
                if notes:
                    slide["notes"] = notes
            slides.append(slide)
    return {"type": "pptx", "path": str(path), "slides": slides}


def main() -> None:
    if len(sys.argv) < 3:
        raise SystemExit("Usage: extract-office-content.py output.json input.docx input.pptx ...")
    out_path = Path(sys.argv[1])
    sources = [Path(arg) for arg in sys.argv[2:]]
    extracted = []
    for source in sources:
        if source.suffix.lower() == ".docx":
            extracted.append(extract_docx(source))
        elif source.suffix.lower() == ".pptx":
            extracted.append(extract_pptx(source))
        else:
            raise ValueError(f"Unsupported file type: {source}")
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(extracted, indent=2, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()
