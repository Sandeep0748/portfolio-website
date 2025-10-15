# Portfolio Website

This is a personal portfolio website built with React and Tailwind CSS. The project includes scripts for local development, building a production bundle, and deploying to GitHub Pages.

## Contents

- `public/` — static assets (HTML, images, manifest)
- `src/` — React source code
- `server.js` — simple server script (if used)
- `package.json` — scripts and dependencies

## Prerequisites

- Node.js (14+ recommended)
- npm (comes with Node.js)

## Setup

1. Install dependencies:

```powershell
npm install
```

2. Start the development server:

```powershell
npm start
```

This runs the app in development mode. Open http://localhost:3000 to view it.

## Build & Serve Production

1. Build the app:

```powershell
npm run build
```

The `build` script will produce an optimized production bundle in the `build/` folder.

2. Serve the production build locally:

```powershell
npm run server
```

This uses the `serve` package to serve the static build.

## Deploy

This project is set up to deploy to GitHub Pages. To publish the `build/` directory to GitHub Pages:

```powershell
npm run deploy
```

The repository's `homepage` field in `package.json` is already set to the published URL. Adjust if you change the repo or username.

## Available Scripts

- `npm start` — start development server
- `npm run build` — build production bundle (also installs `serve` as part of the script)
- `npm run server` — serve the `build/` folder locally
- `npm test` — run tests
- `npm run deploy` — deploy `build/` to GitHub Pages

## Project Notes

- Source files live under `src/`. Edit components in `src/components/` and global styles in `src/index.css`.
- Static assets (images, favicon, resume) are in `public/`.
- Tailwind is used for styling (see `tailwind.config.js`).
- TypeScript is included in dependencies/devDependencies — project contains `.tsx` files.

## Troubleshooting

- If you see issues running `npm start`, delete `node_modules/` and `package-lock.json` and re-run `npm install`.
- If deployment fails, ensure `gh-pages` is installed and that you have set the repository remote and have push access.

## License & Contact

This repository contains personal portfolio code and assets. For questions or updates, open an issue or contact the repository owner.

---

_Generated: README for development and deploy instructions._
