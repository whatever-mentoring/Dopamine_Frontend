import BottomModal from './BottomModal';
import { deleteFeed } from '../../../api/feed';

const DeleteFeedModal = ({ setIsModalOpen, feedId }) => {
  const handleBtn = async () => {
    try {
      await deleteFeed(feedId);
      location.reload();
    } catch (error) {
      console.error(error);
      alert('인증글 삭제에 실패했습니다.');
    }
    setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <button onClick={handleBtn}>삭제하기</button>
    </BottomModal>
  );
};

export default DeleteFeedModal;
