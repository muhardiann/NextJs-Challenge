// app/products/loading.tsx
export default function Loading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 animate-pulse">
                    <div className="bg-gray-200 h-48 w-full rounded-md"></div>
                    <div className="mt-2 h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="mt-2 h-4 bg-gray-200 rounded w-full"></div>
                    <div className="mt-4 h-8 bg-gray-200 rounded w-1/2"></div>
                </div>
            ))}
        </div>
    );
  }