import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

let API_URL = 'https://ecomerce.runasp.net/api/Product/GetAllProduct';

// Define types for the chart data and state
interface Product {
  id: number; // Adjust the fields based on your actual product structure
  name: string;
  // Add other fields as necessary
}

interface ChartsState {
  items: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; 
  fromDate: string;
  toDate: string;
  error: string | null;
}

// Thunk to fetch charts from the API
export const fetchCharts = createAsyncThunk<Product[], void>(
  'charts/fetchCharts',
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Assuming the API returns an array of products
  }
);

const initialState: ChartsState = {
  items: [],
  status: 'idle',
  fromDate: '',
  toDate: '',
  error: null,
};

export const chartsDataSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    getChartDate: (state, action: PayloadAction<{ from: string; to: string }>) => {
      state.fromDate = action.payload.from;
      state.toDate = action.payload.to;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload; // Update state with fetched data
      })
      .addCase(fetchCharts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

// Action creators are generated for each case reducer function
export const { getChartDate } = chartsDataSlice.actions;

export default chartsDataSlice.reducer;
