# Organisation

This file is a way to organise the developpement process and regroup some useful links and tips that are used throughout the project. Some tools like Notion, Jira or Trello are much more efficient at doing this, but the goal here is not to be precise and have a strict organisation, but to have an overview of the project that is easily accesible while working on it.

## Tips & inspirations

- [Wix Design by Maya Nelson](https://www.wix.com/website-template/view/html/2622?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=bab18c59-35d9-412d-986c-991e8416c5c8)

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
- [x] Docker
- [] Zod (for typescript)
- [] i18n (Next.js) / next-intl (Vercel) / react-i18next / react-intl
- [] Tanstack/React Query
- [] Axios
- [] Redux
- [] Tests unitaires
- [] (Optional) Firebase database

## Tasks

### Initialisation

- [x] Install dependencies and create basic project structure
- [x] Setup Docker for local environment (Vercel doesn't support Docker in production)
- [x] Import style template and setup first layout and page files

### Setup

- [] Theme: Choose color scheme, fonts
- [] Structure: Create the first pages and layout : one general layout + one for main website layout (project pages will have their own layouts)
- [] Create "work in progress" template / redirection
- [] Setup and deploy on Vercel with Github

### Pages Layout

- [] Layout: responsive and working with all content quantity (low, enough, huge)
- [] Header: Responsive + burger menu, title, links.
- [] Footer Responsive, links and disclaimers.

### Homepage

- [] Background + responsive orientation
- [] Modal (generic)
- [] Modal content
