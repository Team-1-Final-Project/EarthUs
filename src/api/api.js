import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  // withCredentials: true,
});

export const localApi = axios.create({
  baseURL: `http://43.201.109.6/`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
  // withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = sessionStorage.getItem('Access_token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const jsonapi = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const token = axios.create({
  baseURL: `http://3.37.61.61/`,
  headers: { Authorization: sessionStorage.getItem('Access_token') },
});
export const multi = axios.create({
  baseURL: `http://3.37.61.61/`,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: sessionStorage.getItem('Access_token'),
  },
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

  // post

  addPost: async (newPost) => {
    const response = await api.post('/board', newPost, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },

  getPost: async () => {
    const response = await api.get('board');
    return response;
  },

  getAllPost: (page) => api.get(`board?page=${page}&size=${10}`),

  // meetingCommnet
  getMeetingCommentList: async (id) => {
    const response = await api.get(`meetingComment/${id}`);
    console.log(response.data, id);
    return response.data;
  },

  addMeetingComment: async (id, data) => {
    const response = await api.post(`meetingComment/${id}`, data);
    return response.data;
  },

  deleteMeetingComment: async (commnetId) => {
    const response = await api.delete(`meetingComment/${commnetId}`);
    return response.data;
  },

  upDateMeetingComment: async (commnetId, data) => {
    const response = await api.put(`meetingComment/${commnetId}`, data);
    return response.data;
  },

  //heart

  getHeart: async (boardId) => {
    const response = await api.get(`board/heart/${boardId}`, {});

    return response.data;
  },
  postHeart: async (boardId) => {
    const response = await api.put(`board/heart/${boardId}`, {});

    return response.data;
  },

  updatePost: (boardId, updatePost) =>
    api.put(`board/${boardId}`, updatePost, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }),

  //kakao login
  // kakaoLogin: () => api.get(`login/member`),
  // 서버 배포시 위 api로 변경 필요
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
    }),

  //모임수정
  // getMyMeeting: () => api.get(`mypage/meeting`),
  deleteMeeting: (meetingID) => api.delete(`meeting/${meetingID}`), //모임삭제
  applyMeeting: (meetingID) => api.post(`meeting/join/${meetingID}`), //모임참여
  cancelMeeting: (meetingID) => api.delete(`meeting/join/${meetingID}`), //모임참여취소
  getMeeting: (meetingID) => api.get(`meeting/${meetingID}`),
  getAllMeeting: (page) => api.get(`meeting?page=${page}`),
  getMeetingUser: (meetingId) => api.get(`meeting/crew/${meetingId}`),

  //meeting like
  getMeetingLike: (meetingID) => api.get(`meeting/heart/${meetingID}`),
  updateMeetingLike: (meetingID) => api.put(`meeting/heart/${meetingID}`),

  //meeting review
  getMeetingReviewListAll: (pageNum) => api.get(`/review?page=${pageNum}`),
  getMeetingReview: (reviewID) => api.get(`/review/${reviewID}`),
  addMeetingReview: (meetingID, data) =>
    api.post(`/review/${meetingID}`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }),
  deleteMeetingReview: (reviewID) => api.delete(`/review/${reviewID}`),
  updateMeetingReview: (reviewID, data) =>
    api.put(`/review/${reviewID}`, data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }),
  getMeetingReviewList: (meetingID) => api.get(`/review/meeting/${meetingID}`),

  //tag
  searchMeetingTag: (pageNum, meetingTag) => api.post(`/meeting/tag?page=${pageNum}`, meetingTag),
  searchPostTag: (page, postTag) => api.post(`/board/tag?page=${page}`, postTag),

  //search
  searchMeeting: (keyword, page) => api.get(`/meeting/search?keyword=${keyword}&page=${page}`),
  searchBoard: (keyword, page) => api.get(`/board/search?keyword=${keyword}&page=${page}`),

  //Onlineshop
  getShopList: async () => {
    const response = await api.get('/zeroshop/online');
    return response.data;
  },
  //OfflineShop
  getOfflineShopList: (page) => api.get(`/zeroshop/offline?page=${page}`),

  //mypage
  getMyMeeting: async () => {
    const response = await api.get('mypage/meeting');
    return response.data;
  },
  getMyLikePost: async () => {
    const response = await api.get('mypage/hitboard');
    return response.data;
  },
  getMyWritePost: async () => {
    const response = await api.get('mypage/board');
    return response.data;
  },
  getMyBadge: async () => {
    const response = await api.get('mypage/badge');
    return response.data;
  },
  updateProfileImage: async (data) => {
    const response = await api.post('mypage/profile', data, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    });
    return response.data;
  },
  updateRepBadge: async () => {
    const response = await api.post('mypage/badge');
    return response.data;
  },
  updateNickname: async (nickname) => {
    const response = await api.put('member/nickname', {
      nickname: nickname,
    });
    return response.data;
  },
};

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
