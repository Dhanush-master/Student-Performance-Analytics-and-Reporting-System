# Student Performance Analytics & Reporting System (Frontend)

This is a React + Vite frontend scaffold for the Student Performance Analytics & Reporting System.

Features implemented (frontend only):
- Login / Register with role selection (stored in localStorage)
- Teacher and Student dashboards
- Student management table with search & filter
- Add student form (UI only)
- Reports with charts (Chart.js)
- Responsive layout with sidebar and top navbar

Tech: React (Vite), Tailwind CSS, React Router, Chart.js, Axios (placeholder), Context API

Run locally:

1. Install dependencies
```bash
npm install
```

2. Start dev server
```bash
# Student Performance Analytics & Reporting System

Frontend application (React + Vite) for managing student performance analytics and reports.

Overview
- Simple frontend scaffold with role-based views for teachers and students.
- Demo data lives in `src/data/*.js`; API calls are placeholders in `src/services/api.js`.

Prerequisites
- Node 16+ and npm (or yarn)

Quick start
1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

3. Build for production
```bash
npm run build
npm run preview
```

Project structure (important files)
- `src/` — React source files
- `src/components/` — UI components
- `src/pages/` — Route pages for teacher and student flows
- `src/services/api.js` — replace with real backend endpoints
- `src/data/` — sample/dummy data used by the UI

Notes
- This repository contains frontend-only code and uses local/dummy data by default.
- To connect a backend: update `src/services/api.js` to point to your API, and add any required environment variables.

Contributing
- Open issues or PRs for fixes, features, or documentation updates.

License
- (Add your license here) — or request me to add an `MIT` license file.

If you want, I can also add a GitHub Actions workflow to run build and lint on PRs.
