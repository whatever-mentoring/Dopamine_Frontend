import BottomModal from '../../components/common/modal/BottomModal';

const ProofModal = ({ setIsModalOpen }) => {
  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 방법으로 인증해볼까요?</p>
      <button>촬영하기</button>
      <button>갤러리에서 선택하기</button>
    </BottomModal>
  );
};

export default ProofModal;
