"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Star, Package } from "lucide-react";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProductPage() {
    const params = useParams();

    const id = Number(params.id);

    const {
        data: product,
        isLoading,
        error,
    } = useProduct(id);

    if (isLoading) {
        return <h1 className="p-10">Loading...</h1>;
    }

    if (error || !product) {
        return <h1 className="p-10">Product not found.</h1>;
    }

    return (
        <main className="mx-auto max-w-7xl p-6">
            <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm hover:underline"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Products
            </Link>
            <div className="grid gap-10 md:grid-cols-2">

                {/* Image */}

                <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-contain p-8"
                    />
                </div>

                {/* Details */}

                <div className="space-y-6">

                    <Badge>
                        {product.category}
                    </Badge>

                    {product.brand && (
                        <p className="text-sm text-muted-foreground">
                            Brand: <span className="font-medium">{product.brand}</span>
                        </p>
                    )}

                    <div className="flex items-center gap-2">
                        {product.discountPercentage && (
                            <Badge variant="destructive">
                                {product.discountPercentage.toFixed(0)}% OFF
                            </Badge>
                        )}

                        <Badge variant="outline">
                            {product.availabilityStatus ?? "In Stock"}
                        </Badge>
                    </div>


                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>

                    <p className="text-muted-foreground">
                        {product.description}
                    </p>

                    <div className="flex gap-6">

                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            {product.rating}
                        </div>

                        <div className="flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            {product.stock} in stock
                        </div>

                    </div>

                    <h2 className="text-4xl font-bold">
                        {formatPrice(product.price)}
                    </h2>

                    <div className="flex gap-4">
                        <Button className="flex-1">
                            Add to Cart
                        </Button>

                        <Button variant="outline">
                            Buy Now
                        </Button>
                    </div>
                </div>

            </div>
        </main>
    );
}