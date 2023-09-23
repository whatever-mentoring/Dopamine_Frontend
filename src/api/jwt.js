import { get } from './instanse';

const path = `/api/auth`;

const login = (code) => {
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
  const reqPath = path + `/login?code=${code}&redirect_url=${REDIRECT_URI}`;
  return get(reqPath);
};

const logout = () => {
  const token = localStorage.getItem('accessToken');
  const reqPath = path + '/logout';
  return get(reqPath, token);
};

export { login, logout };
