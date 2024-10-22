## Useful links & inspirations

- [Format README files](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#paragraphs)

- [Wix Design by Maya Nelson](https://www.wix.com/website-template/view/html/2622?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=bab18c59-35d9-412d-986c-991e8416c5c8)

## Tips:

Check useful commands and setup new aliases:

- Check git log in compact clear lines (alias: `git logg`):
  `git log --graph --decorate --oneline`

## Ideas:

These pages might need different layouts:

- Blog posts page (with API)
- Netflix clone (+ API)
- Admin dashboard

## Structure and dependencies

Internationalized website in with QoL dependencies.

### Setup

- [x] Next.js
- [x] Typescript
- [x] TailwindCss
- [] Zod (for typescript)
- [] i18n (Next.js) / next-intl (Vercel) / react-i18next / react-intl
- [] Tanstack/React Query
- [] Axios
- [] (Optional) Redux
- [] (Optional) Firebase database

## Tasks

### Initialisation

- [x] Install dependencies and create basic project structure
- [x] Import style template and setup first layout and page files

### Setup

- [] Theme: Choose color scheme, fonts
- [] Structure: Create the first pages and layout : one general layout + one for main website layout (project pages will have specific layouts)
- [] Test deploying on Vercel

### Pages Layout

- [] Layout: responsive and working with all content quantity (low, enough, huge)
- [] Header: Responsive + burger menu, title, links.
- [] Footer Responsive, links and disclaimers.

### Homepage

- [] Background + responsive orientation
- [] Modal (generic)
- [] Modal content
