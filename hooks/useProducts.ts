import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/products";

export function useProducts(
    skip: number,
    limit: number,
    search: string
) {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(skip, limit, search),
    });
}