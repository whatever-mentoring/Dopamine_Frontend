import { get, put, deleteData } from './instanse';

const reqPath = `/api/members`;

const editMember = (nickname, exp) => {
  const kakaoId = localStorage.getItem('kakaoId');
  const token = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  const data = {
    exp: exp,
    kakaoId: kakaoId,
    nickname: nickname,
    refreshToken: refreshToken,
  };

  return put(reqPath, data, token);
};

const getMember = () => {
  const token = localStorage.getItem('accessToken');
  return get(reqPath, token);
};

const deleteMember = () => {
  const token = localStorage.getItem('accessToken');
  return deleteData(reqPath, token);
};

export { editMember, getMember, deleteMember };
