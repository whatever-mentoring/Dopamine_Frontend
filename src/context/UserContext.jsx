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
  setLevelData: async () => {},
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

  const setLevelData = async () => {
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
  };

  useEffect(() => {
    if (!token) return;

    (async () => {
      await setLevelData();
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
        setLevelData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
