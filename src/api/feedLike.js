import { get, post, deleteData } from './instanse';

// 현재 미사용
const getFeedLikes = (feedId) => {
  const reqPath = `/feeds/${feedId}/likes`;
  return get(reqPath);
};

const likeFeed = (feedId) => {
  const memberId = localStorage.getItem('memberId');
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return post(reqPath);
};

// 피드 데이터에 좋아요 멤버 데이더 추가 후 테스트
const unLikeFeed = (feedId) => {
  const memberId = localStorage.getItem('memberId');
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return deleteData(reqPath);
};

export { likeFeed, unLikeFeed };
