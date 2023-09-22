import StyledMain from './StyledMain';
import { policy, privacy } from './text';
import CloseTopBar from '../../components/common/TopBar/CloseTopBar';

const Policy = () => {
  return (
    <>
      <CloseTopBar tit="서비스 이용약관" />
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
