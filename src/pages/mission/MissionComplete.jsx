import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LButton } from '../../components/common/Buttons';
import StyledMissionComplete, { StyledFooter } from './StyledMissionComplete';
import waterIcon from '../../assets/images/water.png';
import successIcon from '../../assets/icons/success-true.svg';

function MissionComplete() {
  const navigate = useNavigate();

  return (
    <>
      <StyledMissionComplete $waterIcon={waterIcon} $successIcon={successIcon}>
        <strong>인증완료!</strong>
        <p>
          챌린지 피드에 정상적으로 업로드 됐어요.
          <br />
          다음 챌린지도 함께 도전해요!
        </p>
        <span>최고 최고~</span>
      </StyledMissionComplete>
      <StyledFooter>
        <LButton onClick={() => navigate('/')}>홈으로 돌아가기</LButton>
      </StyledFooter>
    </>
  );
}

export default MissionComplete;
