# NatHabit Frontend Assignment

This project is a simple e-commerce application built using Next.js and TypeScript. It allows users to browse products, search for products, view product details, and navigate through paginated results.

## Features

- Product listing
- Product details page
- Search with debounce
- Pagination
- Loading skeletons
- Error and empty state handling
- Responsive design

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Axios
- Lucide React

## Run Locally

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Folder Structure

```
app/
components/
hooks/
services/
types/
utils/
```

## API

Product data is fetched from:

- https://dummyjson.com/products

## Notes

- Used React Query for API data fetching and caching.
- Implemented reusable components wherever possible.
- Added loading, error, and empty states for better user experience.
- Built using the Next.js App Router.
