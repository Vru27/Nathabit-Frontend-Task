"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PaginationProps {
    page: number;
    total: number;
    limit: number;
    search: string;
}

export default function Pagination({
    page,
    total,
    limit,
    search,
}: PaginationProps) {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="mt-10 flex items-center justify-center gap-4">
            <Link
                href={`/?page=${page - 1}${search ? `&q=${search}` : ""}`}
            >
                <Button
                    variant="outline"
                    disabled={page === 1}
                >
                    Previous
                </Button>
            </Link>

            <span className="font-medium">
                Page {page} of {totalPages}
            </span>

            <Link
                href={`/?page=${page + 1}${search ? `&q=${search}` : ""}`}
            >
                <Button
                    variant="outline"
                    disabled={page === totalPages}
                >
                    Next
                </Button>
            </Link>
        </div>
    );
}