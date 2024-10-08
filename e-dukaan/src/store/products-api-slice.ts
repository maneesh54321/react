import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../components/product/ProductCard";

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

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `products`,
      transformResponse: (response: ApiProduct[]) => {
        console.log(response);
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
