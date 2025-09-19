// app/products/page.tsx
import { getProducts, getCategories } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { ProductFilters } from '@/components/feature/product-filters';
import { Suspense } from 'react';
import type { Product } from '@/lib/definitions';

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; sort?: string; }>;
}) {
    const { category, sort } = await searchParams;

    // Ambil kedua data secara paralel
    const [products, categories] = await Promise.all([
        getProducts(category, sort),
        getCategories()
    ]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold">Our Products</h1>

                {/* Berikan categories (yang sekarang berupa array objek) sebagai props */}
                <Suspense fallback={<div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse" />}>
                    <ProductFilters categories={categories} />
                </Suspense>
            </div>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No products found for this category.</p>
            )}
        </div>
    );
}