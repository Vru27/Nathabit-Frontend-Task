import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Package, ArrowRight } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />

        <Badge
          variant="secondary"
          className="absolute left-4 top-4 capitalize"
        >
          {product.category}
        </Badge>
      </div>

      <CardContent className="space-y-5 p-5">

        <h3 className="line-clamp-2 min-h-14 text-lg font-semibold leading-7">
          {product.title}
        </h3>


        <div className="flex items-center justify-between text-sm">

          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-yellow-700">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">
              {product.rating.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <Package className="h-4 w-4" />
            <span>{product.stock} in stock</span>
          </div>

        </div>

        <div className="flex items-end justify-between">

          <div>
            <p className="text-3xl font-bold text-slate-900">
              {formatPrice(product.price)}
            </p>

            {product.discountPercentage && (
              <p className="text-sm text-green-600">
                {product.discountPercentage.toFixed(0)}% OFF
              </p>
            )}
          </div>

        </div>

        <Link href={`/products/${product.id}`}>
          <Button className="w-full gap-2">
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

      </CardContent>
    </Card>
  );
}