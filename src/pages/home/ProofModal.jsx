import { useEffect } from 'react';
import BottomModal from '../../components/common/modal/BottomModal';
import { useNavigate } from 'react-router-dom';

const ProofModal = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const setImg = (e) => {
    const file = e.target.files[0];
    if (!/^image\/(jpg|gif|png|jpeg|bmp|tif|heic)$/.test(file.type)) {
      alert(
        '이미지 파일 확장자는 jpg, gif, png, jpeg, bmp, tif, heic만 가능합니다.'
      );
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    console.log(file);

    reader.addEventListener('load', ({ target }) => {
      const image = new Image();
      image.src = target.result;
      image.addEventListener('load', (e) => {
        console.log(target.result);
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('test', 'test1');
    alert(localStorage.getItem('test'));
  }, []);

  return (
    <BottomModal setIsModalOpen={setIsModalOpen}>
      <p>어떤 방법으로 인증해볼까요?</p>
      <button onClick={(e) => e.target.children[0].click()}>
        촬영하기
        <input
          type="file"
          accept="image/*"
          capture="camera"
          className="a11y-hidden"
        />
      </button>
      <button onClick={(e) => e.target.children[0].click()}>
        갤러리에서 선택하기
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          multiple
          className="a11y-hidden"
          onChange={(e) => {
            navigate('/misson');
            setImg(e);
          }}
        />
      </button>
    </BottomModal>
  );
};

export default ProofModal;
