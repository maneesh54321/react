import { DeliveryAddress } from "../components/address/AddressCard";
import { CartItem } from "../components/cart/CartItemCard";
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

export const CART_PRODUCTS: CartItem[] = [
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

export const ADDRESSES: DeliveryAddress[] = [
  {
    id: 1,
    contact: {
      name: "Ritika Singh",
      contactNo: "+917982772922",
    },
    address: {
      line1: "56, Babas Ananda Nialayam",
      line2: "5th a cross road, Rajashree Layout",
      pincode: "560037",
      city: "Bengaluru",
      state: "Karnataka",
      landmark: "Government School",
    },
  },
  {
    id: 2,
    contact: {
      name: "Maneesh Singh",
      contactNo: "+919199452736",
    },
    address: {
      line1: "56, Babas Ananda Nialayam",
      line2: "5th a cross road, Rajashree Layout",
      pincode: "560037",
      city: "Bengaluru",
      state: "Karnataka",
      landmark: "Government School",
    },
  },
];
