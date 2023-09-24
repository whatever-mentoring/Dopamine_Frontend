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
      if (!/^image\/(jpg|png|jpeg|heic)$/.test(file.type)) {
        alert('이미지 파일 확장자는 jpg, png, jpeg, heic만 가능합니다.');
        return;
      }
    }

    setImgList(e.target.files);

    navigate('/mission');
    setIsModalOpen(false);
  };

  const checkPermission = (message) => {
    if (!window.ReactNativeWebView) {
      return;
    }
    window.ReactNativeWebView.postMessage(message);
  };
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data !== '') {
        alert(e.data);
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

  const handleCameraBtn = (e) => {
    checkPermission('camera permission');
    e.currentTarget.children[0].click();
    // setIsModalOpen(false);
  };

  const handleImgBtn = (e) => {
    checkPermission('images permission');
    e.currentTarget.children[0].click();
    // setIsModalOpen(false);
  };

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 방법으로 인증해볼까요?</p>
      <button onClick={handleCameraBtn}>
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
      <button onClick={handleImgBtn}>
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
