import splashImg from '../../assets/images/splash.png';
import logo from '../../assets/images/logo.png';
import kakaoText from '../../assets/images/kakao-text.png';
import kakaoLogo from '../../assets/icons/kakao-logo.svg';

import StyledMain from './StyledMain';

const Splash = () => {
  const REST_API_KEY = 'b4a4174bcbedb68d9c7adb60c5ee2477';
  const REDIRECT_URI = 'http://localhost:5173/kakao/callback';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
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
      <button onClick={loginHandler}>
        <img src={kakaoText} alt="카카오 로그인" />
      </button>
    </StyledMain>
  );
};

export default Splash;
