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
    const response = await api.get('board');
    return response;
  },

  getDetail: async (boardId) => {
    const response = await api.get(`board/${boardId}`, {});
    return response.data;
  },

  addPost: async (data) => {
    console.log(data);
    const response = await api.post('board', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: sessionStorage.getItem('Access_token'),
      },
    });
    return response;
  },

  deletePost: async (boardId) => {
    const response = await api.delete(`board/${boardId}`, {
      headers: {
        Authorization: sessionStorage.getItem('Access_token'),
      },
    });
    return response;
  },

  postHeart: async (boardId) => {
    const response = await api.put(`board/heart/${boardId}`, {
      headers: {
        Authorization: sessionStorage.getItem('Access_token'),
      },
    });

    return response.data;
  },

  //kakao login
  kakaoLogin: () => api.get(`login/member`),

  //comment
  addComment: (data) => api.post('/comment', data),
  editComment: (data) => api.put(`/comment/${data.commentId}`, data),
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
  updateMeeting: (meetingID, data) =>
    api.put(`meeting/${meetingID}`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }), //모임수정
  getMyMeeting: () => api.get(`mypage/meeting`),
  deleteMeeting: (meetingID) => api.delete(`meeting/${meetingID}`), //모임삭제
  applyMeeting: (meetingID) => api.post(`meeting/join/${meetingID}`), //모임참여
  cancelMeeting: (meetingID) => api.delete(`meeting/join/${meetingID}`), //모임참여취소
  getMeeting: (meetingID) => api.get(`meeting/${meetingID}`),
  getAllMeeting: () => api.get('meeting'),
  getMeetingUser: (meetingId) => api.get(`meeting/crew/${meetingId}`),

  //meeting like
  getMeetingLike: (meetingID) => api.get(`meeting/heart/${meetingID}`),
  updateMeetingLike: (meetingID) => api.put(`meeting/heart/${meetingID}`),

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
