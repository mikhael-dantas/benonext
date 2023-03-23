import { combineReducers } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cart';

export interface RootState {
  cart: CartState;
}

const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
});

export default rootReducer;
