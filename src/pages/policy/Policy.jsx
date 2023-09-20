import StyledMain from './StyledMain';
import { policy, privacy } from './text';
import StyledCloseTopBar from '../../components/common/TopBar/StyledCloseTopBar';
import xIcon from '../../assets/icons/x.svg';
import { useNavigate } from 'react-router-dom';

const Policy = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledCloseTopBar>
        <h1>서비스 이용약관</h1>
        <button className="close" onClick={() => navigate(-1)}>
          <img src={xIcon} alt="닫기" />
        </button>
      </StyledCloseTopBar>
      <StyledMain>
        <section>
          <h2>챌린지구 이용약관</h2>
          <p>{policy}</p>
        </section>
        <section>
          <h2>개인정보 처리방침</h2>
          <p>{privacy}</p>
        </section>
      </StyledMain>
    </>
  );
};

export default Policy;
