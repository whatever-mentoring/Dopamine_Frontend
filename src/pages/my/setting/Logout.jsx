import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/common/modal/Modal';
import xIcon from '../../../assets/icons/x-gray.svg';
import { SButton, SWhiteButton } from '../../../components/common/Buttons';
import { logout } from '../../../api/jwt';

const LogoutModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logout();

      if (res.status === 200) {
        localStorage.clear();
        navigate('/');
      } else {
        alert('로그아웃에 실패했어요.');
      }
    } catch (error) {
      alert('로그아웃에 실패했어요.');
      console.error(error);
    }
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <strong>로그아웃 할까요?</strong>
      <p>
        현재 계정이 로그아웃되고
        <br />
        로그인 화면으로 돌아가요.
      </p>
      <div className="btn-wrap">
        <SWhiteButton onClick={handleLogout}>로그아웃하기</SWhiteButton>
        <SButton onClick={() => setIsModalOpen(false)}>유지하기</SButton>
      </div>
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>
        <img src={xIcon} alt="닫기" />
      </button>
    </Modal>
  );
};

export default LogoutModal;
