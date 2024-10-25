import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types for the subcategory and state
interface Subcategory {
  id: number; // Adjust according to your actual subcategory structure
  name: string;
  // Add other fields as necessary
}

interface SubcategoriesState {
  subcategories: Subcategory[];
  loading: boolean;
  error: string | null;
}

// Thunk to fetch subcategories from the backend
export const fetchSubcategories = createAsyncThunk<Subcategory[], void>(
  'subcategories/fetchSubcategories',
  async () => {
    const response = await axios.get('/SubCategory/GetAllSubCategory');
    if (response.status !== 200){
      throw new Error('Failed to fetch subcategories');
    }
    return response.data; // Assuming the response data is the list of subcategories
  }
);

const initialState: SubcategoriesState = {
  subcategories: [],
  loading: false,
  error: null,
};

const subcategorySlice = createSlice({
  name: 'subcategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategories.fulfilled, (state, action: PayloadAction<Subcategory[]>) => {
        state.loading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch subcategories';
      });
  },
});

// Exporting the reducer
export default subcategorySlice.reducer;
