// redux/useCasesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUseCase } from '../../lib/data-structure';

export interface UseCasesState {
  useCases: IUseCase[];
}

const initialState: UseCasesState = {
  useCases: [],
};

export const useCasesSlice = createSlice({
  name: 'useCases',
  initialState,
  reducers: {
    createUseCase: (state, action: PayloadAction<IUseCase>) => {
      state.useCases.push(action.payload);
    },
    updateUseCase: (state, action: PayloadAction<IUseCase>) => {
      const index = state.useCases.findIndex(useCase => useCase.id === action.payload.id);
      if (index !== -1) {
        state.useCases[index] = action.payload;
      }
    },
    removeUseCase: (state, action: PayloadAction<string>) => {
      state.useCases = state.useCases.filter(useCase => useCase.id !== action.payload);
    },
  },
});

export const { createUseCase, updateUseCase, removeUseCase } = useCasesSlice.actions;

export default useCasesSlice.reducer;
