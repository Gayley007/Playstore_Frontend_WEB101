## Assignment 2: Frontend Foundation & Application Structure

## Introduction
This project is the foundation for a multi-page web application built with React, focusing on routing, reusable UI components, and a scalable structure. The application simulates a Google Play Store-like experience, including Games, Apps, and Kids sections, with authentication pages (Login/Signup).
---
## Table of Contents
- [Project Overview](#project-overview)
- [Development Environment Setup](#development-environment-setup)
- [Application Structure & Routing](#application-structure--routing)
- [Reusable Components](#reusable-components)
- [Setup Instructions](#setup-instructions)
- [Component Documentation](#component-documentation)
- [Code Comments & Strategy](#code-comments--strategy)
- [Assignment Roadmap](#assignment-roadmap)
---

## Project Overview

### 1. Project Planning
- **Application:** Google Play Store clone (Games, Apps, Kids, Login, Signup)
- **Core Functionalities:**
  - Multi-page navigation (Games, Apps, Kids)
  - Authentication (Login/Signup)
  - Reusable card, carousel, and footer components
  - Responsive design

## Development Environment Setup
- **Frontend Framework:** React (Vite)
- **Package Manager:** npm
- **Version Control:** GitHub repository for collaboration
- **Folder Structure:**
  ```
  src/
    apps_page/
    kids_page/
    components/
    ...
  ```
- **Start Dev Server:**
  ```bash
  npm install
  npm run dev
  ```

## Application Structure & Routing
- **Routing:** React Router DOM
- **File-based Routing:**
  ```
  /games      -> Games page (default landing)
  /apps       -> Apps page
  /kids       -> Kids page
  /login      -> Login page
  /signup     -> Signup page
  ```
- **Route Guards:**
  - Placeholder for protected routes (to be implemented in Assignment 4)
- **Reusable Components via Slugs:**
  - Example: `<GameCard data={...} />` used for different game/app lists

## Reusable Components

| Component    | Purpose                          | Props/Inputs                        | Usage Example              |
| ------------ | -------------------------------- | ----------------------------------- | -------------------------- |
| `Footer`     | Common footer for all pages      | None                                | `<Footer />`               |
| `GameCard`   | Displays game/app info in a card | `data` (object: title, img, rating) | `<GameCard data={...} />`  |
| `Carousel`   | Horizontal scroll for cards      | `items` (array), `visible` (int)    | `<Carousel items={...} />` |
| `SearchBar`  | Expanding search input in header | `onSearch`, `placeholder`           | `<SearchBar ... />`        |
| `LoginForm`  | User login form                  | `onSubmit`                          | `<LoginForm ... />`        |
| `SignupForm` | User signup form                 | `onSubmit`                          | `<SignupForm ... />`       |

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gayley007/Playstore_Frontend_WEB101.git
   cd Playstore_Frontend_WEB101
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173)

## Component Documentation
- **Footer:**  
  Renders consistent footer links and language selector. Used at the bottom of every page.

- **GameCard:**  
  Displays an image, title, tags, and rating for a game/app. Used in carousels and lists.

- **Carousel:**  
  Horizontally scrolls through a list of cards. Responsive to screen size.

- **SearchBar:**  
  Expands on icon click, allows searching for apps/games. Used in header of each main page.

- **LoginForm / SignupForm:**  
  Handles user authentication input and validation. Shows error messages for invalid input.

## Code Comments & Strategy
- All complex logic (e.g., carousel navigation, form validation) is commented inline.
- Each component is documented with its purpose and usage.
- Routing and structure are explained in this README.
- Branching strategy:
  - Use feature branches for new features
  - Pull requests for merging
  - Descriptive commit messages

## Functionality
This application will allow users to:

- Browse games, apps, and kids content in a Google Play Store-like interface
- Search for apps and games using an expanding search bar
- View top charts and recommendations
- Authenticate (login/signup) with form validation
- Experience a responsive, reusable component-based UI
