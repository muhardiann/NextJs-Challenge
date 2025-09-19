// app/products/[id]/page.tsx
import { getProduct, getProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ImageCarousel } from '@/components/feature/image-carousel';

export async function generateStaticParams() {
    const products = await getProducts();
    return products.slice(0, 10).map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid md:grid-cols-2 gap-8">
                <ImageCarousel images={product.images} />
                <div>
                    <h1 className="text-4xl font-bold">{product.title}</h1>
                    <p className="text-gray-500 mt-2">{product.brand}</p>
                    <p className="text-3xl font-semibold my-4">${product.price}</p>
                    {product.stock > 0 ? (
                        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                            In Stock ({product.stock} available)
                        </span>
                    ) : (
                        <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                            Out of Stock
                        </span>
                    )}
                    <p className="mt-6 text-gray-700">{product.description}</p>
                </div>
            </div>
        </div>
    );
}