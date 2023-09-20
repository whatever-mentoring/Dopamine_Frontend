import { get, postForm, put, deleteData } from './instanse';

const path = `/feeds`;

const postFeed = (data) => {
  const memberId = localStorage.getItem('memberId');
  const body = data;
  body.memberId = memberId;
  const token = localStorage.getItem('accessToken');
  return postForm(path, body, token);
};

// 현재 미사용
const getFeed = (feedId) => {
  const reqPath = path + `/${feedId}}`;
  return get(reqPath);
};

// 현재 미사용
const editFeed = (feedId, data) => {
  const reqPath = path + `/${feedId}}`;
  return put(reqPath, data);
};

const deleteFeed = (feedId) => {
  const reqPath = path + `/${feedId}`;
  return deleteData(reqPath);
};

const getFeedsByMember = (page = 1) => {
  const token = localStorage.getItem('accessToken');
  const reqPath = path + `/by-member?page=${page}`;
  return get(reqPath, token);
};

// 현재 미사용
const getFeedsByChallenge = (page = 1, challengeId) => {
  const reqPath = path + `/main-page/${challengeId}?page=${page}`;
  return get(reqPath);
};

const getFeedsByDate = (page = 1) => {
  const token = localStorage.getItem('accessToken');
  const reqPath = path + `/order-by-date?page=${page}`;
  return get(reqPath, token);
};

const getFeedsByMonth = (month) => {
  const token = localStorage.getItem('accessToken');
  // 2023-09
  const reqPath = path + `/month/by-member?month=${month}`;
  return get(reqPath, token);
};

const getFeedsByLikeCount = (page = 1) => {
  const token = localStorage.getItem('accessToken');
  const reqPath = path + `/order-by-likecount?page=${page}`;
  console.log(reqPath);
  return get(reqPath, token);
};

const getFeedsFilter = (year) => {
  const token = localStorage.getItem('accessToken');
  const reqPath = path + `/year/by-member?years=${year}`;
  return get(reqPath, token);
};

export {
  getFeedsByLikeCount,
  getFeedsByMember,
  getFeedsByDate,
  getFeedsByMonth,
  postFeed,
  deleteFeed,
  getFeedsFilter,
};
