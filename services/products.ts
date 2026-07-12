import { api } from "./api";
import { ProductsResponse, Product } from "@/types/product";

export async function getProducts(
  skip: number = 0,
  limit: number = 20,
  search?: string
): Promise<ProductsResponse> {
  const endpoint = search?.trim()
    ? `/products/search?q=${search}&limit=${limit}&skip=${skip}`
    : `/products?limit=${limit}&skip=${skip}`;

  const { data } = await api.get<ProductsResponse>(endpoint);

  return data;
}

export const getProductById = async (id: number): Promise<Product> => {
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