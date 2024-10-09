import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../components/product/ProductCard";
import { IRootState } from "./store";

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as IRootState).auth.token?.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "products",
      transformResponse: (response: ApiProduct[]) => {
        return response.map(mapApiProductToProduct);
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => "products/" + id,
      transformResponse: (response: ApiProduct) => {
        return mapApiProductToProduct(response);
      },
    }),
    getAllCategories: builder.query<string[], void>({
      query: () => "products/categories",
    }),
  }),
});

const mapApiProductToProduct = (apiProduct: ApiProduct) => ({
  ...apiProduct,
  price: {
    mrp: apiProduct.price,
    discountedPrice: undefined,
  },
  deliveryType: "Free Delivery",
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
} = productsApi;
