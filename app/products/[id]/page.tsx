"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductDetailsSkeleton from "@/components/product/productDetailsSkeleton";

import {
  ArrowLeft,
  Star,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ProductPage() {
  const params = useParams();

  const id = Number(params.id);

  const {
    data: product,
    isLoading,
    error,
  } = useProduct(id);

  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) return <ProductDetailsSkeleton />;

  if (error || !product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        Product not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-14 lg:grid-cols-2">

        <div>

          <div className="relative aspect-square overflow-hidden rounded-3xl border bg-slate-100">

            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-contain p-10"
            />

          </div>

          <div className="mt-5 flex gap-3">

            {product.images.map((image, index) => (

              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 w-24 overflow-hidden rounded-xl border transition
                ${
                  selectedImage === index
                    ? "border-black"
                    : "border-slate-200"
                }`}
              >
                <Image
                  src={image}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                />
              </button>

            ))}

          </div>

        </div>

        <div className="space-y-6">

          <Badge className="capitalize">
            {product.category}
          </Badge>

          {product.brand && (
            <p className="text-sm text-slate-500">
              Brand

              <span className="ml-1 font-semibold text-black">
                {product.brand}
              </span>
            </p>
          )}

          <h1 className="text-5xl font-bold leading-tight">
            {product.title}
          </h1>

          <p className="leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-3">

            <Badge
              variant="secondary"
              className="gap-1 px-3 py-1"
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {product.rating.toFixed(1)}
            </Badge>

            <Badge
              variant="outline"
              className="gap-1 px-3 py-1"
            >
              <Package className="h-4 w-4" />
              {product.stock} in stock
            </Badge>

            {product.discountPercentage && (
              <Badge
                variant="destructive"
              >
                {product.discountPercentage.toFixed(0)}% OFF
              </Badge>
            )}

          </div>

          <h2 className="text-5xl font-bold">
            {formatPrice(product.price)}
          </h2>

          <div className="flex gap-4">

            <Button
              size="lg"
              className="flex-1"
            >
              Add to Cart
            </Button>

            <Button
              size="lg"
              variant="outline"
            >
              Buy Now
            </Button>

          </div>

          <div className="rounded-2xl border bg-slate-50 p-5">

            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-green-600" />
              <span>Free Shipping Available</span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span>100% Genuine Product</span>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}