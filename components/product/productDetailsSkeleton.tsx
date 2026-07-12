import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="grid gap-10 md:grid-cols-2">
        <Skeleton className="aspect-square rounded-xl" />

        <div className="space-y-6">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-11 w-full" />
        </div>
      </div>
    </main>
  );
}