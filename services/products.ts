import { api } from "./api";
import { ProductsResponse, Product } from "@/types/product";

export const getProducts = async () => {
  const { data } = await api.get<ProductsResponse>(
    "/products?limit=12&skip=0"
  );

  return data;
};

export const getProduct = async (id: number) => {
  const { data } = await api.get<Product>(`/products/${id}`);

  return data;
};