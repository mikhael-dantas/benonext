// redux/functionalRequirementsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFunctionalRequirement } from '../../lib/data-structure';

export interface FunctionalRequirementsState {
  functionalRequirements: IFunctionalRequirement[];
}

const initialState: FunctionalRequirementsState = {
  functionalRequirements: [],
};

export const functionalRequirementsSlice = createSlice({
  name: 'functionalRequirements',
  initialState,
  reducers: {
    createFunctionalRequirement: (state, action: PayloadAction<IFunctionalRequirement>) => {
      state.functionalRequirements.push(action.payload);
    },
    updateFunctionalRequirement: (state, action: PayloadAction<IFunctionalRequirement>) => {
      const index = state.functionalRequirements.findIndex(fr => fr.id === action.payload.id);
      if (index !== -1) {
        state.functionalRequirements[index] = action.payload;
      }
    },
    removeFunctionalRequirement: (state, action: PayloadAction<string>) => {
      state.functionalRequirements = state.functionalRequirements.filter(fr => fr.id !== action.payload);
    },
  },
});

export const { createFunctionalRequirement, updateFunctionalRequirement, removeFunctionalRequirement } = functionalRequirementsSlice.actions;

export default functionalRequirementsSlice.reducer;
