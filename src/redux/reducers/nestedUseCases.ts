// redux/nestedUseCasesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INestedUseCase } from '../../lib/data-structure';

export interface NestedUseCasesState {
  nestedUseCases: INestedUseCase[];
}

const initialState: NestedUseCasesState = {
  nestedUseCases: [],
};

export const nestedUseCasesSlice = createSlice({
  name: 'nestedUseCases',
  initialState,
  reducers: {
    createNestedUseCase: (state, action: PayloadAction<INestedUseCase>) => {
      state.nestedUseCases.push(action.payload);
    },
    updateNestedUseCase: (state, action: PayloadAction<INestedUseCase>) => {
      const index = state.nestedUseCases.findIndex(nestedUseCase => nestedUseCase.id === action.payload.id);
      if (index !== -1) {
        state.nestedUseCases[index] = action.payload;
      }
    },
    removeNestedUseCase: (state, action: PayloadAction<string>) => {
      state.nestedUseCases = state.nestedUseCases.filter(nestedUseCase => nestedUseCase.id !== action.payload);
    },
  },
});

export const { createNestedUseCase, updateNestedUseCase, removeNestedUseCase } = nestedUseCasesSlice.actions;

export default nestedUseCasesSlice.reducer;
