import axios from 'axios';

export const api = axios.create({
  baseURL: `http://3.37.61.61/`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  // withCredentials: true,
});

export const jsonAPI = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const apis = {
  // mainpage
  getMainPage: async () => {
    const response = await api.get('main');
    return response.data;
  },

  getMainMission: async () => {
    const response = await api.get('main/daily');
    return response.data;
  },

  getMainHitBoard: async () => {
    const response = await api.get('main/hitboard');
    return response.data;
  },

  getMainMeeting: async () => {
    const response = await api.get('main/newmeeting');
    return response.data;
  },

  postDailiyMissionCheck: async () => {
    const response = await api.post('main/daily');
    return response.data;
  },

  getPost: async () => {
    const response = await api.get('mockboard');
    return response;
  },
  getDetail: async (boardId) => {
    const response = await api.get(`mockboard/${boardId}`);
    return response;
  },
  addPost: async ({ title, image, content, tag }) => {
    const response = await api.post('board', {
      title: title,
      image: image,
      content: content,
      tag: tag,
    });
    return response.data;
  },

  deletePost: async (boardId) => {
    const response = await api.delete(`mockboard/${boardId}`);
    return response;
  },

  postHeart: async ({ boardId }) => {
    console.log(boardId);
    const response = await api.put('mockboard', {
      boardId: boardId,
    });
    console.log(response.data);

    return response.data;
  },

  //kakao login
  kakaoLogin: () => api.get(`login/member`),

  //comment
  addComment: (content) => api.post('/comment', content),
  editComment: (payload) => api.put(`/comment/${payload.id}`, payload),
  deleteComment: (id) => api.delete(`/comment/${id}`),

  //meeting
  createMeeting: (data) =>
    api.post(`meeting`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }),
  applyMeeting: (meetingID) => api.post(`meeting/${meetingID}`),
  cancelMeeting: (meetingID) => api.put(`meeting/${meetingID}`),
  updateMeeting: (meetingID, data) => api.put(`meeting/${meetingID}`, data),
  deleteMeeting: (meetingID) => api.delete(`meeting/${meetingID}`),
  updateMeetingImage: (meetingID) => api.put(`meeting/${meetingID}/image`),
  deleteMeetingImage: (meetingID) => api.delete(`meeting/${meetingID}/image`),
  getMeeting: (meetingID) => api.get(`meeting/${meetingID}`),
  getAllMeeting: () => api.get('meeting'),

  //meeting like
  getMeetingLike: (meetingID) => api.get(`meeting/heart/${meetingID}`),
  updateMeetingLike: (meetingID) => api.put(`meeting/heart/${meetingID}`, { meetingID: meetingID }),

  //tag
  searchMeetingTag: (meetingTag) => api.post(`/meeting/tag`, meetingTag),
  searchPostTag: (postTag) => api.post(`/board/tag`, postTag),

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
