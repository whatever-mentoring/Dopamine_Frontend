import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/jwt';
import { UserContext } from '../context/UserContext';
import { ChallengeContext } from '../context/ChallengeContext';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const { setToken, setRefreshToken, setNickname, setLevelData } =
    useContext(UserContext);
  const { setChallengeData } = useContext(ChallengeContext);

  useEffect(() => {
    (async () => {
      const res = await login(code);
      console.log(res);
      if (res.status !== 201) return;

      const json = await res.json();
      localStorage.setItem('kakaoId', json.member.kakaoId);
      localStorage.setItem('memberId', json.member.memberId);
      localStorage.setItem('accessToken', json.token.accessToken);
      localStorage.setItem('refreshToken', json.token.refreshToken);

      setToken(json.token.accessToken);
      setRefreshToken(json.token.refreshToken);
      await setLevelData();
      await setChallengeData();

      if (json.member.nickname === null) {
        navigate('/join');
      } else {
        localStorage.setItem('nickname', json.member.nickname);
        setNickname(json.member.nickname);
        navigate('/home');
      }
    })();
  }, []);
};

export default Redirection;
