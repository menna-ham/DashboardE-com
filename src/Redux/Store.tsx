import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import ChartReducer from './Slices/ChartsSlice';
import brandReducer from './Slices/brandSlice';
import subcategoryReducer from './Slices/subcategorySlice';

// Configure the Redux store
export const Store = configureStore({
  reducer: {
    charts: ChartReducer,
    brands: brandReducer,
    subcategories: subcategoryReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof Store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof Store.dispatch;

// Create typed hooks for useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default Store;