// redux/tagsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITag } from '../../lib/data-structure';

export interface TagsState {
  tags: ITag[];
}

const initialState: TagsState = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    createTag: (state, action: PayloadAction<ITag>) => {
      state.tags.push(action.payload);
    },
    updateTag: (state, action: PayloadAction<ITag>) => {
      const index = state.tags.findIndex(tag => tag.id === action.payload.id);
      if (index !== -1) {
        state.tags[index] = action.payload;
      }
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter(tag => tag.id !== action.payload);
    },
  },
});

export const { createTag, updateTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
