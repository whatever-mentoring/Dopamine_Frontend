import { useNavigate } from 'react-router-dom';
import Modal from '../../components/common/modal/Modal';
import xIcon from '../../assets/icons/x-gray.svg';
import { SButton, SWhiteButton } from '../../components/common/Buttons';

const MissionModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <strong>인증을 중단할까요?</strong>
      <p>
        작성하고 계시던 내용이 모두 삭제되고
        <br />
        이전 화면으로 돌아가요.
      </p>
      <div className="btn-wrap">
        <SWhiteButton onClick={() => navigate(-1)}>중단하기</SWhiteButton>
        <SButton onClick={() => setIsModalOpen(false)}>계속 작성하기</SButton>
      </div>
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>
        <img src={xIcon} alt="닫기" />
      </button>
    </Modal>
  );
};

export default MissionModal;
