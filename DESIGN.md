# Design

Visual system for the ohmyhf marketing site. Register: **brand**. Mood: “the Hub’s light desktop chrome, on a landing page — cool paper, black pills, one yellow icon.”

## Design System Foundations

### Colors

OKLCH-aligned cool neutrals matching the app light theme. Strategy: **restrained** — tinted neutrals + near-black CTA + indigo selection accent; brand yellow only on the icon.

| Role | Value | Usage |
| ---- | ----- | ----- |
| bg | `#ffffff` | page |
| panel | `#f9fafb` | header wash, secondary bands |
| panel-2 | `#f3f4f6` | chips, hovers |
| border | `#e5e7eb` | hairlines, cards |
| ink | `#101828` | headings, CTAs |
| ink-body | `#364153` | body (≥4.5:1) |
| ink-muted | `#4b5563` | secondary |
| ink-faint | `#6a7282` | metadata floor |
| cta | `#101828` / white | black-pill primary |
| focus | `#3b82f6` | focus rings |
| select | `#4f46e5` | selection / active underline |
| brand | `#FFD21E` | icon only |

Dark theme tokens invert the ramp for optional toggle; light is the designed default.

### Typography

- **UI / body:** Source Sans 3 Variable (weights 400 / 500 / 600)
- **Mono labels:** IBM Plex Mono 400 / 500
- **CJK fallbacks:** PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC
- Scale: 12 / 13 / 14 (base) / 15 / 16 / 20 / 24 / clamp display ≤ 3.5rem
- Headings: `text-wrap: balance`; prose: `pretty`; tracking floor ≥ -0.04em

### Spacing

4px grid. Section padding `py-20`–`py-28`. Content max-width `72rem`. Hero budget: brand + one headline + one sentence + CTA group + one dominant product shot.

### Radius

8px (`rounded-lg`) for frames and controls; pills `rounded-full` for CTAs and tags. Never above 12px on cards/frames.

### Shadows

In-page depth from hairline borders only. Soft shadow (≤8px blur) reserved for floating product frames / overlays — never paired with a decorative 1px border+wide shadow combo.

## Component Library

### Buttons

- **Primary:** near-black pill, white label, inverts on hover
- **Secondary:** white → gray-100 gradient feel via border + panel fill
- One primary CTA per surface

### Product frames

Screenshot in a light window chrome (traffic lights optional, thin border, 8px radius). No glassmorphism. Real PNGs from `public/`.

### Navigation

Fixed light header, hairline bottom border, brand icon (white-backed favicon) + wordmark, text links, GitHub, locale switch.

## Layout

Single-column marketing flow. Hero centered copy over full-width product shot. Feature rows alternate text / screenshot. Download matrix three columns. FAQ accordion. No card grids of icon+title+blurb.

## Motion

150–250ms ease-out. Hero fade-rise on load; feature reveal on scroll when `prefers-reduced-motion: no-preference`. Reduced motion → instant/crossfade.

## Do / Don't

**Do**

- Lead with real light-mode screenshots
- Keep unofficial disclaimer in hero and footer
- Use black-pill download CTAs
- Fill favicon transparency with white for browser tabs

**Don't**

- Imply official HF affiliation
- Use purple-on-white SaaS gradients or cream/sand body backgrounds
- Number every section (01 / 02 / 03)
- Put stats strips or secondary promos in the first viewport
