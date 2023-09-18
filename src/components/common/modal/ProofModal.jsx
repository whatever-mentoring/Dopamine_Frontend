import BottomModal from './BottomModal';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ChallengeContext } from '../../../context/ChallengeContext';

const ProofModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const { setImgList } = useContext(ChallengeContext);

  const setImg = (e) => {
    const files = [...e.target.files];
    for (const file of files) {
      if (!/^image\/(jpg|gif|png|jpeg|bmp|tif|heic)$/.test(file.type)) {
        alert(
          '이미지 파일 확장자는 jpg, gif, png, jpeg, bmp, tif, heic만 가능합니다.'
        );
        return;
      }
    }

    setImgList(files);
  };

  const handleBtn = (e) => {
    e.currentTarget.children[0].click();
    // setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 방법으로 인증해볼까요?</p>
      <button onClick={handleBtn}>
        촬영하기
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="a11y-hidden"
        />
      </button>
      <button onClick={handleBtn}>
        갤러리에서 선택하기
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          multiple
          className="a11y-hidden"
          onChange={(e) => {
            navigate('/mission');
            setImg(e);
          }}
        />
      </button>
    </BottomModal>
  );
};

export default ProofModal;
