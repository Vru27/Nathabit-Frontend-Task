"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";
import ProductCard from "@/components/product/ProductCard";

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
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {data?.products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
);
}