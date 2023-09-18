import { get, put, deleteData } from './instanse';

const reqPath = `/api/members`;

const kakaoId = localStorage.getItem('kakaoId');
const token = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const editMember = (nickname, exp) => {
  const data = {
    exp: exp,
    kakaoId: kakaoId,
    nickname: nickname,
    refreshToken: refreshToken,
  };

  return put(reqPath, data, token);
};

const getMember = (accessToken = token) => {
  return get(reqPath, accessToken);
};

const deleteMember = () => {
  return deleteData(reqPath, token);
};

export { editMember, getMember, deleteMember };
