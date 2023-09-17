const url = 'http://54.180.66.83:9000';

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
const deleteData = async (reqPath, token) => {
  const reqUrl = url + reqPath;

  const options = {
    method: 'DELETE',
  };

  if (token) {
    options.headers.Authorization = token;
  }

  return await fetch(reqUrl, options);
};

export { get, post, postForm, put, putForm, deleteData };
