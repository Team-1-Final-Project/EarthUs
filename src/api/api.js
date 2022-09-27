import axios from 'axios';

export const api = axios.create({
  baseURL: `http://3.37.61.61`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  withCredentials: true,
});

export const jsonAPI = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const apis = {
  // mainpage
  getMainPage: async () => {
    const response = await api.get('/main');
    return response.data;
  },

  getBoard: async () => {
    const response = await api.get('/board');
    return response.data;
  },
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

  //kakao login
  kakaoLogin: () => api.get(`login/member`),

  //comment
  addComment: (content) => api.post('/comment', content),
  editComment: (payload) => api.put(`/comment/${payload.id}`, payload),
  deleteComment: (id) => api.delete(`/comment/${id}`),

  //meeting
  createMeeting: (data) => api.post(`meeting`, data),
  applyMeeting: (meetingID) => api.post(`meeting/${meetingID}`),
  cancelMeeting: (meetingID) => api.put(`meeting/${meetingID}`),
  updateMeeting: (meetingID) => api.update(`meeting/${meetingID}`),
  deleteMeeting: (meetingID) => api.delete(`meeting/${meetingID}`),
  updateMeetingImage: (meetingID) => api.update(`meeting/${meetingID}/image`),
  deleteMeetingImage: (meetingID) => api.delete(`meeting/${meetingID}/image`),
  getMeeting: (meetingID) => api.get(`meeting/${meetingID}`),
  getAllMeeting: () => api.get('meeting'),

  //tag
  searchMeetingTag: (meetingTagName) => api.get(`/meeting?tag=${meetingTagName}`),

  //shop
  getShopList: async () => {
    const response = await api.get('recommends');
    return response.data;
  },
};

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
