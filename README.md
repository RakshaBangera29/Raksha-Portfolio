# Raksha Bangera Portfolio

A modern personal portfolio for a QA Analyst focused on Salesforce QA, automation testing, API testing, AI workflow validation, and enterprise systems quality. The project is fully static, locally editable, and ready for GitHub Pages.

## What This Is

This portfolio is built as a client-side React application. There is no backend, no database, no server-side rendering, and no hosted platform lock-in. You own the full code locally, can edit it in VS Code, push it to your own GitHub repository, and deploy it with GitHub Pages.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Actions
- GitHub Pages

## Portfolio Sections

- Hero
- About
- Skills
- Experience
- Certifications
- Contact

## Dynamic Frontend Features

- Smooth page and section animations with Framer Motion
- Dark theme by default
- Light and dark mode toggle with local preference storage
- Animated metrics counters
- Skills and certifications with local logo assets
- Hover states on cards, buttons, and links
- Sticky active navbar
- Section reveal on scroll
- Scroll-to-top button
- Dynamic rendering from one local data file

## Content Management

All editable portfolio content lives in:

```txt
src/data/portfolio.ts
```

Update that file to change:

- Name, role, email, phone, and location
- Hero headline and call-to-action text
- About summary
- Metrics
- Experience entries
- Skills
- Certifications
- Logo paths for skills and certifications
- Contact links

The UI maps over this data dynamically, so most content updates do not require changing layout components.

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages Deployment

This project includes a GitHub Actions workflow:

```txt
.github/workflows/deploy.yml
```

When you push to the `main` branch, GitHub Actions will:

1. Install dependencies
2. Build the Vite app
3. Upload the `dist` folder as a Pages artifact
4. Deploy the site to GitHub Pages

## Repository Path Compatibility

The Vite config is set up for GitHub Pages repository URLs such as:

```txt
https://username.github.io/repository-name/
```

During GitHub Actions builds, `vite.config.ts` reads the repository name from `GITHUB_REPOSITORY` and sets the correct Vite `base` path automatically.

For local development, the base path remains `/`, so `npm run dev` works normally.

## First-Time GitHub Pages Setup

After pushing this project to your GitHub repository:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push to `main`.
6. Wait for the workflow to finish.
7. Open your Pages URL.

## Customizing Contact Links

Edit these values in `src/data/portfolio.ts`:

```ts
personal: {
  email: "rkshbangera17@gmail.com",
  phone: "+1 (250) 802-5031",
}
```

And update the `contactLinks` array with your real LinkedIn and GitHub URLs.

## Customizing the Visual Asset

The hero profile image is stored locally at:

```txt
public/raksha-bangera-profile.jpeg
```

Replace it with another image using the same filename, or update `personal.portrait` in `src/data/portfolio.ts`.

## Project Structure

```txt
.
├── .github/workflows/deploy.yml
├── public
│   ├── logos
│   │   ├── jira.svg
│   │   ├── postman.svg
│   │   ├── salesforce.svg
│   │   ├── selenium.svg
│   │   └── trailhead.svg
│   └── raksha-bangera-profile.jpeg
├── src
│   ├── components
│   │   ├── AnimatedCounter.tsx
│   │   ├── Navbar.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Section.tsx
│   │   └── ThemeToggle.tsx
│   ├── data
│   │   └── portfolio.ts
│   ├── hooks
│   │   ├── useActiveSection.ts
│   │   └── useCountUp.ts
│   ├── lib
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Deployment Notes

- The site is static-hosting friendly.
- No Vercel-specific configuration is included.
- No server runtime is required.
- No database is required.
- All animations and interactions run in the browser.
- GitHub Pages deployment is handled by GitHub Actions.

## Important Personalization Checklist

Before sharing the portfolio publicly, update:

- `src/data/portfolio.ts`: real email, phone, LinkedIn, GitHub, certifications, company names, dates, and metrics
- `public/raksha-bangera-profile.jpeg`: optional replacement image
- `index.html`: title and meta description if you want different wording

## License

This portfolio is yours to edit, publish, and adapt for your personal career use.
