# Organisation

This file is a way to organise the developpement process and regroup some useful links and tips that are used throughout the project. Some tools like Notion, Jira or Trello are much more efficient at doing this, but the goal here is not to be precise and have a strict organisation, but to have an overview of the project that is easily accesible while working on it.

## Tips & inspirations

These are some of the tools, websites and templates I have used or taken inspiration from to develop this website:

- [Color palettes](https://coolors.co/34a1bc-2f819a-145169-0b2c3e-ffeb34-ffc229-d9990d-ad8226)
- [Design by Maya Nelson](https://www.wix.com/website-template/view/html/2622?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button&esi=bab18c59-35d9-412d-986c-991e8416c5c8)
- [Design by Cristian Mihai](https://www.youtube.com/watch?v=Rew98iFupBM)

## Ideas:

These pages - if implemented - might need different layouts: 

- [x] Portfolio: Main pages, static
- [ ] Blog posts page (+ API)
- [ ] Movie library (+ API)
- [ ] Admin dashboard (+ DB)

## Structure and dependencies

Internationalized website in with QoL dependencies.

### Setup & Dependencies

These are the current dependencies and environment setup on this project:  
- [x] Next.js
- [x] Typescript
- [x] TailwindCss
- [x] Docker
- [x] Prettier, ESLint, Husky
- [x] Next-intl

These will be added if they are relevant to the showcased projects:  
- [ ] Zod (typescript & forms)
- [ ] Axios & Tanstack Query
- [ ] Redux
- [ ] Jest (tests unitaires)
- [ ] Firebase database

## Tasks

### Initialisation

- [x] Install dependencies and create basic project structure
- [x] Setup Docker for local environment (Vercel doesn't support Docker in production)
- [x] Import style template and setup first layout and page files

### Setup

- [x] Theme: Choose color scheme, fonts (inspired by template, but personnal color)
- [x] Setup ESLint, Prettier & Husky pre-commit script
- [x] Create "work in progress" template
- [x] Deploy on Vercel with Github

### Pages Layout

- [x] Layout responsive
- [x] Header: Navigation + burger menu, title, links
- [x] Footer links and contact
- [x] Internationalization FR/EN

### Homepage

- [x] Create card component
- [x] Design & fill in introduction content
- [x] Fix mobile navigation scroll down issue
- [x] Finish SEO setup & performance tests

### Page - Experiences
- [ ] Setup experience cards
- [ ] Slide-in animation from both side (domino layout: img|text?; extend theme)
- [ ] Display skills list (import SVGs)
- [ ] 'Download Resume' button

### Page - Projects (coming soon)
- [ ] Work on page design
- [ ] Setup grid layout
- [ ] Filter with keywords (multiple choices: buttons or selects)
  
### Page - First Project (coming soon)
- [ ] Decide projects routes (`/projects/my-project`, or `/my-project` with its own style file)
- [ ] Choose first project

### Miscellaneous
- [ ] Scroll to top (bottom-right, appear after scroll screen-height) or sticky header (or both)
- [ ] (Optional/Test) Switch Prettier tabSize to 2 instead of 4
- [ ] Verifier les fontSize sur mobile -> lisibilité (fontsize?)
- [ ] Update `README.md` file
- [ ] Optimize Vercel setup (Analytics, Insight)
- [ ] Add tailwind utility/component classes for transitions (card, button, links etc.):
  - [ ] `Card` component: add options for shadows, paddings, & max-w (extend Theme)
  - [ ] `Button` component: add sizes options for padding & colors (setup in `global.css`, component layer)
- [ ] Translation for accessibility & common items (links, buttons)
- [ ] (optional) Rework Svg as components (need change fill color?)