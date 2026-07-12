"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      {data?.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </main>
  );
}