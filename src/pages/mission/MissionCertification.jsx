import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChallengeContext } from '../../context/ChallengeContext';
import StyledMission, { StyledFooter } from './MissionCertification';
import MissionModal from './MissionModal';
import { LButton } from '../../components/common/Buttons';
import ProofModal from '../../components/common/modal/ProofModal';
import xCircleIcon from '../../assets/icons/x-circle.svg';
import { postFeed } from '../../api/feed';
import { UserContext } from '../../context/UserContext';
import { StatusContext } from '../../context/StatusContext';
import BasicTopBar from '../../components/common/TopBar/BasicTopBar';

function MissionCertification() {
  const { imgList, challengeList, selectedChallengeIndex, setChallengeData } =
    useContext(ChallengeContext);
  const { setRenderChallengeStatus } = useContext(StatusContext);
  const { setLevelData } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [impression, setImpression] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [deletedImgIndexList, setDeletedImgIndexList] = useState([]);
  const challenge = challengeList[selectedChallengeIndex];

  useEffect(() => {
    if (isModalOpen) return;
    const imageList = [];
    [...imgList].forEach((file, i) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', ({ target }) => {
        const image = new Image();
        image.src = target.result;
        imageList.push(target.result);
        if (i === imgList.length - 1) {
          setSelectedImages(imageList);
        }
      });
    });
  }, [isModalOpen]);

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
    const newList = [...deletedImgIndexList];
    newList.push(indexToDelete);
    setDeletedImgIndexList(newList);
  };

  const handleClose = () => {
    setShowPopup(true); // x 버튼 클릭 시 팝업을 열기(true)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedImages.length === 0) {
      alert('이미지를 선택해주세요.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append(
        'request',
        new Blob(
          [
            JSON.stringify({
              challengeId: challenge.challengeId,
              content: impression,
            }),
          ],
          { type: 'application/json' }
        )
      );

      for (let i = 0; i < imgList.length; i++) {
        if (!deletedImgIndexList.includes(i)) {
          formData.append('images', imgList[i]);
        }
      }

      const res = await postFeed(formData);
      if (res.status !== 200 && res.status !== 201) {
        setRenderChallengeStatus(true);
        navigate('/home');
        return;
      }
      await setChallengeData();
      await setLevelData();

      navigate('/mission/success');
    } catch (error) {
      setRenderChallengeStatus(true);
      navigate('/home');
    }
  };

  return (
    <>
      <BasicTopBar
        tit="챌린지 인증"
        handleBack={handleClose}
        handleClose={handleClose}
      />

      <StyledMission>
        <div className="level">
          난이도{' '}
          {challenge.challengeLevel === 'HIGH'
            ? '상'
            : challenge.challengeLevel === 'MID'
            ? '중'
            : '하'}
        </div>
        <strong className="challenge-title">{challenge.title}</strong>
        <div className="img-wrap">
          <div className="mission-feedback-title2">
            인증사진
            <button onClick={() => setIsModalOpen(true)}>다시 선택</button>
          </div>
          {isModalOpen ? <ProofModal setIsModalOpen={setIsModalOpen} /> : null}
          <Swiper
            className="image-preview"
            spaceBetween={6}
            slidesPerView={2.63}
          >
            {selectedImages.length > 0
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

      <StyledFooter className="bottom-bar">
        <LButton onClick={handleSubmit}>인증하기</LButton>
      </StyledFooter>
      {showPopup && <MissionModal setIsModalOpen={setShowPopup} />}
    </>
  );
}

export default MissionCertification;
