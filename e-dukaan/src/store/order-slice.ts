import { createSlice } from "@reduxjs/toolkit";
import { UserDeliveryAddress } from "../components/address/AddressCard";
import { CartItem } from "../components/cart/CartItemCard";


type OrderState = {
    items: CartItem[];
    deliveryAddress: UserDeliveryAddress | null;
}

const initialState : OrderState = {
    items: [],
    deliveryAddress: null
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setDeliveryAddress(state, action) {
            state.deliveryAddress= action.payload;
        },
    }
});

export default orderSlice;

export const OrderActions = orderSlice.actions;