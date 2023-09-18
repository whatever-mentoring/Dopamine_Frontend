import { get, post, put, deleteData } from './instanse';

const path = `/feeds`;

// 403
const postFeed = (data) => {
  const memberId = localStorage.getItem('memberId');

  // {
  //   "challengeId": 0,
  //   "content": "string",
  //   "image1Url": "string",
  //   "image2Url": "string",
  //   "image3Url": "string",
  //   "openYn" = true;
  // }
  const body = data;
  body.memberId = memberId;
  return post(path, body);
};

// challenge 403 해결 후 테스트
const getFeed = (feedId) => {
  const reqPath = path + `/${feedId}}`;
  return get(reqPath);
};

// challenge 403 해결 후 테스트
const editFeed = (feedId, data) => {
  const reqPath = path + `/${feedId}}`;
  return put(reqPath, data);
};

// challenge 403 해결 후 테스트
const deleteFeed = (feedId) => {
  // /hard path 사용 여부 확인
  const reqPath = path + `/${feedId}}`;
  return deleteData(reqPath);
};

// 403
const getFeedsByMember = (page = 1) => {
  const memberId = localStorage.getItem('memberId');
  const reqPath = path + `/by-member/${memberId}/?page=${page}`;
  return get(reqPath);
};

// challenge 403 해결 후 테스트
const getFeedsByChallenge = (page = 1, challengeId) => {
  const reqPath = path + `/main-page/${challengeId}/?page=${page}`;
  return get(reqPath);
};

// 403
const getFeedsByDate = (page = 1) => {
  const reqPath = path + `/order-by-date?page=${page}`;
  return get(reqPath);
};

// 403
const getFeedsByLikeCount = (page = 1) => {
  const token = localStorage.getItem('accessToken');

  const reqPath = path + `/order-by-likecount?page=${page}`;
  return get(reqPath, token);
};

export { getFeedsByLikeCount, getFeedsByMember };
