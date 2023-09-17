import { useNavigate } from 'react-router-dom';
import StyledSetting from './StyledSetting';
import BasicTopBar from '../../../components/common/TobBar/BasicTopBar';
import { logout } from '../../../api/jwt';
import { deleteMember } from '../../../api/member';

const Setting = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout();

    if (res.status === 200) {
      navigate('/');
    } else {
      alert('로그아웃에 실패했어요.');
    }
  };

  const handleDeleteMember = async () => {
    const res = await deleteMember();

    if (res.status === 200) {
      navigate('/');
    } else {
      alert('회원탈퇴에 실패했어요.');
    }
  };

  return (
    <>
      <BasicTopBar tit="설정" />
      <StyledSetting>
        <ul>
          <li>
            <button onClick={() => navigate('/nickname')}>닉네임 변경</button>
          </li>
          <li>
            <button onClick={() => alert('준비중인 서비스입니다:)')}>
              서비스 이용약관
            </button>
          </li>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
          <li>
            <button onClick={handleDeleteMember}>서비스 탈퇴</button>
          </li>
        </ul>
      </StyledSetting>
    </>
  );
};

export default Setting;
