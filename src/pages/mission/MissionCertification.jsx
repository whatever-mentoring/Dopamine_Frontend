import { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChallengeContext } from '../../context/ChallengeContext';
import StyledMission, { StyledFooter } from './MissionCertification';
import MissionModal from './MissionModal';
import { LButton } from '../../components/common/Buttons';
import CloseTopBar from '../../components/common/TopBar/CloseTopBar';
import xCircleIcon from '../../assets/icons/x-circle.svg';

function MissionPage() {
  const { setImgList, imgList } = useContext(ChallengeContext);
  const [selectedImages, setSelectedImages] = useState([]);
  const [impression, setImpression] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const srcList = [];
    imgList.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', ({ target }) => {
        const image = new Image();
        image.src = target.result;
        srcList.push(target.result);
        setSelectedImages(srcList);
      });
    });
  }, []);

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
    <StyledMission>
      <div className="level">난이도 하</div>
      <strong className="challenge-title">텀블러 갖고 다니기 챌린지</strong>
      <div className="img-wrap">
        <div className="mission-feedback-title2">
          인증사진
          <span className="optional-text2">다시 선택</span>
        </div>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <Swiper className="image-preview" spaceBetween={6} slidesPerView={2.63}>
          {!!selectedImages.length
            ? selectedImages.map((image, index) => {
                return (
                  <SwiperSlide key={index} className="swiper-item">
                    <img src={image} alt={`Image ${index + 1}`} />
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteImage(index)}
                    >
                      <img src={xCircleIcon} alt="삭제하기" />
                    </button>
                  </SwiperSlide>
                );
              })
            : null}
        </Swiper>
      </div>

      <div className="txt-wrap">
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
          <span>{impression.length}</span> / 100
        </div>
        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
      </div>

      <div className="ms-box2">
        <div className="note1">참고해주세요!</div>
        <div>
          인증사진이 미션과 무관할 시 운영진에 의해 인증이 반려될 수 있어요.
        </div>
      </div>
    </StyledMission>
  );
}

function MissionCertification() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(true); // x 버튼 클릭 시 팝업을 열기(true)
  };

  return (
    <>
      <CloseTopBar
        tit="인증하기"
        handleBack={handleClose}
        handleClose={handleClose}
      />

      <MissionPage />
      <StyledFooter className="bottom-bar">
        <LButton>인증하기</LButton>
      </StyledFooter>
      {/* 팝업 창 */}
      {showPopup && <MissionModal setIsModalOpen={setShowPopup} />}
    </>
  );
}

export default MissionCertification;
