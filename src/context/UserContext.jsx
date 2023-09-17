import { createContext, useEffect, useState } from 'react';
import { getMember } from '../api/member';

export const UserContext = createContext({
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  kakaoId: localStorage.getItem('kakaoId') || null,
  level: [],
  setToken: () => {},
  setRefreshToken: () => {},
  setNickname: () => {},
  setKakaoId: () => {},
  setLevel: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem('refreshToken') || null
  );
  const [nickname, setNickname] = useState(
    localStorage.getItem('nickname') || null
  );
  const [kakaoId, setKakaoId] = useState(
    localStorage.getItem('kakaoId') || null
  );
  const [level, setLevel] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMember();
        const data = await res.json();

        setLevel({
          exp: data.exp,
          successCnt: data.successCnt,
          level: data.level.levelNum,
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
        kakaoId,
        setKakaoId,
        level,
        setLevel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
