import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/jwt';
import { UserContext } from '../context/UserContext';
import { getMember } from '../api/member';
import { ChallengeContext } from '../context/ChallengeContext';
import { getTodayChallenge } from '../api/challenge';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const { setToken, setRefreshToken, setNickname, setLevel } =
    useContext(UserContext);
  const { setChallengeList, setChallengeDate } = useContext(ChallengeContext);

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
  const setChallengeData = async () => {
    try {
      const res = await getTodayChallenge();
      const json = await res.json();
      setChallengeList(json);
      setChallengeDate(new Date().getDate());
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
      localStorage.setItem('kakaoId', json.member.kakaoId);
      localStorage.setItem('nickname', json.member.nickname);
      localStorage.setItem('memberId', json.member.memberId);
      localStorage.setItem('accessToken', json.token.accessToken);
      localStorage.setItem('refreshToken', json.token.refreshToken);

      setToken(json.token.accessToken);
      setRefreshToken(json.token.refreshToken);
      setNickname(json.member.nickname);
      await setLevelData();
      await setChallengeData();

      if (json.member.nickname === null) {
        navigate('/join');
      } else {
        navigate('/home');
      }
    })();
  }, []);
};

export default Redirection;
