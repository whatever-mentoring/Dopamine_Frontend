import BottomModal from './BottomModal';

const ReportModal = ({ setIsModalOpen }) => {
  const handleBtn = (e) => {
    alert('gimkin5318@gmail.com으로 신고 메일을 보내주세요.');
    setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <button onClick={handleBtn}>신고하기</button>
    </BottomModal>
  );
};

export default ReportModal;
