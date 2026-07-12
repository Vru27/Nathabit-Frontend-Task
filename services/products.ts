import { api } from "./api";
import { ProductsResponse, Product } from "@/types/product";

export const getProducts = async () => {
  const { data } = await api.get<ProductsResponse>(
    "/products?limit=12&skip=0"
  );

  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};

export async function getProductServer(id: number): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}