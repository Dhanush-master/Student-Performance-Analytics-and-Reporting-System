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
npm run dev
```

Open http://localhost:5173 (or the address Vite prints).

Notes:
- This is frontend-only with dummy data in `src/data/students.js`.
- Replace service calls in `src/services/api.js` with real Axios calls to your backend.
