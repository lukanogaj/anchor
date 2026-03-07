# Anchor Scheduler

A clean task management application built with **React** and **Supabase**.

This project focuses on predictable data flow, clear architecture, and a calm productivity experience.

---

## Live Demo

👉 https://your-app-name.vercel.app

_(Replace this with your deployed link later)_

---

## Features

- Create, edit, complete and delete tasks
- Inline task editing
- Due date validation
- Automatic task grouping:
  - Overdue
  - Today
  - Upcoming
  - No Date
- Real-time updates with Supabase
- Keyboard interactions
  - Enter → Save edit
  - Escape → Close menu or edit mode
- Loading state for initial data fetch
- Responsive layout

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

The project follows a layered structure to separate layout, data orchestration, and presentation.

```
Layout
↓
Content (App Shell)
↓
Container (Data orchestration)
↓
Pages (Presentation)
↓
Components
↓
Hooks
↓
Services
```

Example folder structure:

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

## Key Technical Decisions

### Layered architecture

The application separates layout, containers, pages, and components to maintain clear responsibilities between UI rendering and data logic.

### Custom hooks for domain logic

Hooks such as `useTodos`, `useTodayTodos`, `useOverdueTodos`, `useUpcomingTodos`, and `useUndatedTodos` encapsulate filtering and data logic outside the UI components.

### Supabase as backend

Supabase provides a PostgreSQL database and realtime subscriptions, allowing the app to update automatically when data changes without manual refresh.

### Derived task status

Task sections (Overdue, Today, Upcoming) are derived from the `due_on` date instead of storing a status field.  
This avoids inconsistent state and keeps the database model simple.

### Initial loading state

The loading state is applied only during the initial fetch to prevent UI flicker when realtime updates occur.

### SCSS Modules

SCSS Modules provide locally scoped styles, preventing global CSS conflicts and making the UI easier to maintain.

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

```
REACT_APP_SUPABASE_URL=your_url
REACT_APP_SUPABASE_ANON_KEY=your_key
```

Start the development server

```bash
npm start
```

---

## Future Improvements

- Drag and drop task ordering
- Project-based task grouping
- Mobile navigation entry point
- Improved error handling

---

## Author

**Lukasz Nogaj**  
React Developer
