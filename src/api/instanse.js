const url = 'https://api.mandarin.weniv.co.kr';

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
    options.headers.Authorization = `Bearer ${token}`;
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
  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(reqUrl, options);
};

// form post
const postForm = async (reqPath, formData) => {
  const reqUrl = url + reqPath;
  return await fetch(reqUrl, {
    method: 'POST',
    body: formData,
  });
};

// put
const put = async (reqPath, data) => {
  const token = localStorage.getItem('token');
  const reqUrl = url + reqPath;

  return await fetch(reqUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

// delete
const deleteData = async (reqPath) => {
  const token = localStorage.getItem('token');
  const reqUrl = url + reqPath;
  return await fetch(reqUrl, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export { get, post, postForm, put, deleteData };
