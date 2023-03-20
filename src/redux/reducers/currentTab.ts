import { Tab9s, Tabs9s } from '@myComponents/9s/tabs9s';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface CurrentTabState {
  currentTab: Tab9s;
}


const initialState: CurrentTabState = {
  currentTab: Tabs9s[0],
};


export const currentTabSlice = createSlice({
  name: 'currentTab',
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<Tab9s>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = currentTabSlice.actions;

export default currentTabSlice.reducer;
