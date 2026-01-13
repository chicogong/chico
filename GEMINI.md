# Chico Gong's Personal Website

## Project Overview

This is a modern, minimalist personal website for Chico Gong, a Realtime AI Engineer. It is a single-page application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The project features a **data-driven architecture** where content is centralized in `lib/data.ts`, making updates easy without touching component logic. It includes advanced features like real-time GitHub data fetching (ISR), comprehensive SEO optimization, and performance-focused animations.

### Key Technologies
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Data Fetching:** GitHub API with Incremental Static Regeneration (ISR)
- **Deployment:** Vercel

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Development Server:**
    ```bash
    npm run dev
    ```
    Runs the app at [http://localhost:3000](http://localhost:3000).

*   **Production Build:**
    ```bash
    npm run build
    ```
    Builds the application for production usage.

*   **Start Production Server:**
    ```bash
    npm start
    ```
    Runs the built application.

*   **Lint Code:**
    ```bash
    npm run lint
    ```
    Runs ESLint to check for code quality issues.

### Environment Setup
To avoid GitHub API rate limits, you can configure a personal access token.
1.  Copy `.env.example` to `.env.local`.
2.  Add your GitHub token: `GITHUB_TOKEN=your_token_here`.

## Project Structure

### Core Directories
-   **`app/`**: Next.js App Router directory.
    -   **`layout.tsx`**: Root layout including SEO metadata, fonts, and global styles.
    -   **`page.tsx`**: Main landing page component.
    -   **`globals.css`**: Global styles and custom Tailwind animations (fade-in, slide-up).
    -   **`api/github/route.ts`**: API route for fetching GitHub stats with caching.
    -   **`components/`**: Reusable UI components (Analytics, ErrorBoundary, GitHub components).
-   **`lib/`**:
    -   **`data.ts`**: **Single Source of Truth** for website content (profile, projects, skills, articles).
-   **`public/`**: Static assets (favicons, images).

### Key Files
-   **`lib/data.ts`**: Edit this file to update personal information, projects, or links.
-   **`app/layout.tsx`**: Configuration for SEO metadata (Open Graph, JSON-LD) and fonts.
-   **`next.config.ts`**: Next.js configuration including security headers.
-   **`tailwind.config.ts`**: Tailwind configuration, themes, and content paths.

## Development Conventions

### Content Management
-   **Do not hardcode content** in components. Always use `lib/data.ts` to manage text and data.
-   **Profile updates:** Modify the `profile` object in `lib/data.ts`.
-   **Project/Experience updates:** Modify the `projects`, `experience`, or `skills` arrays in `lib/data.ts`.

### Styling & Animations
-   Use **Tailwind CSS** utility classes for styling.
-   Custom animations (`fade-in`, `slide-up`, `scale-on-hover`) are defined in `app/globals.css`.
-   Gradient text effects use the `.gradient-text` utility class.

### SEO & Performance
-   **Metadata:** Managed in `app/layout.tsx`. Ensure Title, Description, and Keywords are updated.
-   **Sitemap/Robots:** Automatically generated via `app/sitemap.ts` and `app/robots.ts`.
-   **Images:** Use Next.js `<Image>` component for optimization.
-   **GitHub Data:** Fetched server-side with ISR (1-hour cache) to ensure performance and freshness.

### Architecture
-   **Data-Driven:** separation of concerns between content (`lib/data.ts`) and presentation (`app/components`).
-   **Server-First:** Use Server Components by default. Use Client Components (`"use client"`) only when interactivity (hooks, event listeners) is needed.
