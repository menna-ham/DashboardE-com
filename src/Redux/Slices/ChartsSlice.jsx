import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

let API_URL='https://ecomerce.runasp.net/api/Product/GetAllProduct'

export const fetchCharts = createAsyncThunk(
    'charts/fetchCharts',
    async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data; // Assuming the API returns an array of products
    }
  );


export const chartsDataSlice = createSlice({
  name: 'charts',
  initialState: {
    items:[],
    status: 'idle', 
    fromDate:'',
    toDate:'',
    error: null,
  },
  reducers: {
    getChartDate:(state, action)=> {
        console.log(state)
        state.fromDate=action.payload.from;
        state.toDate= action.payload.to;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Update state with fetched data
      })
      .addCase(fetchCharts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const { getChartDate } = chartsDataSlice.actions
// export { fetchCharts }

export default chartsDataSlice.reducer