import { get, post, deleteData } from './instanse';

const memberId = localStorage.getItem('memberId');

// 피드 403 해결 후 테스트
const getFeedLikes = (feedId) => {
  const reqPath = `/feeds/${feedId}/likes`;
  return get(reqPath);
};

// 피드 403 해결 후 테스트
const likeFeed = (feedId) => {
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return post(reqPath);
};

// 피드 403 해결 후 테스트
const unLikeFeed = (feedId) => {
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return deleteData(reqPath);
};

export { getFeedLikes, likeFeed, unLikeFeed };
