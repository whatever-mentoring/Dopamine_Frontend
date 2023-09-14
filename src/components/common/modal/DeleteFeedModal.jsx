import BottomModal from './BottomModal';

const DeleteFeedModal = ({ setIsModalOpen, feedId }) => {
  const handleBtn = (e) => {
    // 삭제 API

    setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <button onClick={handleBtn}>삭제하기</button>
    </BottomModal>
  );
};

export default DeleteFeedModal;
