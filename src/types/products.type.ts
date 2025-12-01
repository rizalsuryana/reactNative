export type Product = {
  id: string;
  productName: String;
  stock: number;
  productPrice: number;
};

export type ProductListResponse = {
  data: Product[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};

export type ProductParams = {
  page?: number;
  pageSize?: number;
  sortDir?: "asc" | "desc";
};
