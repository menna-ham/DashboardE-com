// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Define types for your state and brand
// interface Brand {
//   id: number;
//   name: string;
//   // Add more fields as necessary
// }

// interface BrandState {
//   brands: Brand[];
//   loading: boolean;
//   error: string | null;
// }

// // Thunk to fetch brands from backend
// export const fetchBrands = createAsyncThunk<Brand[], void>(
//   'brands/fetchBrands',
//   async () => {
//     const response = await axios.get('/Brand/GetAllBrands');
//     return response.data; // Assuming the response data is the list of brands
//   }
// );

// const initialState: BrandState = {
//   brands: [],
//   loading: false,
//   error: null,
// };

// const brandSlice = createSlice({
//   name: 'brands',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBrands.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBrands.fulfilled, (state, action) => {
//         state.loading = false;
//         state.brands = action.payload;
//       })
//       .addCase(fetchBrands.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch brands';
//       });
//   },
// });

// // Selector to get brands
// export const selectBrands = (state: { brands: BrandState }) => state.brands.brands;
// export const selectBrandsLoading = (state: { brands: BrandState }) => state.brands.loading;
// export const selectBrandsError = (state: { brands: BrandState }) => state.brands.error;

// export default brandSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BrandItem } from "utils/typesAndInterfaces";
import fetchData from "../../utils/FetchData";
import { RootState } from "../Store";

interface BrandState {
  brands: BrandItem[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all brands
export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async (_, { rejectWithValue }) => {
    const response = await fetchData<BrandItem[]>("get", "Brand/GetAllBrand");
    console.log('response from slice', response)

    if (response.error) {
      return rejectWithValue(response.error);
    }
    return response.data;
  }
);

// Async thunk to create a new brand
export const createBrand = createAsyncThunk(
  "brands/createBrand",
  async (newBrand: Partial<BrandItem>, { rejectWithValue }) => {
    const response = await fetchData<BrandItem>("post", "Brand/CreateBrand", newBrand);
    if (response.error) {
      return rejectWithValue(response.error);
    }
    return response.data;
  }
);

// Async thunk to update a brand
export const updateBrand = createAsyncThunk(
  "Brand/UpdateBrand",
  async (
    { id, updatedData }: { id: number; updatedData: Partial<BrandItem> },
    { rejectWithValue }
  ) => {
    const response = await fetchData<BrandItem>(
      "put",
      `Brand/UpdateBrand`,
      updatedData
    );
    if (response.error) {
      return rejectWithValue(response.error);
    }
    return response.data;
  }
);

// Async thunk to delete a brand
export const deleteBrand = createAsyncThunk(
  "brands/deleteBrand",
  async (id: number, { rejectWithValue }) => {
    const response = await fetchData<BrandItem>("delete", `Brand/DeleteBrand`,id);
    if (response.error) {
      return rejectWithValue(response.error);
    }
    return id;
  }
);

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all brands
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBrands.fulfilled,
        (state, action: PayloadAction<BrandItem[] | null>) => {
          state.loading = false;
          state.brands = action.payload || []; // Set to an empty array if action.payload is null
        }
      )
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create a brand
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createBrand.fulfilled,
        (state, action: PayloadAction<BrandItem | null>) => {
          state.loading = false;
          if (action.payload) {
            state.brands.push(action.payload); // Only push if action.payload is not null
          }
        }
      )
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update a brand
      .addCase(updateBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Adjusted case to handle null in updateBrand.fulfilled
      .addCase(updateBrand.fulfilled, (state, action: PayloadAction<BrandItem | null>) => {
        state.loading = false;
        if (action.payload) { // Check if payload is not null
          const index = state.brands.findIndex((brand) => brand.id === action.payload!.id);
          if (index !== -1) {
            state.brands[index] = action.payload;
          }
        }
      })     
      .addCase(updateBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete a brand
      .addCase(deleteBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteBrand.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.loading = false;
          state.brands = state.brands.filter(
            (brand) => brand.id !== action.payload.toString()
          );
        }
      )
      .addCase(deleteBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectBrands = (state: RootState) => state.brands;

export default brandSlice.reducer;
