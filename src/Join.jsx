import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'SUITE Variable', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Text = styled.p`
  font-size: 1.2em;
  color: ${(props) => (props.gray ? '#A3A3A3' : 'black')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

const InputBox = styled.input`
  font-size: 1.2em;
  height: 50px;
  border: none;
  background-color: #eff0f0;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  max-width: 400px;
`;

const NextButton = styled.button`
  background-color: #02b550;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2em;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
`;

const BoldText = styled.p`
  font-weight: bold;
  font-size: 1.8em;
  color: black;
`;

const SpaceBetween = styled.div`
  margin-top: 250px;
`;

function Join() {
  return (
    <CenteredContainer>
      <GlobalStyle />
      <div>
        <Text gray>이것만 입력하면 끝이에요.</Text>
        <BoldText>이름을 어떻게 설정할까요?</BoldText>
        <InputBox type="text" placeholder="이름을 입력하세요" />
        <SpaceBetween />
        <NextButton>다음으로</NextButton>
      </div>
    </CenteredContainer>
  );
}

ReactDOM.render(<Join />, document.getElementById('root'));
