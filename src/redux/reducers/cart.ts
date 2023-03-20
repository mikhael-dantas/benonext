import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  showModal: boolean;
}

const initialState: CartState = {
  items: [],
  showModal: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    addToCartRequest: (state, action: PayloadAction<CartItem>) => {},
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    populateCart: (state) => {
      state.items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    },
    toggleCartModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { 
  addToCartRequest, 
  addToCart, 
  removeItemFromCart, 
  toggleCartModal,
  populateCart,
} = cartSlice.actions;

export default cartSlice.reducer;
