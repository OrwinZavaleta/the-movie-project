# 🎬 The Movie Project

<div align="center">

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)

A modern React application for discovering, searching, and managing your favorite movies.
👇 (And is deployed on Vercel)

[✨ Live Demo](https://the-movie-project-kappa.vercel.app/) | [Report Bug](https://github.com/yourusername/the-movie-project/issues) | [Request Feature](https://github.com/yourusername/the-movie-project/issues)


</div>

## ✨ Features

- 🔍 **Movie Discovery** - Browse popular movies from TMDB API
- 🔎 **Search Functionality** - Find movies by title or keywords
- ❤️ **Favorites System** - Save and manage your favorite movies
- 📈 **Trending Movies** - View trending searches powered by Appwrite backend
- 📱 **Responsive Design** - Optimized for both desktop and mobile devices

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><strong>Frontend</strong></td>
    <td>React 19 with TypeScript</td>
  </tr>
  <tr>
    <td align="center"><strong>Routing</strong></td>
    <td>React Router v7</td>
  </tr>
  <tr>
    <td align="center"><strong>Styling</strong></td>
    <td>Tailwind CSS v4</td>
  </tr>
  <tr>
    <td align="center"><strong>Backend</strong></td>
    <td>Appwrite for data storage</td>
  </tr>
  <tr>
    <td align="center"><strong>API</strong></td>
    <td>TMDB (The Movie Database)</td>
  </tr>
  <tr>
    <td align="center"><strong>Build Tool</strong></td>
    <td>Vite</td>
  </tr>
  <tr>
    <td align="center"><strong>Deployment</strong></td>
    <td>Vercel</td>
  </tr>
</table>

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/the-movie-project.git
cd the-movie-project
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Create a `.env` file in the root directory with the following variables:
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

## 📁 Project Structure

```
src/
├── components/    # Reusable UI components
├── contexts/      # React context providers
├── pages/         # Application pages/routes
├── services/      # API and backend service integrations
└── types/         # TypeScript type definitions
```

## 📝 License

This project is licensed under the MIT License.

---
