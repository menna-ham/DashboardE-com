import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch subcategories from backend
export const fetchSubcategories = createAsyncThunk('subcategories/fetchSubcategories', async () => {
  const response = await axios.get('/SubCategory/GetAllSubCategory');
  return response.data; // Assuming the response data is the list of subcategories
});

const subcategorySlice = createSlice({
  name: 'subcategories',
  initialState: {
    subcategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subcategorySlice.reducer;
