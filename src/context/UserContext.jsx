import { createContext, useEffect, useState } from 'react';
import { getMember } from '../api/member';

export const UserContext = createContext({
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  level: [],
  renderJoinStatus: false,
  setToken: () => {},
  setRefreshToken: () => {},
  setNickname: () => {},
  setLevel: () => {},
  setRenderJoinStatus: () => {},
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
  const [renderJoinStatus, setRenderJoinStatus] = useState(false);

  useEffect(() => {
    if (!token) return;
    (async () => {
      try {
        const res = await getMember();
        const data = await res.json();

        setLevel({
          exp: data.exp,
          successCnt: data.successCnt,
          num: data.level.levelNum,
          name: data.level.name,
          badge: data.level.badge,
          expPercent: data.level.expPercent,
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
        renderJoinStatus,
        setRenderJoinStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
