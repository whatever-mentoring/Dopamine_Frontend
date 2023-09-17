import { get } from './instanse';

const path = `/challenges`;

// 403
const getTodayChallenge = () => {
  // kakao? member?
  const userId = localStorage.getItem('memberId');
  const reqPath = path + `/today-challenge/${userId}`;

  return get(reqPath);
};

export { getTodayChallenge };
