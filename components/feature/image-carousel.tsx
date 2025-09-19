// components/feature/image-carousel.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ImageCarousel({ images }: { images: string[] }) {
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div>
            <div className="relative h-96 w-full border rounded-lg overflow-hidden">
                <Image
                    src={mainImage}
                    alt="Product image"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>
            <div className="flex gap-2 mt-2">
                {images.map(img => (
                    <div
                        key={img}
                        className="relative h-20 w-20 border rounded-md cursor-pointer overflow-hidden"
                        onClick={() => setMainImage(img)}
                    >
                        <Image src={img} alt="Product thumbnail" fill style={{ objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}