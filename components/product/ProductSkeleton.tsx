import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-60 w-full" />

      <CardContent className="space-y-4 p-4">
        {/* Category */}
        <Skeleton className="h-6 w-20 rounded-full" />

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-1/2" />

        {/* Rating & Stock */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-24" />
        </div>

        {/* Price */}
        <Skeleton className="h-8 w-24" />

        {/* Button */}
        <Skeleton className="h-10 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}