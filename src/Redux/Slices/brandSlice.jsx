import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch brands from backend
export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await axios.get('/Brand/GetAllBrands');
  return response.data; // Assuming the response data is the list of brands
});

const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default brandSlice.reducer;
