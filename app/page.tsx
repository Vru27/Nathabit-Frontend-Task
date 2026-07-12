"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product/ProductCard";
import ProductSkeleton from "@/components/product/ProductSkeleton";
import Pagination from "@/components/product/pagination";
import Container from "@/components/layout/Container";
import { getProducts } from "@/services/products";
import { SearchX, AlertTriangle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const LIMIT = 20;

function HomePageContent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("q") || "";
  const page = Number(searchParams.get("page") || "1");

  const skip = (page - 1) * LIMIT;

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(skip, LIMIT, search),
  });

  const featuredProducts =
    page === 1 ? data?.products.slice(0, 4) ?? [] : [];

  const remainingProducts =
    page === 1 ? data?.products.slice(4) ?? [] : data?.products ?? [];

  const categories = [
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
    "Smartphones",
    "Laptops",
    "Home Decoration",
    "Skincare",
  ];
  return (
    <main className="min-h-screen bg-slate-50">
      <Container>
        <div className="py-10">
          <section className="mb-10 rounded-3xl bg-linear-to-r from-green-50 via-emerald-50 to-lime-50 p-8 shadow-sm">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                <Sparkles className="h-4 w-4" />
                Premium Collection
              </div>

              <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                Discover Your Next Favorite Product
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Explore beauty, fragrances, groceries, furniture, fashion, and much
                more—all in one place.
              </p>
            </div>
          </section>
          {isLoading && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          )}
          {error && (
            <div className="flex min-h-[60vh] items-center justify-center">
              <Card className="w-full max-w-md border-0 shadow-lg">
                <CardContent className="flex flex-col items-center gap-5 py-10 text-center">
                  <AlertTriangle className="h-14 w-14 text-red-500" />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      Something went wrong
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                      We couldn't load the products. Please try again.
                    </p>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => window.location.reload()}
                  >
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
          {!isLoading && !error && page === 1 && featuredProducts.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Featured Products
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={`featured-${product.id}`}
                    product={product}
                  />
                ))}
              </div>
            </section>
          )}
          {!isLoading && !error && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Shop by Category
            </h2>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-full border bg-white px-5 py-2 text-sm font-medium shadow-sm transition hover:bg-green-50 hover:border-green-400 hover:text-green-700 cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div>
          </section>
          )}
          {!isLoading && !error && data?.products.length === 0 && (
            <div className="flex min-h-[60vh] items-center justify-center">
              <Card className="w-full max-w-md border-dashed shadow-sm">
                <CardContent className="flex flex-col items-center gap-5 py-10 text-center">
                  <SearchX className="h-14 w-14 text-gray-400" />

                  <div>
                    <h2 className="text-2xl font-semibold">
                      No Products Found
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                      We couldn't find any products matching your search.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          {!isLoading && !error && data && data.products.length > 0 && (
            <>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {remainingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Pagination
                  page={page}
                  total={data.total}
                  limit={LIMIT}
                  search={search}
                />
              </div>
            </>
          )}

        </div>
      </Container>
    </main>
  );
}
export default function HomePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-50">
          <Container>
            <div className="py-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            </div>
          </Container>
        </main>
      }
    >
      <HomePageContent />
    </Suspense>
  );
}