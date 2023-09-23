import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/common/modal/Modal';
import xIcon from '../../../assets/icons/x-gray.svg';
import { SButton, SWhiteButton } from '../../../components/common/Buttons';
import { deleteMember } from '../../../api/member';

const DeleteMemberModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleDeleteMember = async () => {
    try {
      const res = await deleteMember();

      if (res.status === 200) {
        localStorage.clear();
        navigate('/');
      } else {
        alert('회원 탈퇴에 실패했어요.');
      }
    } catch (error) {
      alert('회원 탈퇴에 실패했어요.');
      console.error(error);
    }
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <strong>서비스를 탈퇴할까요?</strong>
      <p>
        탈퇴 시 모든 인증 기록이 삭제되고
        <br />
        기록은 복구가 어려워요.
      </p>
      <div className="btn-wrap">
        <SWhiteButton onClick={handleDeleteMember}>탈퇴하기</SWhiteButton>
        <SButton onClick={() => setIsModalOpen(false)}>유지하기</SButton>
      </div>
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>
        <img src={xIcon} alt="닫기" />
      </button>
    </Modal>
  );
};

export default DeleteMemberModal;
