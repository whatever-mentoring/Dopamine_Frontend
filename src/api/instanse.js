const url = 'https://www.challeng9.kro.kr:9000';

// get
const get = async (reqPath, token) => {
  const reqUrl = url + reqPath;

  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    options.headers.Authorization = token;
  }

  return await fetch(reqUrl, options);
};

// json post
const post = (reqPath, data) => {
  const reqUrl = url + reqPath;

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  };

  const token = localStorage.getItem('accessToken');
  if (token) {
    options.headers.Authorization = token;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(reqUrl, options);
};

// form post
const postForm = async (reqPath, formData) => {
  const reqUrl = url + reqPath;
  const token = localStorage.getItem('accessToken');

  return await fetch(reqUrl, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: formData,
  });
};

// put json
const put = async (reqPath, data, token) => {
  const reqUrl = url + reqPath;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  if (token) {
    options.headers.Authorization = token;
  }

  return await fetch(reqUrl, options);
};

// put form
const putForm = async (reqPath, formData) => {
  const reqUrl = url + reqPath;

  return await fetch(reqUrl, {
    method: 'PUT',
    body: formData,
  });
};

// delete
const deleteData = async (reqPath) => {
  const reqUrl = url + reqPath;
  const token = localStorage.getItem('accessToken');
  return await fetch(reqUrl, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  });
};

export { get, post, postForm, put, putForm, deleteData };
