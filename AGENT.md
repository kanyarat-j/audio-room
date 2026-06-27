# Agent Instructions

## Project Goal

Build a demo landing page only for a Thailand-based company that sells, designs, and installs audio systems for organizations.

The target audience includes Thai organizations looking for audio installation services, such as:

- Offices
- Hotels
- Restaurants
- Schools
- Universities
- Factories
- Warehouses
- Retail stores
- Showrooms

The page should help non-technical visitors understand what the company does, why professional audio installation matters, and how to contact the company.

## Working Rules

Before implementation, read `DESIGN.md` and use it as the main design and content reference.

Keep the project easy to read and easy to maintain.

If implementation begins later:

- Prefer a simple React, Vite, and TypeScript scaffold
- Keep file names clear
- Keep components small
- Use predictable folder structure
- Avoid unnecessary abstractions
- Avoid adding features outside the landing page scope

Do not add back-office functionality unless the user explicitly requests it later.

## Content Rules

Thai copy must be polished, natural, and suitable for real customers.

Write for non-technical readers. Explain benefits in simple language.

Prefer wording like:

- `เสียงชัด ใช้งานง่าย เหมาะกับพื้นที่ของคุณ`
- `ออกแบบระบบตามงบประมาณและลักษณะหน้างาน`
- `ดูแลตั้งแต่สำรวจ ออกแบบ ติดตั้ง ไปจนถึงสอนใช้งาน`

Avoid wording that sounds too technical, too generic, or too sales-heavy.

Do not invent business facts.

Do not invent:

- Company name
- Contact details
- Prices
- Dates
- Equipment brands
- Client names
- Certifications
- Project details

Use clear placeholders when information is missing.

Examples:

- `[ใส่ชื่อบริษัท]`
- `[ใส่เบอร์โทร]`
- `[ใส่ LINE Official Account]`
- `[ใส่รูปผลงานจริง]`
- `[ใส่รายละเอียดผลงานจริง]`

## Design Rules

Follow the design direction in `DESIGN.md`.

The visual theme should be inspired by `https://designsystemsrepo.ai/`:

- Light-first
- Pastel
- Grid-based
- Card-based
- Playful-tech
- Friendly
- Modern B2B

Use:

- Dotted grid backgrounds
- Rounded cards
- Pill CTA buttons
- Soft shadows
- Pastel outlines
- Friendly icon cards
- Clean spacing
- Clear section hierarchy

Avoid:

- Dark corporate layouts
- Heavy sci-fi visuals
- Random neon effects
- Cluttered travel-agency style
- Overly technical dashboards
- Fake luxury
- Generic stock-heavy design
- Motion that makes text hard to read

## 3D Background Rules

The 3D background should support the audio-system story.

Use the concept of an interactive audio blueprint:

- Abstract room grid
- Speaker modules
- Microphone objects
- Amplifier or control unit block
- Sound wave paths
- Audio nodes
- Connection lines
- Floating service cards

The 3D scene should communicate that the company designs and installs a connected audio system across a real space.

Motion should be smooth, subtle, and readable.

Requirements:

- Text must remain easy to read
- Motion must not distract from the message
- Mobile must have a lighter version
- Reduced-motion users must have a static or minimal-motion fallback
- Performance should be prioritized over visual complexity

## Implementation Guardrails

Keep implementation focused on the landing page.

Do not add:

- Back-office routes
- Admin layouts
- Product CRUD
- Login
- Authentication
- Database
- Backend API
- CMS integration
- Payment
- Booking system
- Inventory management

If a future implementation uses React:

- Keep components small and clearly named
- Keep public page sections easy to locate
- Use semantic HTML where possible
- Keep Thai text in obvious locations
- Optimize for mobile readability
- Test desktop and mobile layouts
- Check that text never overlaps cards, buttons, or 3D visuals
- Use static fallback if 3D is too heavy for mobile

## Acceptance Criteria

The final landing page should:

- Stay landing-page only
- Use Thai as the primary language
- Match the light pastel grid theme
- Feel modern, friendly, and trustworthy
- Clearly explain audio installation services
- Include strong CTA areas
- Use the 3D background concept to support the story
- Remain readable on desktop and mobile
- Avoid all back-office-related files, routes, and UI
