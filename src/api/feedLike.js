import { get, post, deleteData } from './instanse';

const getFeedLikes = (feedId) => {
  const reqPath = `/feeds/${feedId}/likes`;
  return get(reqPath);
};

// 인증글 게시 후 테스트
const likeFeed = (feedId) => {
  const memberId = localStorage.getItem('memberId');
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return post(reqPath);
};

// 인증글 게시 후 테스트
const unLikeFeed = (feedId) => {
  const memberId = localStorage.getItem('memberId');
  const reqPath = `/feeds/${feedId}/likes?memberId=${memberId}`;
  return deleteData(reqPath);
};

export { getFeedLikes, likeFeed, unLikeFeed };
