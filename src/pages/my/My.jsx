import React from 'react';
import TabBar from '../../components/common/TabBar/TabBar';
import styled from 'styled-components';
import uploadIcon from '../../assets/icons/gear.svg';


const Name = styled.h2`
  font-family: SUITE;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -2%;
  position: absolute;
  top: 76px;
  left: 14px;
`;

const Container = styled.div`
  position: relative;
`;

const CircleIcon = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 138px;
  left: 16px;
  background-color: #D9D9D9;
  border-radius: 50%;
`;

const Description = styled.p`
  font-family: SUITE;
  font-weight: 500;
  font-size: 14px;
  color: gray;
  line-height: 21px;
  letter-spacing: -2%;
  position: absolute;
  top: 136px;
  left: 80px;
`;

const NewTextBox = styled.p`
  font-family: SUITE;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #222523;
  position: absolute;
  top: 159px;
  left: 80px;
`;

const GaugeBarContainer = styled.div`
  width: 328px;
  height: 10px;
  position: absolute;
  top: 213px;
  left: 16px;
  border-radius: 30px;
  background-color: #D9D9D9;
  max-width: 360px;
`;

const GaugeFiller = styled.div`
  width: ${(props) => props.fillPercentage}%;
  height: 100%;
  background-color: #02b550;
  border-radius: 30px;
  max-width: 360px;
`;

const LevelText = styled.p`
  font-family: SUITE;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  position: absolute;
  top: 239px;
  left: 17px;
  display: flex;
  gap: 4px;
  align-items: center;
  color: gray;
`;

const TextBox = styled.p`
  font-family: SUITE;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #6C7470;
  position: absolute;
  top: 239px;
  left: 206px;
  width: 63px;
  height: 21px;
  gap: 4px;
`;

const Exp = styled.p`
  font-family: SUITE;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #6C7470;
  position: absolute;
  top: 239px;
  left: 281px;
  width: 63px;
  height: 21px;
  gap: 4px;
`;

const RectangleBar = styled.div`
  width: 358px;
  height: 10px;
  position: absolute;
  top: 292px;
  left: 16px;
  background-color: #EFF0F0;
  max-width: 360px;
`;

const UploadIcon = styled.img`
  position: absolute;
  top: 79px;
  left: 320px;
  width: 24px;
  height: 24px;
  z-index: 1;
`;

const Cert = styled.h2`
  font-family: SUITE;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -2%;
  position: absolute;
  top: 326px;
  left: 21px;
`;


function MyProfile() {
  const level = 2;
  const completionCount = 6;

  function calculateExperience(level, completionCount) {
    return level * 100 + completionCount * 10;
  }

  return (
    <div className="root">
      <Container>
        <CircleIcon />
        <Name>내 정보</Name>
        <Description>새싹지킴이 도파민님</Description>
        <NewTextBox>잘하고 계시는 군요!</NewTextBox>
        <GaugeBarContainer>
          <GaugeFiller fillPercentage={70} />
        </GaugeBarContainer>
        <TextBox>완료 횟수</TextBox>
        <Exp>내 경험치</Exp>
        <LevelText>Level.</LevelText>
        <RectangleBar />
        <UploadIcon src={uploadIcon} alt="설정" />
        <Cert>나의 인증기록</Cert>
        <ul>
        
        </ul>
      </Container>
    </div>
  );
}

const My = () => {
  return (
    <>
      <TabBar />
      <MyProfile />
    </>
  );
};

export default My;
