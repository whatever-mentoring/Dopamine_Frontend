import { Link } from 'react-router-dom';
import StyledSetting from './StyledSetting';
import BasicTopBar from '../../../components/common/TobBar/BasicTopBar';

const Setting = () => {
  return (
    <>
      <BasicTopBar tit="설정" />
      <StyledSetting>
        <ul>
          <li>
            <Link onClick={() => alert('준비중인 서비스입니다:)')} to="setting">
              닉네임 변경
            </Link>
          </li>
          <li>
            <button onClick={() => alert('준비중인 서비스입니다:)')}>
              서비스 이용약관
            </button>
          </li>
          <li>
            <button onClick={() => alert('준비중인 서비스입니다:)')}>
              로그아웃
            </button>
          </li>
          <li>
            <button onClick={() => alert('준비중인 서비스입니다:)')}>
              서비스 탈퇴
            </button>
          </li>
        </ul>
      </StyledSetting>
    </>
  );
};

export default Setting;
