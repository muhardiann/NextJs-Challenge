// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Welcome to ShopTime
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Built with performance in mind using Next.js
      </p>
      <Link
        href="/products"
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Browse All Products
      </Link>
    </main>
  );
}