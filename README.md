# Demo Speaker Landing Page

Demo landing page for a Thai audio installation service that designs, sells, and installs meeting room audio systems, conference microphones, AV integration, and hybrid meeting solutions.

The project is a frontend-only proof of concept built with React, TypeScript, Vite, Three.js, and React Three Fiber.

## Project Scope

This POC includes:

- One-page responsive landing page
- Thai B2B content for audio system installation services
- Interactive 3D audio blueprint visual
- Service, problem, process, portfolio placeholder, FAQ, and contact sections
- Static/mock contact form

This POC does not include:

- Backend API
- Database
- CMS
- Authentication
- Admin panel
- Real form submission

## Tech Stack

- React 18
- TypeScript
- Vite
- Three.js
- React Three Fiber
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  App.tsx          Main landing page content and sections
  AudioScene.tsx   3D audio blueprint scene
  main.tsx         React entry point
  styles.css       Global styles and responsive layout
```

Supporting documents:

- `DESIGN.md` - visual direction and landing page design reference
- `LANDING_PAGE_POC.md` - Thai POC document, scope, acceptance criteria, and open questions

## QA Checklist

Before sharing the demo, verify:

- Page loads without console errors
- Desktop and mobile layouts are readable
- Navigation anchors scroll to the correct sections
- CTA buttons are visible and clear
- FAQ interactions work
- Contact form fields are visible and usable
- 3D scene renders without a blank canvas
- Production build completes successfully

## Notes

Real company details, logo, contact channels, portfolio images, client names, and form submission behavior should be added before production use.
