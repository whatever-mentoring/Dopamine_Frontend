import BottomModal from '../../components/common/modal/BottomModal';

const SortModal = ({ setIsModalOpen, setSortOpt }) => {
  const handleBtn = (e) => {
    setSortOpt(e.target.textContent);
    setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 순서로 정렬할까요?</p>
      <button onClick={handleBtn}>최신순</button>
      <button onClick={handleBtn}>좋아요순</button>
    </BottomModal>
  );
};

export default SortModal;
