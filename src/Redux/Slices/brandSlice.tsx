import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types for your state and brand
interface Brand {
  id: number;
  name: string;
  // Add more fields as necessary
}

interface BrandState {
  brands: Brand[];
  loading: boolean;
  error: string | null;
}

// Thunk to fetch brands from backend
export const fetchBrands = createAsyncThunk<Brand[], void>(
  'brands/fetchBrands',
  async () => {
    const response = await axios.get('/Brand/GetAllBrands');
    return response.data; // Assuming the response data is the list of brands
  }
);

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

const brandSlice = createSlice({
  name: 'brands',
  initialState,
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
        state.error = action.error.message || 'Failed to fetch brands';
      });
  },
});

// Selector to get brands
export const selectBrands = (state: { brands: BrandState }) => state.brands.brands;
export const selectBrandsLoading = (state: { brands: BrandState }) => state.brands.loading;
export const selectBrandsError = (state: { brands: BrandState }) => state.brands.error;

export default brandSlice.reducer;
