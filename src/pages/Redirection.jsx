import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/jwt';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 이상한코드가한가득

  useEffect(() => {
    (async () => {
      try {
        const res = await login(code);
        const json = await res.json();

        localStorage.setItem('kakaoId', json.member.kakaoId);
        localStorage.setItem('nickname', json.member.nickname);
        localStorage.setItem('memberId', json.member.memberId);
        localStorage.setItem('accessToken', json.token.accessToken);
        localStorage.setItem('refreshToken', json.token.refreshToken);

        if (json.member.nickname === null) {
          navigate('/join');
        } else {
          navigate('/home');
        }
      } catch (error) {
        alert('로그인에 실패했어요.');
        console.error(error);
      }
    })();
  }, []);

  return <></>;
};

export default Redirection;
