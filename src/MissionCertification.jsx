import React, { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import './MissionCertification.css';

function MissionPage() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [impression, setImpression] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUpload = (event) => {
    const files = event.target.files;

    if (files.length + selectedImages.length > 10) {
      setErrorMessage('이미지는 최대 10장까지 선택할 수 있습니다.');
      return;
    }

    const newImages = [...selectedImages];

    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }

    setSelectedImages(newImages);
    setErrorMessage('');
  };

  const handleImpressionChange = (event) => {
    const text = event.target.value;

    if (text.length <= 100) {
      setImpression(text);
      setErrorMessage('');
    } else {
      setErrorMessage('100자 이내로 입력해주세요.');
    }
  };

  const handleDeleteImage = (indexToDelete) => {
    // 선택된 이미지 배열에서 해당 인덱스의 이미지 삭제.
    const updatedImages = [...selectedImages];
    updatedImages.splice(indexToDelete, 1);
  
    // 이미지 배열을 업데이트.
    setSelectedImages(updatedImages);
  };
  

  return (
    <div>
      <div className='ms-box1'>
      <div className="mission-feedback-title2">
    인증사진
    <span className="optional-text2">다시 선택</span>
      </div>
      <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      <div className="image-preview">
  {selectedImages.map((image, index) => (
    <div key={index} className="image-container">
      <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} />
      <button className="delete-button" onClick={() => handleDeleteImage(index)}>X</button>
    </div>
  ))}
</div></div>

      <div className='ms-box1'>
      <div className="mission-feedback-title">
    이번 미션은 어땠나요?
    <span className="optional-text">(선택)</span>
      </div>
      <textarea
  className="ms-txtarea"
  placeholder="오늘의 미션을 수행한 후 느낀 소감을 간단히 공유해주세요:)"
  value={impression}
  onChange={handleImpressionChange}
></textarea>
<div className="character-count">
  <span style={{ color: 'green' }}>{impression.length}</span> / 100
</div>
{errorMessage && <div className="error-message">{errorMessage}</div>}
</div>

      <div className='ms-box2'>
      <div className="note1">
        참고해주세요!
      </div>
      <div className="note2">인증사진이 미션과 무관할 시 운영진에 의해 인증이 반려될 수 있어요.</div>
    </div>
    </div>
  );
}

function MissionCertification() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    // 화면을 닫는 로직 부분(지금은 Link사용해서 필요없음.)
  };

  return (
    <div>
      <header className="mission-header">
        <div className="mission-header-content">
          <button className="icon-button" onClick={handleGoBack}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="ms-txt">미션인증</div>
        <Link to="/">
          <button className="icon-button" onClick={handleClose}>
            <FaTimes />
          </button>
        </Link>
      </header>
      <MissionPage />
      <footer className="bottom-bar">
        <button className="upload-button">챌린지피드에 업로드하기</button>
      </footer>
    </div>
  );
}

export default MissionCertification;
