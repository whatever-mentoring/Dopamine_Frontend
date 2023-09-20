import splashImg from '../../assets/images/splash.png';
import logo from '../../assets/images/logo.png';
import kakaoText from '../../assets/images/kakao-text.png';
import kakaoLogo from '../../assets/icons/kakao-logo.svg';
import StyledMain from './StyledMain';

const Splash = () => {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;
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
