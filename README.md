
# Anchor — Task Scheduler

Simple task management app built with React and Supabase.

## Live Demo

https://anchor-phi-sandy.vercel.app

## Tech Stack

* React
* JavaScript
* Supabase
* SCSS Modules

## Features

* add, edit, complete and delete tasks
* basic filtering (today, overdue, upcoming, no date)
* realtime updates using Supabase
* simple loading state

## What I did

* built main app structure using React components
* handled state and data using custom hook (useTodos)
* connected app to Supabase for storing tasks
* created simple filtering based on due date
* split logic and UI (container + page + components)

## Data Flow

UI → handler → useTodos → Supabase → state → UI

## Purpose

This project was built to practice building a simple real-world React app with data handling.

## Run locally

```bash id="n2k9dw"
npm install
npm run dev
```

## Author

Lukasz Nogaj
