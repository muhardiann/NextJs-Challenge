// components/ui/product-card.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/definitions';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="group block border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative h-64 w-full">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4 bg-white">
                <h2 className="text-lg font-semibold truncate group-hover:text-blue-600">{product.title}</h2>
                <p className="text-sm text-gray-500 mt-1 h-10 overflow-hidden text-ellipsis">
                    {product.description}
                </p>
                <p className="text-xl font-bold mt-2 text-gray-800">{formatPrice(product.price)}</p>
            </div>
        </Link>
    );
}