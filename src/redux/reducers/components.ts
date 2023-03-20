// redux/componentsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComponent } from '../../lib/data-structure';

export interface ComponentsState {
  components: IComponent[];
}

const initialState: ComponentsState = {
  components: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    createComponent: (state, action: PayloadAction<IComponent>) => {
      state.components.push(action.payload);
    },
    updateComponent: (state, action: PayloadAction<IComponent>) => {
      const index = state.components.findIndex(component => component.id === action.payload.id);
      if (index !== -1) {
        state.components[index] = action.payload;
      }
    },
    removeComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter(component => component.id !== action.payload);
    },
  },
});

export const { createComponent, updateComponent, removeComponent } = componentsSlice.actions;

export default componentsSlice.reducer;
