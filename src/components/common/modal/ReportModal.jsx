import BottomModal from './BottomModal';

const ReportModal = ({ setIsModalOpen, FeedId }) => {
  const handleBtn = (e) => {
    // 신고 API

    setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <button onClick={handleBtn}>신고하기</button>
    </BottomModal>
  );
};

export default ReportModal;
