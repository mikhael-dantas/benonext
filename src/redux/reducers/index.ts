import { combineReducers } from '@reduxjs/toolkit';
import cartReducer, { CartState } from './cart';
import currentTabReducer, { CurrentTabState } from './currentTab';
import tagsReducer, { TagsState } from './tags';
import useCasesReducer, { UseCasesState } from './useCases';
import nestedUseCasesReducer, { NestedUseCasesState } from './nestedUseCases';
import functionalRequirementsReducer, { FunctionalRequirementsState } from './functionalRequirements';
import componentsReducer, { ComponentsState } from './components';
import modulesReducer, { ModulesState } from './modules';

export interface RootState {
  cart: CartState;
  currentTab: CurrentTabState;
  tags: TagsState;
  useCases: UseCasesState;
  nestedUseCases: NestedUseCasesState;
  functionalRequirements: FunctionalRequirementsState;
  components: ComponentsState;
  modules: ModulesState;
}

const rootReducer = combineReducers<RootState>({
  cart: cartReducer,
  currentTab: currentTabReducer,
  tags: tagsReducer,
  useCases: useCasesReducer,
  nestedUseCases: nestedUseCasesReducer,
  functionalRequirements: functionalRequirementsReducer,
  components: componentsReducer,
  modules: modulesReducer,
});

export default rootReducer;
