import { configureStore } from '@reduxjs/toolkit'
import { chartsDataSlice } from './Slices/ChartsSlice'
import ChartReducer from './Slices/ChartsSlice'
import brandReducer from './brandSlice';
import subcategoryReducer from './subcategorySlice';


export const store = configureStore({
  reducer: {
    charts:ChartReducer,
    brands: brandReducer,
    subcategories: subcategoryReducer,
    
  }
})
