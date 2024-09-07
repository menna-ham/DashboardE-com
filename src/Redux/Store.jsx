import { configureStore } from '@reduxjs/toolkit'
import { chartsDataSlice } from './Slices/ChartsSlice'
import ChartReducer from './Slices/ChartsSlice'

export const store = configureStore({
  reducer: {
    charts:ChartReducer
    
  }
})
