import Image from "next/image";
import { notFound } from "next/navigation";

import { getProductServer } from "@/services/products";
import { formatPrice } from "@/utils/formatPrice";
import { Package, Star } from "lucide-react";

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { id } = await params;

    const product = await getProductServer(Number(id));

    if (!product) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-6xl p-8">
            <div className="grid gap-10 md:grid-cols-2">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                        {product.category}
                    </p>

                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>

                    <p className="text-muted-foreground">
                        {product.description}
                    </p>

                    <h2 className="text-3xl font-bold">
                        {formatPrice(product.price)}
                    </h2>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Package className="h-4 w-4" />
                            <span>{product.stock} in stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}