# Axisbuilt Template Theme And Effects Guide

Use this document only as a visual design-system reference for the Axisbuilt React/Vite website template.

This file describes the template theme, colors, fonts, buttons, cards, image behavior, hover effects, icons, transitions, and animations. It must not include website content, page planning, section placement, navigation structure, or content-integration instructions.

## Template Visual Identity

The template should feel:

- Premium
- Modern
- Architectural
- Editorial
- Clean
- Spacious
- Visual-first
- Confident
- Minimal but rich
- Motion-polished

Do not make the design feel generic, flat, Bootstrap-like, corporate-basic, or disconnected from the current architecture/interior/construction visual language.

## Color Theme

Use the existing CSS variables only.

```css
--primary-color: #0d0d0d;
--secondary-color: #6a6a6a;
--white-color: #fff;
--black-color: #000;
--border-color: #D9D9D9;
--accent-color: #caa05c;
--red-color: #FF0000;
--gray-color: #FAF8F4;
--gray-color2: #EAEAEA;
--stroke-color: #CFCFCF;
```

## Color Usage

- Main headings use `--primary-color`.
- Body text uses `--secondary-color`.
- Accent details, active states, CTA icons, markers, and highlights use `--accent-color`.
- Clean areas use `--white-color`.
- Soft premium backgrounds use `--gray-color`.
- Dividers and subtle borders use `--border-color`, `--gray-color2`, or `--stroke-color`.
- Dark image-overlay areas use `--primary-color` or `--black-color` with transparent overlays.

Avoid random new colors. Keep the current balance of black, white, warm gold, muted gray, and soft cream.

## Fonts

Use the current font system.

```css
--primary-font: "Titillium Web", sans-serif;
--secondary-font: "Space Grotesk", sans-serif;
```

## Typography Style

- Headings use `Titillium Web`.
- Body text uses `Space Grotesk`.
- Headings are bold, compact, and architectural.
- Body copy is clean, readable, and slightly editorial.
- Section labels use uppercase styling, accent color, dot markers, and wide letter spacing.
- Avoid negative letter spacing.
- Avoid oversized text inside small cards or compact UI blocks.

## Heading Scale

- `h1`: 56px
- `h2`: 42px
- `h3`: 30px
- `h4`: 24px
- `h5`: 18px
- `h6`: 16px

Use existing font-size classes where possible:

- `.cs_fs_10`
- `.cs_fs_13`
- `.cs_fs_14`
- `.cs_fs_16`
- `.cs_fs_18`
- `.cs_fs_20`
- `.cs_fs_24`
- `.cs_fs_30`
- `.cs_fs_53`
- `.cs_fs_60`
- `.cs_fs_64`
- `.cs_fs_70`
- `.cs_fs_80`
- `.cs_fs_96`
- `.cs_fs_200`

Use existing font-weight classes:

- `.cs_light`
- `.cs_normal`
- `.cs_medium`
- `.cs_semibold`
- `.cs_bold`
- `.cs_extrabold`
- `.cs_black`

## Spacing Style

Use the existing spacing utilities.

- `.cs_height_*`
- `.cs_height_lg_*`
- `.cs_mb_*`
- `.cs_mb_lg_*`

Spacing should feel generous, premium, and calm. Do not compress sections or crowd cards.

## Layout Feel

The template uses:

- Large white space
- Editorial split layouts
- Image-led compositions
- Soft gray/cream background blocks
- Staggered visual rhythm
- Strong typography
- Premium CTA treatments
- Clean borders and dividers
- Balanced desktop and mobile stacking

New UI should look like it belongs to this same template, not like a separate design system.

## Section Heading Style

Use `.cs_section_heading_style_1`.

Typical elements:

- `.cs_section_subtitle`
- `.cs_section_title`

The subtitle should keep the accent dot, uppercase style, and wide tracking. The title should remain bold, large, and primary-font based.

## Buttons

Use the existing button system.

## Button Style 1

Class:

```css
.cs_btn_style_1
```

Visual behavior:

- Pill-like CTA
- Text plus circular arrow icon
- Accent-filled icon area
- Smooth hover transition
- Hover changes contrast between accent, black, and white
- Best for normal CTA buttons

## Button Style 2

Class:

```css
.cs_btn_style_2
```

Visual behavior:

- Large circular CTA
- Around 180px by 180px on desktop
- Radial mouse-follow gradient
- Subtle hover scale
- Premium hero/feature CTA style

## Text Button Style 1

Class:

```css
.cs_text_btn_style_1
```

Visual behavior:

- Inline text link
- Underline or border-bottom feel
- Arrow icon support
- Accent hover state
- Best for card links and secondary actions

## Text Button Style 2

Class:

```css
.cs_text_btn_style_2
```

Visual behavior:

- Premium animated text effect
- Perspective or split-text movement
- Best for refined editorial links

## Player Button

Class:

```css
.cs_player_btn_style_1
```

Visual behavior:

- Circular play button
- Pulsing ring animation
- Strong visual focus
- Used for video triggers

## Cards

Use existing card styles. Do not create unrelated card systems.

## Card Style 1

Class:

```css
.cs_card_style_1
```

Effects:

- Image fills the card
- Bottom info block overlays or attaches to image
- Arrow button sits inside rounded/circular control
- Hover uses accent color
- Text and icon contrast changes on hover
- Image remains cropped inside the card slot

## Card Style 2

Class:

```css
.cs_card_style_2
```

Effects:

- Large image-backed card
- Dark overlay
- Big premium visual block
- Subtitle pill changes color on hover

## Card Style 3

Class:

```css
.cs_card_style_3
```

Effects:

- Image overlay gradient
- Centered content
- Strong CTA or brand moment

## Card Style 4

Class:

```css
.cs_card_style_4
```

Effects:

- Image background
- Overlay reveal
- Content translates into view on hover

## Card Style 5

Class:

```css
.cs_card_style_5
```

Effects:

- Thumbnail scale/rotate hover
- Structured card information
- Clean border and feature rhythm

## Card Style 6

Class:

```css
.cs_card_style_6
```

Effects:

- Expandable horizontal card behavior
- Active/hover state expands the selected card
- Useful for premium category panels

## Card Style 7

Class:

```css
.cs_card_style_7
```

Effects:

- 3D image flip/reveal
- `rotateY` style motion
- Strong visual interaction

## Card Style 8

Class:

```css
.cs_card_style_8
```

Effects:

- Image-backed layout
- Logo/text overlay treatment
- Premium brand-card feel

## Card Style 9

Class:

```css
.cs_card_style_9
```

Effects:

- Blog/media thumbnail behavior
- Image zoom or translate on hover
- Metadata and title hierarchy

## Card Style 10

Class:

```css
.cs_card_style_10
```

Effects:

- Large card feel
- Description opacity changes on hover
- Refined reveal interaction

## Card Style 11

Class:

```css
.cs_card_style_11
```

Effects:

- Bordered card frame
- Image zoom on hover
- Clean post/content presentation

## Card Style 12

Class:

```css
.cs_card_style_12
```

Effects:

- Circular thumbnail treatment
- Accent top line
- Timeline/process visual rhythm

## Card Style 13

Class:

```css
.cs_card_style_13
```

Effects:

- Paired image and text composition
- Alternating layout support
- Editorial row style

## Card Style 14

Class:

```css
.cs_card_style_14
```

Effects:

- Compact icon-card pattern
- Good for summary features
- Clean hover state

## Icon Box Styles

Use existing iconbox classes.

## Iconbox Style 1

Class:

```css
.cs_iconbox_style_1
```

Effects:

- Centered icon card
- Icon around 70px
- Hover changes background to primary color
- Text becomes white on hover
- Decorative lines remain part of the design

## Iconbox Style 2

Class:

```css
.cs_iconbox_style_2
```

Effects:

- Image-overlay service panel
- Dark gradient overlay
- Content reveal on hover

## Iconbox Style 3

Class:

```css
.cs_iconbox_style_3
```

Effects:

- Simple feature card
- Icon scales on hover
- Text-button style link

## Iconbox Style 4

Class:

```css
.cs_iconbox_style_4
```

Effects:

- Number/index design
- Accent hover background
- White text on hover
- Large stroked index typography

## Iconbox Style 5

Class:

```css
.cs_iconbox_style_5
```

Effects:

- Horizontal icon/text row
- Accent hover background
- White text on hover

## Iconbox Style 6

Class:

```css
.cs_iconbox_style_6
```

Effects:

- Center-aligned icon card
- Accent hover treatment

## Iconbox Style 7

Class:

```css
.cs_iconbox_style_7
```

Effects:

- Icon plus information row
- Clean contact/detail style

## Icons

Use existing Font Awesome icons where the template already uses them.

Common icon behavior:

- Arrow icons rotate or shift slightly on hover.
- Circular icon buttons use accent borders or fills.
- Icon color changes with parent hover state.
- Icons should stay centered inside circular or square controls.
- Do not use mismatched icon styles in the same section.

## Image Treatment

Images must stay inside their original slot size.

Recommended image behavior:

```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Rules:

- Do not resize the card to match the image.
- Crop the image inside the existing slot.
- Preserve border radius.
- Preserve overlay behavior.
- Preserve image zoom, translate, or rotate hover effects.
- Use `object-position` only when the crop needs adjustment.

## Image Hover Effects

Existing image effects include:

- Scale up on hover
- Slight translate on hover
- Rotate/scale combination
- 3D rotateY flip
- Overlay reveal
- Gradient overlay darkening
- Content reveal over image

Keep image motion smooth and quiet.

## Hover Effects

The template hover language uses:

- Smooth transition around 0.3s
- Accent color shifts
- Background-color transitions
- Icon movement
- Image zoom
- Overlay reveal
- Text color reversal
- Border color change
- Subtle scale movement

Avoid flashy, bouncy, heavy, or unrelated hover effects.

## Entry Animations

The template supports polished entry motion:

- Fade-in
- Upward reveal
- Split text animation
- Word animation
- Staggered card reveal
- Smooth slider entrance
- Header sticky transition
- Preloader progress animation

Entry animations should feel premium and restrained. Do not add heavy or distracting motion.

## Slider And Marquee Effects

Existing slider behavior includes:

- Swiper-style movement
- Navigation arrows
- Pagination
- Marquee-style horizontal text movement
- Pause-on-hover where supported
- Smooth timing

Keep slider controls and motion consistent with the current template.

## Accordion Effects

Existing accordion behavior includes:

- Smooth open/close transitions
- Plus/minus toggles
- Border-bottom or boxed styles
- Active state color changes
- Counter/index support in selected styles

Do not replace accordion interactions with plain static lists.

## Tabs Effects

Existing tab behavior includes:

- Active tab styling
- Smooth content switching
- Hover states
- Clean typography
- Border/accent treatment

Tabs should remain visually aligned with the template.

## Header Effects

Existing header behavior includes:

- Fixed position
- Smooth sticky transition
- Height reduction on scroll
- White sticky background
- Shadow on active sticky state
- Dropdown hover reveal
- Mobile menu toggle
- Search overlay animation

Do not replace the header interaction style.

## Footer Style

Footer visual behavior includes:

- Large logo treatment
- Border-separated columns
- Newsletter form styling
- Accent button hover
- Responsive column stacking
- Strong visual weight

Do not flatten the footer into plain text.

## Preloader Effects

Existing preloader behavior includes:

- Full fixed dark overlay
- Gradient background
- Accent progress bar
- Large faded loading text
- Accent percentage text
- Smooth disappearance after load

## Scroll To Top

Existing scroll-top behavior includes:

- Fixed circular button
- Accent background
- White arrow icon
- Smooth show/hide transition
- Bottom-right placement

Do not remove or redesign unless specifically requested.

## Motion Rules

- Use existing transitions first.
- Keep motion around 0.3s where possible.
- Use subtle easing.
- Do not add heavy JavaScript animations for simple hover effects.
- Do not remove existing animations.
- Do not add motion that harms performance.
- Keep effects consistent across similar components.

## Design Safety Rules

- Do not introduce a new color palette.
- Do not introduce a new font family.
- Do not create unrelated button styles.
- Do not create unrelated card styles.
- Do not break image slot ratios.
- Do not remove existing hover effects.
- Do not remove existing entry animations.
- Do not flatten premium visual elements.
- Do not make sections look like a different website.
- Do not create generic corporate UI.

## Template Styling Prompt

```text
Use the existing Axisbuilt React/Vite template design system only.

Match the current premium modern architecture/interior visual theme:
black and white base, warm gold accent, soft cream backgrounds, strong bold headings, clean body typography, spacious layout rhythm, image-led cards, circular CTA icons, refined hover states, smooth entry animations, and restrained premium motion.

Use existing classes for fonts, spacing, headings, buttons, cards, icon boxes, grids, sliders, accordions, tabs, header, footer, preloader, image effects, hover effects, and scroll-to-top behavior.

Do not add website content planning, page structure planning, section placement instructions, navigation planning, or content mapping in this file.

Do not redesign the template, change the palette, change fonts, replace button/card systems, remove effects, alter image slot ratios, or create a separate design language.
```
