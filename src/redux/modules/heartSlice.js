import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';

export const getHeartList = createAsyncThunk('GET_HEART_LIST', async (id) => {
  const { data } = await token.get(`/board/heart/${id}`);
  return data;
});
export const putChangeHeart = createAsyncThunk('PUT_CHANGE_HEART', async (id) => {
  const { data } = await token.put(`/board/heart/${id}`);
  console.log(data);
  return data;
});

const heartSlice = createSlice({
  name: 'post',
  initialState: { post: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeartList.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(putChangeHeart.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

export const {} = heartSlice.actions;
export default heartSlice.reducer;
