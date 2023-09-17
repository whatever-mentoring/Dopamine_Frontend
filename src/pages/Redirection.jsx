import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 이상한코드가한가득

  useEffect(() => {
    fetch(
      `http://54.180.66.83:9000/api/auth/login?code=${code}&redirect_url=http://localhost:5173/kakao/callback`
    ).then(async (res) => {
        const json = await res.json();
        localStorage.setItem('accessToken', json.token.accessToken);
        localStorage.setItem('refreshToken', json.token.refreshToken);
        if (json.member.nickname === null) {
          navigate('/join');
        } else {
          navigate('/home');
        }
    });
  }, []);

  return <div></div>;
};

export default Redirection;