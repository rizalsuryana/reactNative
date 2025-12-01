import { ProductListResponse, ProductParams } from "../types/products.type";
import { api } from "./api";

export async function getProducts(
  params: ProductParams = {}
): Promise<ProductListResponse> {
  const { page = 1, pageSize = 10, sortDir = "asc" } = params;
  const res = await api.get("/products", {
    params: { page, pageSize, sortDir },
  });

  return res.data;
}
