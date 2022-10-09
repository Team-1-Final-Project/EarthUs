import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { multi, token, apis } from 'api/api';

export const getPostList = createAsyncThunk('GET_POST_LIST', async () => {
  const { data } = await token.get('/board');
  return data;
});

export const searchPostTag = createAsyncThunk('GET_POST_BY_TAG', async (selectedTag) => {
  const { data } = await apis.searchPostTag({ tagIds: selectedTag });
  return data;
});

export const addPost = createAsyncThunk('ADD_POST', async (newPost) => {
  await multi.post('/board', newPost);
  console.log(newPost);
});

export const getDetailPost = createAsyncThunk('GET_DETAIL_POST', async (id) => {
  const { data } = await token.get(`/board/${id}`);
  return data;
});

export const deletePost = createAsyncThunk('DELETE_POST', async (boardId) => {
  await token.delete(`/board/${boardId}`);
});

export const updatePost = createAsyncThunk('UPDATE_POST', async (boardId, updatePost) => {
  await multi.put(`/board/${boardId}`, updatePost);
  console.log(updatePost);
});

const postSlice = createSlice({
  name: 'post',
  initialState: { post: [], detailPost: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(searchPostTag.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getDetailPost.fulfilled, (state, action) => {
      state.detailPost = action.payload;
    });
  },
});

export default postSlice.reducer;
