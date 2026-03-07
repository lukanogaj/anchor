# Anchor Scheduler

A clean task management application built with **React** and **Supabase**.

This project focuses on predictable data flow, clear architecture, and a calm productivity experience.

---

## Live Demo

👉 https://your-app-name.vercel.app

_(Replace this link after deployment)_

---

## Features

- Create, edit, complete and delete tasks
- Inline task editing
- Due date validation
- Automatic grouping:
  - Overdue
  - Today
  - Upcoming
  - No Date
- Real-time updates with Supabase
- Keyboard shortcuts
  - Enter → Save
  - Escape → Cancel
- Responsive layout
- Loading state on initial fetch

---

## Tech Stack

### Frontend

- React
- SCSS Modules

### Backend

- Supabase
- PostgreSQL
- Realtime subscriptions

---

## Architecture

The project follows a layered structure:

```
Layout
↓
Content (app shell)
↓
Container (data orchestration)
↓
Pages (presentation)
↓
Components
↓
Hooks
↓
Services
```

Example structure:

```
src
 ├ components
 ├ containers
 ├ pages
 ├ features/hooks
 ├ services
 └ lib
```

---

## Running Locally

Clone the repository

```bash
git clone https://github.com/yourusername/scheduler.git
```

Install dependencies

```bash
npm install
```

Create `.env` file

```env
REACT_APP_SUPABASE_URL=your_url
REACT_APP_SUPABASE_ANON_KEY=your_key
```

Start development server

```bash
npm start
```

---

## Future Improvements

- Drag and drop task ordering
- Project-based task grouping
- Mobile navigation menu
- Improved error handling

---

## Author

**Lukasz Nogaj**  
React Developer
