# The Movie Project

A modern React application for discovering, searching, and managing your favorite movies.

## Features

- **Movie Discovery**: Browse popular movies from TMDB API
- **Search Functionality**: Find movies by title or keywords
- **Favorites System**: Save and manage your favorite movies
- **Trending Movies**: View trending searches powered by Appwrite backend
- **Responsive Design**: Optimized for both desktop and mobile devices

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Backend Services**: Appwrite for data storage
- **API Integration**: TMDB (The Movie Database) API
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Create a production build:
```bash
npm run build
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/contexts`: React context providers
- `/src/pages`: Application pages/routes
- `/src/services`: API and backend service integrations
- `/src/types`: TypeScript type definitions

## License

This project is licensed under the MIT License.
```

This README provides a concise but comprehensive overview of your project, including its features, technology stack, setup instructions, and structure. It gives users and developers all the essential information they need to understand and work with your movie project.