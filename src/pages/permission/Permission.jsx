import CloseTopBar from '../../components/common/TopBar/CloseTopBar';
import StyledMain from './StyledMain';
import ButtonWrap from '../../components/common/ButtonWrap';
import { LButton } from '../../components/common/Buttons';
import { useNavigate } from 'react-router-dom';

const Permission = () => {
  const navigate = useNavigate();

  return (
    <>
      <CloseTopBar></CloseTopBar>
      <StyledMain>
        <h1>확인해주세요!</h1>
        <section className="guide-section">
          <p>
            인증이 안 된다면 아래의 경로로 직접 들어가서 권한을 허용해주세요.
          </p>
          <div>
            <ol>
              <li>
                1. 핸드폰 내 성정 앱 찾고
                <br />
                설정 - 애플리케이션 - ChallenG9 - 권한
                <br />
                <br />
              </li>
              <li>
                2. 인증에 필요한 권한 허용하기
                <br />
                '사진 및 동영상', '카메라' 권한 <strong>둘 다 허용</strong>
              </li>
            </ol>
          </div>
        </section>
        <section className="gray-section">
          <p>
            &#128140;
            <br />
            안녕하세요. 챌린지구 개발팀입니다.
            <br />
            권한 추가기능은 현재 개발중으로,
            <br />
            베타 테스트 이후에 추가될 예정입니다.
            <br />
            더 좋은 서비스를 위해 노력하겠습니다.
            <br />
            많이 사용해주시고 많이 혼내주세요
          </p>
        </section>
      </StyledMain>
      <ButtonWrap>
        <LButton
          onClick={() => {
            navigate(-1);
          }}
        >
          확인했어요
        </LButton>
      </ButtonWrap>
    </>
  );
};

export default Permission;
