// lib/data.ts
import 'server-only';
import {  Product, ProductsApiResponse } from './definitions';

export async function getProducts(category?: string, sort?: string): Promise<Product[]> {
    const url = category
        ? `https://dummyjson.com/products/category/${category}`
        : 'https://dummyjson.com/products?limit=100';

    // Opsi { next: { tags: ['products'] } } memastikan data di-cache dan bisa di-revalidate
    const res = await fetch(url, { next: { tags: ['products'] } });

    if (!res.ok) throw new Error('Failed to fetch products');

    const data: ProductsApiResponse = await res.json();
    let products = data.products;

    if (sort === 'asc') {
        products.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        products.sort((a, b) => b.price - a.price);
    }

    return products;
}

export async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        next: { revalidate: 3600 }, // ISR: Revalidate setiap jam
    });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
}

export async function getCategories(): Promise<string[]> {
    const res = await fetch('https://dummyjson.com/products/category-list');
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    return res.json();
  }