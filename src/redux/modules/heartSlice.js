import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';

export const getHeart = createAsyncThunk('GET_HEART_LIST', async (id) => {
  const { data } = await token.get(`/board/heart/${id}`);
  console.log(data.data.boardLike);
  return data.data.boardLike;
});
export const putChangeHeart = createAsyncThunk('PUT_CHANGE_HEART', async (id) => {
  const { data } = await token.put(`/board/heart/${id}`);
  console.log(data.data, id);
  return data.data;
});

const heartSlice = createSlice({
  name: 'heart',
  initialState: { heart: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeart.fulfilled, (state, action) => {
      state.heart = action.payload;
    });
    builder.addCase(putChangeHeart.fulfilled, (state, action) => {
      state.heart = action.payload;
    });
  },
});

export const {} = heartSlice.actions;
export default heartSlice.reducer;
