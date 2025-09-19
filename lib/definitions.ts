export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
    stock: number;
    brand: string;
}

export interface ProductsApiResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }