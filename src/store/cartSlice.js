import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem: (state, action) => {
            const itemToAdd = action.payload;
            const existingItem = state.find(item => item.id === itemToAdd.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...itemToAdd, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                toast.success("Item's quantity is increased")
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                toast.success("Item's quantity is decreased")
            }
        },
        clearCart: (state) => {
            return [];
        }
    }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
