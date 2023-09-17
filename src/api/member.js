import { get, post, postForm, put, putForm, deleteData } from './instanse';

const reqPath = `/api/members`;

const kakaoId = localStorage.getItem('kakaoId');
const token = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const createMember = (nickname) => {
  const data = {
    exp: 0,
    kakaoId: kakaoId,
    nickname: nickname,
    refreshToken: refreshToken,
  };

  return put(reqPath, data);
};

const editMember = (nickname, exp) => {
  const data = {
    exp: exp,
    kakaoId: kakaoId,
    nickname: nickname,
    refreshToken: refreshToken,
  };

  return put(reqPath, data, token);
};

export { createMember, editMember };
