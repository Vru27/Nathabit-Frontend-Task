import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="grid gap-10 md:grid-cols-2">
        <Skeleton className="h-125 w-full rounded-xl" />

        <div className="space-y-5">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
    </main>
  );
}