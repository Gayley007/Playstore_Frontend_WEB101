# Google Play Store Frontend

This project is a React-based frontend that mimics the look and feel of the Google Play Store. It provides users with a seamless experience to browse games, apps, and kids content, featuring authentication, protected routes, and dynamic data fetching.

## Project Overview

- **Purpose:**  
  To demonstrate a modern, component-driven frontend architecture using React, with features inspired by the Google Play Store.

- **Key Features:**
  - Browse and search for games, apps, and kids content.
  - User authentication (login/signup) with protected routes.
  - Responsive UI with navigation tabs and expandable search bar.
  - Game detail pages with ratings, reviews, and install/share actions.
  - Pagination and filtering for app/game lists.
  - Integration with a backend API for dynamic content.

- **Tech Stack:**
  - React 19
  - React Router DOM v7
  - Lucide React Icons
  - Context API for authentication state
  - CSS modules for styling

- **How it works:**
  - The app uses React Router for navigation between Games, Apps, Kids, Login, Signup, and Game Detail pages.
  - Authentication state is managed globally using React Context and persisted in localStorage.
  - Protected routes ensure only logged-in users can access certain pages (e.g., game details).
  - Data for games and apps is fetched from a backend API, with support for search and pagination.
  - The UI is designed to be clean, modular, and similar to the official Google Play Store.

- **Running the Project:**
  - Frontend: [http://localhost:5173](http://localhost:5173)
  - Backend: [http://localhost:4000](http://localhost:4000)

## Project Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```

## Project Structure & Architecture

- **src/**
  - `App.jsx`: Main app entry, routing, and authentication context.
  - `game.jsx`: Games section page.
  - `apps_page/apps.jsx`: Apps section page.
  - `kids_page/KidsSection.jsx`: Kids section page.
  - `components/`: Shared components (login, signup, footer, game detail, etc.).
- **Routing:** Uses `react-router-dom` for client-side navigation.
- **Authentication:** Context-based, with protected routes for sensitive pages.
- **API Integration:** Fetches game data from a backend API (see `apps.jsx`).
- **Styling:** CSS modules per component/page.

## Functionality

- **Navigation:** Top bar with tabs for Games, Apps, and Kids.
- **Search:** Expandable search bar in the header.
- **Authentication:** Login and signup forms; user state is persisted in localStorage.
- **Protected Routes:** Certain pages (e.g., game detail) require login.
- **Games/Apps/Kids Pages:** Each section displays featured cards and lists, with pagination and filtering.
- **Game Detail Page:** Shows detailed info, ratings, reviews, and install/share actions.
- **Footer:** Present on all pages.

## Main Concepts Applied

- **React Functional Components & Hooks:** For state, effects, and refs.
- **Context API:** For global authentication state.
- **Protected Routing:** Restricts access to certain routes based on auth state.
- **API Data Fetching:** Uses `fetch` and React state for dynamic content.
- **Component-based Architecture:** Reusable UI components for maintainability.
- **Responsive UI:** CSS for layout and styling, mimicking Google Play Store.

## Documentation

- **Authentication:** Managed via React Context, with login/logout and protected routes.
- **Search:** Search bar auto-focuses and collapses on blur or Escape.
- **Pagination:** Apps section supports paginated API results.
- **Install Action:** Game detail page simulates APK download.
- **Reviews:** Static example reviews on game detail page.

---

