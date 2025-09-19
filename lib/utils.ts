// lib/utils.ts

export const formatPrice = (price: number) => {
    // Menggunakan Intl.NumberFormat untuk memformat angka sebagai mata uang USD
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
  };