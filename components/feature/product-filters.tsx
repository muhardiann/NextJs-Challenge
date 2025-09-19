// components/feature/product-filters.tsx
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

// Terima 'categories' sebagai props dengan tipe string[]
export function ProductFilters({ categories }: { categories: string[] }) {
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleFilterChange = (term: string, type: 'category' | 'sort') => {
        const params = new URLSearchParams(searchParams.toString());
        if (term) {
            params.set(type, term);
        } else {
            params.delete(type);
        }
        startTransition(() => {
            replace(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <div className={`flex gap-4 transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
            <select
                onChange={(e) => handleFilterChange(e.target.value, 'category')}
                defaultValue={searchParams.get('category') || ''}
                className="border p-2 rounded-md"
                disabled={isPending}
            >
                <option value="">All Categories</option>
                {/* Sekarang 'cat' adalah string, jadi ini akan bekerja dengan benar */}
                {categories.map(cat => (
                    <option key={cat} value={cat}>
                        {/* Mengubah format nama kategori agar lebih mudah dibaca */}
                        {cat.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </option>
                ))}
            </select>

            <select
                onChange={(e) => handleFilterChange(e.target.value, 'sort')}
                defaultValue={searchParams.get('sort') || ''}
                className="border p-2 rounded-md"
                disabled={isPending}
            >
                <option value="">Sort by</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
}