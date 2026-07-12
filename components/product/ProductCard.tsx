import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "../ui/button";
import { Star, Package } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({
    product,
}: ProductCardProps) {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-60">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover"
                />
            </div>

            <CardContent className="space-y-3 p-4">
                <Badge variant="secondary">
                    {product.category}
                </Badge>

                <h3 className="line-clamp-2 text-lg font-semibold">
                    {product.title}
                </h3>

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

                <p className="text-2xl font-bold">
                    {formatPrice(product.price)}
                </p>

                <Link href={`/products/${product.id}`}>
                    <Button
                        variant="outline"
                        className="w-full"
                    >
                        View Details
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}