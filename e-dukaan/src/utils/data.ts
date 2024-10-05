import { CartProduct } from "../components/checkout/CartProductDetails";
import { Product } from "../components/product/ProductCard";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "STI Men's Shirts",
    description: "This is a common Men's Shirts and it is checked",
    image: "wgxv5_400.webp",
    price: {
      mrp: 999,
      discountedPrice: 214,
    },
    deliveryType: "Free Delivery",
    rating: {
      rate: 3.9,
      count: 13071,
    },
  },
];

export const CART_PRODUCTS: CartProduct[] = [
  {
    product: {
      id: 1,
      title: "STI Men's Shirts",
      description: "This is a common Men's Shirts and it is checked",
      image: "wgxv5_400.webp",
      price: {
        mrp: 999,
        discountedPrice: 214,
      },
      deliveryType: "Free Delivery",
      rating: {
        rate: 3.9,
        count: 13071,
      },
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      title: "STI Men's Shirts",
      description: "This is a common Men's Shirts and it is checked",
      image: "wgxv5_400.webp",
      price: {
        mrp: 999,
        discountedPrice: 214,
      },
      deliveryType: "Free Delivery",
      rating: {
        rate: 3.9,
        count: 13071,
      },
    },
    quantity: 1,
  },
];
