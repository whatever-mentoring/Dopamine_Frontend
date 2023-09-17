import { createContext, useState } from 'react';

export const UserContext = createContext({
  token: localStorage.getItem('token') || null,
  refreshToken: localStorage.getItem('refreshToken') || null,
  nickname: localStorage.getItem('nickname') || null,
  kakaoId: localStorage.getItem('kakaoId') || null,
  setToken: () => {},
  setRefreshToken: () => {},
  setNickname: () => {},
  setKakaoId: () => {},
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
