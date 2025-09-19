# Tech Challenge: Product Page Optimisation

A web application built with Next.js to display a product list from an API, with a primary focus on front-end performance optimization in line with Core Web Vitals metrics (TTFB, FCP, TTI).

## Key Features

-   **Product Listing Page (`/products`):**
    -   Displays all products from the API.
    -   Filters products by category.
    -   Sorts products by price (Lowest / Highest).
    -   Filter and sorting state is stored in the URL (`searchParams`), making it bookmarkable and shareable.

-   **Product Detail Page (`/products/[id]`):**
    -   Displays the complete details of a single product.
    -   Interactive image carousel for the product gallery.
    -   Information on price, description, brand, and stock availability status.

## Performance Optimization Strategy

As per the challenge request, several methods have been implemented to reduce load times:

-   **Static Site Generation (SSG) & ISR:** The product detail pages are pre-rendered at build time using `generateStaticParams` for an extremely fast **TTFB (Time to First Byte)**. Data is kept fresh using **Incremental Static Regeneration (ISR)**.

-   **React Server Components (RSC):** Most components, especially those that perform data fetching, are Server Components. This drastically reduces the size of the JavaScript bundle sent to the client, improving **TTI (Time to Interactive)**.

-   **Streaming UI with `loading.tsx`:** Utilizes loading skeletons that are displayed instantly during navigation or data fetching. This improves **FCP (First Contentful Paint)** and the overall user experience.

-   **Image Optimization with `next/image`:** All product images (both thumbnails and in the carousel) use the `<Image>` component for automatic size optimization, modern formats (WebP), and prevention of layout shift.

-   **Font Optimization with `next/font`:** Fonts are self-hosted to eliminate external network requests and prevent layout shift.

-   **Parallel Data Fetching**: On the product listing page, data for products and categories are fetched in parallel to minimize network waterfalls.

## Technology Used

-   Next.js 14+ (App Router)
-   React 18+
-   TypeScript
-   Tailwind CSS

## Running the Project Locally

### Prerequisites
Ensure you have **Node.js version 18.17** or newer.

### Installation
Clone this repository and install all the required dependencies.
```bash
npm install
```

### Running the Development Server
Run the command below to start the development server.
```bash
npm run dev
```
Open http://localhost:3000 in your browser to see the result.

### Data Source
This project uses the public API from dummyjson.com/products.