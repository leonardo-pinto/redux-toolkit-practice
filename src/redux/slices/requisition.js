import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null
}

// createAsyncThunk receives two parameters: 1) name of the slice, 2) function name that creates the createAsyncThunk
export const fetchRecipes = createAsyncThunk(
  'requisition/fetchRecipes',
  async (URL) => {
    return fetch(URL).then((res) => res.json())
  }
)

const requisitionSlice = createSlice({
  name: "requisition",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.loading = true
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [fetchRecipes.rejected]: (state) => {
      state.loading = false
    },
  },
});

export default requisitionSlice.reducer;
