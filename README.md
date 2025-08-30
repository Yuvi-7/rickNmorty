# Rick and Morty App

A React application built with TypeScript, Vite, and TanStack Router for file-based routing.

## Features

- ⚡️ Vite for fast development and building
- 🎯 TypeScript for type safety
- 🛣️ TanStack Router for file-based routing
- 🔍 React Query for data fetching
- 🎨 Modern UI with CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and set your API base URL:
   ```
   VITE_API_BASE_URL=https://rickandmortyapi.com/api
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   This will automatically generate the route tree and start the Vite dev server.

4. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

This project requires the following environment variable:

- `VITE_API_BASE_URL` - The base URL for the Rick and Morty API (default: `https://rickandmortyapi.com/api`)

Create a `.env` file in the root directory with:
```
VITE_API_BASE_URL=https://rickandmortyapi.com/api
```

**Note:** All environment variables must be prefixed with `VITE_` to be accessible in the frontend code.

# rickNmorty
