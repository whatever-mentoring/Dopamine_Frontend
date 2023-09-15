import { useNavigate } from 'react-router-dom';

import splashImg from '../../assets/images/splash.png';
import logo from '../../assets/images/logo.png';
import kakaoText from '../../assets/images/kakao-text.png';
import kakaoLogo from '../../assets/icons/kakao-logo.svg';

import StyledMain from './StyledMain';
import KakaoLogin from 'react-kakao-login';

const Splash = () => {
  const navigate = useNavigate();
  const JAVASCRIPT_KEY = '3279180480e185af92777a80e48e9e9d';

  // const getAccessToken = async () => {
  //   const res = await fetch('https://kauth.kakao.com/oauth/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       grant_type: 'refresh_token',
  //       client_id: 'b4a4174bcbedb68d9c7adb60c5ee2477',
  //       refresh_token:
  //         'Fl4ZIzQ_nExRU2eiUNIkMvraUIMOrFi77BqFY7OQCinJXgAAAYqW77RX',
  //         client_secret: '',
  //     }),
  //   });
  //   console.log(res);
  // };
  // getAccessToken();

  const login = async (data) => {
    const res = await fetch(
      `http://54.180.66.83:9000/api/auth/login?token=${data.response.access_token}`
    );
    const jsonData = await res.json();
    localStorage.setItem('accessToken', jsonData.token.accessToken);
    localStorage.setItem('refreshToken', jsonData.token.refreshToken);
    if (jsonData.member.nickname === null) {
      // navigate('/join');
      // join 페이지가 없어서 임시로 홈
      navigate('/home');
    } else {
      navigate('/home');
    }
  };

  return (
    <StyledMain $kakaoLogo={kakaoLogo}>
      <div>
        <img src={splashImg} alt="" />
        <span>가장 작은 환경지킴이</span>
        <h1>
          <img src={logo} alt="challenG9 로고" />
        </h1>
      </div>
      <KakaoLogin
        token={JAVASCRIPT_KEY}
        style={{}}
        onSuccess={login}
        onFail={(err) => {
          console.log(err);
        }}
      >
        <img src={kakaoText} alt="카카오 로그인" />
      </KakaoLogin>
    </StyledMain>
  );
};

export default Splash;
