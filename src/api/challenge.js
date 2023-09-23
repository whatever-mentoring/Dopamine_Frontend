import { get } from './instanse';

const path = `/challenges`;

const getTodayChallenge = () => {
  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('memberId');
  const reqPath = path + `/today-challenge/${userId}`;

  return get(reqPath, token);
};

export { getTodayChallenge };
