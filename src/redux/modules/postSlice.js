import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api/api';

export const getPostList = createAsyncThunk('GET_POST_LIST', async () => {
  const { data } = await token.get('/board');
  return data;
});

export const addPost = createAsyncThunk('ADD_POST', async (newPost) => {
  const { data } = await token.post('/board', newPost, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
});

export const getDetailPost = createAsyncThunk('GET_DETAIL_POST', async (id) => {
  const { data } = await token.get(`/board/${id}`, id);
  return data;
});

export const deletePost = createAsyncThunk('DELETE_POST', async (id) => {
  const { data } = await token.delete(`/board/${id}`);
  console.log(data);
  return data;
});

export const updatePost = createAsyncThunk('UPDATE_POST', async (updatePost) => {
  const { data } = await token.put(`/board/${updatePost.post.boardId}`, updatePost);
  return data;
});

const postSlice = createSlice({
  name: 'post',
  initialState: { post: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getDetailPost.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.post.push(action.payload);
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
