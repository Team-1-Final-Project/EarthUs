import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true,
});

export const apis = {
  getPosts: async () => {
    const response = await api.get('posts');
    return response.data;
  },
  postHeart: async (boardId, heartOn) => {
    const response = await api.post('hearts', {
      boardId: boardId,
      heartOn: heartOn,
    });
    return response.data;
  },
};
