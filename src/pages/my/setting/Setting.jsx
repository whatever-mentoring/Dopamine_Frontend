import { useNavigate } from 'react-router-dom';
import StyledSetting from './StyledSetting';
import BasicTopBar from '../../../components/common/TopBar/BasicTopBar';
import LogoutModal from './Logout';
import DeleteMemberModal from './DeleteMemberModal';
import { useState } from 'react';

const Setting = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isDeleteMemberModalOpen, setIsDeleteMemberModalOpen] = useState(false);

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
            <button onClick={() => setIsLogoutModalOpen(true)}>로그아웃</button>
            {isLogoutModalOpen && (
              <LogoutModal setIsModalOpen={setIsLogoutModalOpen} />
            )}
          </li>
          <li>
            <button onClick={() => setIsDeleteMemberModalOpen(true)}>
              서비스 탈퇴
            </button>
            {isDeleteMemberModalOpen && (
              <DeleteMemberModal setIsModalOpen={setIsDeleteMemberModalOpen} />
            )}
          </li>
        </ul>
      </StyledSetting>
    </>
  );
};

export default Setting;
