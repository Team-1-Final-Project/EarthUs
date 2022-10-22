import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apis } from 'api/api';

const initialState = {
  searchDataList: [],
  isLoading: false,
  error: null,
};

export const __searchCommunity = createAsyncThunk('SEARCH_COMMUNITY', async (payload, thunkAPI) => {
  try {
    const response = await apis.searchBoard(payload);
    return thunkAPI.fulfillWithValue(response.data.content);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [__searchCommunity.pending]: (state) => {
      state.isLoading = true;
    },
    [__searchCommunity.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.searchDataList = action.payload;
    },
    [__searchCommunity.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
