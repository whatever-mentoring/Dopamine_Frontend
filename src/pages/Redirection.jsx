import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/jwt';
import { UserContext } from '../context/UserContext';
import { getMember } from '../api/member';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 이상한코드가한가득
  const { setToken, setRefreshToken, setNickname, setLevel } =
    useContext(UserContext);

  const setLevelData = async () => {
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
  };

  useEffect(() => {
    (async () => {
      const res = await login(code);
      console.log(res);
      if (res.status !== 201) return;

      const json = await res.json();
      console.log(json.member.kakaoId, json.token.refreshToken);
      localStorage.setItem('kakaoId', json.member.kakaoId);
      localStorage.setItem('nickname', json.member.nickname);
      localStorage.setItem('memberId', json.member.memberId);
      localStorage.setItem('accessToken', json.token.accessToken);
      localStorage.setItem('refreshToken', json.token.refreshToken);

      setToken(json.token.accessToken);
      setRefreshToken(json.token.refreshToken);
      setNickname(json.member.nickname);
      setLevelData();

      if (json.member.nickname === null) {
        navigate('/join');
      } else {
        navigate('/home');
      }
    })();
  }, []);

  return <></>;
};

export default Redirection;
