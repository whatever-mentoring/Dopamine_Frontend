import BottomModal from './BottomModal';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChallengeContext } from '../../../context/ChallengeContext';

const ProofModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const { setImgList } = useContext(ChallengeContext);

  const setImg = (e) => {
    const files = e.target.files;

    if (files.length > 3) {
      alert('이미지는 최대 3장까지 선택할 수 있습니다.');
      return;
    }

    for (const file of files) {
      if (!/^image\/(jpg|png|jpeg|heic)$/.test(file.type)) {
        alert('이미지 파일 확장자는 jpg, png, jpeg, heic만 가능합니다.');
        return;
      }

      if (file.size > 20 * 1024 * 1024) {
        alert('이미지 용량은 20MB 이내로 등록 가능합니다.');
        return;
      }
    }

    setImgList(e.target.files);

    navigate('/mission');
    setIsModalOpen(false);
  };

  const handleBtn = (e) => {
    e.currentTarget.children[0].click();
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 방법으로 인증해볼까요?</p>
      <Link to="/permission">인증이 안돼요</Link>
      <button onClick={handleBtn} className="default">
        촬영하기
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="a11y-hidden"
          onChange={setImg}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      <button onClick={handleBtn} className="default">
        갤러리에서 선택하기
        <input
          type="file"
          accept="image/*"
          multiple
          className="a11y-hidden"
          onChange={setImg}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </button>
    </BottomModal>
  );
};

export default ProofModal;
