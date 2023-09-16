import React from 'react';
import TabBar from '../../components/common/TabBar/TabBar';
import styled from 'styled-components';

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
  top: 138px; /* 원하는 간격으로 조정 */
  left: 16px; /* 원하는 위치로 조정 */
  background-color: #D9D9D9; /* 동그라미 색상 */
  border-radius: 50%; /* 동그라미 모양 만들기 */
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
left: 16px; /* 원하는 위치로 조정 */
border-radius: 30px;
background-color:#D9D9D9;
`;
const GaugeFiller = styled.div`
  width: ${(props) => props.fillPercentage}%;
  height: 100%;
  background-color: #02b550; /* 게이지 바의 채워진 부분 색상 */
  border-radius: 30px;
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
function MyProfile() {
  const level = 2;
  const completionCount = 6;
  const experience = calculateExperience(level, completionCount);
  const certificationRecords = [/* 여기에 인증 기록 데이터를 넣어주세요 */];

  function GaugeBar({ fillPercentage }) {
    return (
      <GaugeBarContainer>
        <GaugeFiller fillPercentage={fillPercentage} />
      </GaugeBarContainer>
    );
  }
  return (
    <Container>
      <CircleIcon />
      <Name>내 정보</Name>
      <Description>새싹지킴이 도파민님</Description>
      <NewTextBox>잘하고 계시는 군요!</NewTextBox>
      <GaugeBar fillPercentage={70} /> {/* fillPercentage 값을 전달 */}
      <LevelText>
       Level.
</LevelText>
            <ul>
        {certificationRecords.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
      </Container>
  );
}


function calculateExperience(level, completionCount) {
  return level * 100 + completionCount * 10;
}

const My = () => {
  return (
    <>
      <TabBar />
      <MyProfile /> {/* MyProfile 컴포넌트를 여기서 렌더링합니다. */}
    </>
  );
};

export default My;
