import { createContext, useEffect, useState } from 'react';
import { getMember } from '../api/member';

export const UserContext = createContext({
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  level: [],
  setToken: () => {},
  setRefreshToken: () => {},
  setNickname: () => {},
  setLevel: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem('accessToken') || null
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken') || null
  );
  const [nickname, setNickname] = useState(
    localStorage.getItem('nickname') || null
  );
  const [level, setLevel] = useState([]);

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await getMember();
        const json = await res.json();

        setLevel({
          exp: json.exp,
          successCnt: json.successCnt,
          num: json.level.levelNum,
          name: json.level.name,
          badge: json.level.badge,
          expPercent: json.level.expPercent,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        nickname,
        setNickname,
        level,
        setLevel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
