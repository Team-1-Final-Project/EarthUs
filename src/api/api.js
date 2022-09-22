import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true,
});

// api.interceptors.request.use(
//   config => {
//     return config
//   },
//   error =>{
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

// api.interceptors.response.use(
//   response => {
//     const res = response.data
//     return res
//   },
//   error =>{
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

export const apis = {
  //comment
  addComment: (content) => api.post('comment', content),
  editComment: (payload) => api.put(`comment/${payload.id}`, payload),
  deleteComment: (id) => api.delete(`comment/${id}`),
};
