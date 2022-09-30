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
  createMeeting: (
    data //모임생성
  ) =>
    api.post(`meeting`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }),
  updateMeeting: (meetingID, data) => api.put(`meeting/${meetingID}`, data), //모임수정
  deleteMeeting: (meetingID) => api.delete(`meeting/${meetingID}`), //모임삭제
  applyMeeting: (meetingID) => api.post(`meeting/join/${meetingID}`), //모임참여
  cancelMeeting: (meetingID) => api.delete(`meeting/join/${meetingID}`), //모임참여취소
  updateMeetingImage: (meetingID) => api.put(`meeting/${meetingID}/image`),
  deleteMeetingImage: (meetingID) => api.delete(`meeting/${meetingID}/image`),
  getMeeting: (meetingID) => api.get(`meeting/${meetingID}`),
  getAllMeeting: () => api.get('meeting'),
  getMeetingUser: (meetingId) => api.get(`meeting/crew/${meetingId}`),

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
