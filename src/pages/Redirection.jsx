import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirection = () => {
  const code = new URL(window.location.href).searchParams.get('code'); // 이상한코드가한가득

  useEffect(() => {
    fetch(
      `http://54.180.66.83:9000/api/auth/login?code=${code}&redirect-url=http://localhost:5173/kakao/callback`
    ).then((res) => {
      console.log(res);
    });
  }, []);

  return <div></div>;
};

export default Redirection;
