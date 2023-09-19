import BottomModal from './BottomModal';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ChallengeContext } from '../../../context/ChallengeContext';

const ProofModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const { setImgList } = useContext(ChallengeContext);

  const setImg = (e) => {
    const files = [...e.target.files];

    if (files.length > 3) {
      alert('이미지는 최대 3장까지 선택할 수 있습니다.');
      return;
    }

    for (const file of files) {
      if (!/^image\/(jpg|gif|png|jpeg|bmp|tif|heic)$/.test(file.type)) {
        alert(
          '이미지 파일 확장자는 jpg, gif, png, jpeg, bmp, tif, heic만 가능합니다.'
        );
        return;
      }
    }

    setImgList(files);

    navigate('/mission');
    setIsModalOpen(false);
  };

  const setPermission = () => {
    if (!window.ReactNativeWebView) {
      return;
    }
    window.ReactNativeWebView.postMessage('check permission');
  };
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data === 'false') {
        alert('카메라/갤러리 권한을 허용해주세요.');
      }
    };
    // ios
    // window.addEventListener('message', handleMessage);
    // android
    document.addEventListener('message', handleMessage);
    return () => {
      // window.removeEventListener('message', handleMessage);
      document.removeEventListener('message', handleMessage);
    };
  }, []);

  const handleBtn = (e) => {
    setPermission();
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
          onChange={setImg}
          onClick={(e) => e.stopPropagation()}
        />
      </button>
      <button onClick={handleBtn}>
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
