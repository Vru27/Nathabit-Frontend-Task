"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="max-w-md text-muted-foreground">
        {error.message || "Unable to load this product."}
      </p>

      <Button onClick={reset}>
        Try Again
      </Button>
    </main>
  );
}