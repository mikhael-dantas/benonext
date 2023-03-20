// redux/modulesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModule } from 'src/lib/data-structure';

export interface ModulesState {
  modules: IModule[];
}

const initialState: ModulesState = {
  modules: [], // Initialize with an empty array or fetch initial data from the API
};

export const modulesSlice = createSlice({
  name: 'modules',
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<IModule[]>) => {
      state.modules = action.payload;
    },
    createModule: (state, action: PayloadAction<IModule>) => {
      state.modules.push(action.payload);
    },
    updateModule: (state, action: PayloadAction<IModule>) => {
      const index = state.modules.findIndex((module) => module.id === action.payload.id);
      if (index !== -1) {
        state.modules[index] = action.payload;
      }
    },
    removeModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((module) => module.id !== action.payload);
    },
  },
});

export const { setModules, createModule, updateModule, removeModule } = modulesSlice.actions;

export default modulesSlice.reducer;
