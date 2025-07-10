# REI Dashboard

A modern, fully responsive real estate dashboard built with Vite, React, TypeScript, TailwindCSS, and React Router DOM. Designed for a seamless experience across mobile, tablet, and desktop, with a focus on clean UI, code reuse, and user-centric features.



<img width="1280" height="615" alt="image" src="https://github.com/user-attachments/assets/c5b192cc-43c1-43c0-bd17-2c097b4dc96d" />

<img width="1280" height="607" alt="image" src="https://github.com/user-attachments/assets/ec1ad0dd-a6d7-4deb-89a1-6119aa1b85a2" />



## Features
- Responsive layout: Sidebar, Topbar, and main content adapt to all screen sizes
- Animated onboarding and progress bars
- Modern, visually polished UI with custom SVG icons
- Routing with React Router DOM
- TailwindCSS for rapid, consistent styling
- Reusable components (PlayButton, Sidebar, etc.)
- Dark mode support
- File upload (Add Property)
- Animated numbers and backgrounds

## Tech Stack
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (dev/build tool)
- [TailwindCSS](https://tailwindcss.com/) (utility-first CSS)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure
- `src/components/`
  - `Sidebar/Sidebar.tsx` – Responsive sidebar navigation with animated onboarding
  - `Topbar/Topbar.tsx` – Responsive top navigation bar with search and profile
  - `GreetingSection/GreetingSection.tsx` – Animated greeting, progress, and quick actions
  - `ProfileStatusTiles/ProfileStatusTiles.tsx` – Animated status tiles (desktop only)
  - `RecommendationsBox/RecommendationsBox.tsx` – Recommendations (desktop only)
  - `PropertySection/PropertySection.tsx` – Add property and quick links
  - `PropertyList/PropertyList.tsx` – Property cards/grid
  - `ChecklistProgress/ChecklistProgress.tsx` – Progress bar component
  - `ui/PlayButton.tsx` – Reusable play icon button
- `src/assets/` – Images and SVGs (logos, profile, etc.)
- `src/lib/utils.ts` – Utility functions
- `src/pages/` – (Reserved for route pages)
- `src/App.tsx` – Main app layout and routing

## Customization & Theming
- **Tailwind config:** See `tailwind.config.js` (dark mode enabled, custom content paths)
- **SVG icons:** Custom SVGs used for navigation and actions
- **Dark mode:** Toggle via UI, uses Tailwind's `dark` class

## Animations
- Onboarding and progress bars animate from 0 to target value
- Animated backgrounds in status tiles
- Animated number count-up in sidebar onboarding

## Usage Notes
- Sidebar hides on mobile/tablet, slides in via logo/hamburger
- Some components (ProfileStatusTiles, RecommendationsBox) are desktop-only
- All cards and sections are responsive and visually distinct

## Dependencies
See `package.json` for full list. Key dependencies:
- `react`, `react-dom`, `react-router-dom`, `tailwindcss`, `lucide-react`, `react-icons`, `@radix-ui/react-dialog`, etc.

## Development
- Lint: `npm run lint`
- Type check: `npm run build` (runs `tsc`)
- Config: See `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`

## Contribution
Pull requests welcome! Please follow code style and keep components modular and responsive.

## License
MIT
