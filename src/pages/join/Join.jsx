import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

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
  height: 40px;
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
  border-radius: 30px;
  padding: 10px;
  font-size: 1.2em;
  cursor: pointer;
  width: 100%;
  height: 50px;
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

const Message = styled.div`
  color: ${(props) => (props.error ? 'red' : 'green')};
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`;

function Join() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false); // 초기에는 메시지를 숨기기 위해 false로 초기화

  const token =
    'Bearer eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjIsImlhdCI6MTY5NDQzMzY1MiwiZXhwIjoxNjk1NjQzMjUyfQ.qn1T4G6q7w5IOYm046Xj4guWOMNjHjDzov2k2DpuZWA';
  const apiEndpoint = 'http://13.125.188.63:9000/api/members'; // API 엔드포인트 URL

  const requestBody = {
    nickname: nickname,
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(apiEndpoint, requestBody, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json', // 요청 본문의 형식을 JSON으로 지정
        },
      });

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleNicknameBlur = async () => {
    // 입력란을 벗어났을 때 중복 여부 확인
    try {
      const response = await axios.post(
        `${apiEndpoint}/check-nickname`,
        requestBody,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );

      setIsNicknameAvailable(response.data.isAvailable);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <CenteredContainer>
      <GlobalStyle />
      <div>
        <Text gray>이것만 입력하면 끝이에요.</Text>
        <BoldText>이름을 어떻게 설정할까요?</BoldText>
        <InputBox
          type="text"
          placeholder="이름을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          onBlur={handleNicknameBlur} // 입력란을 벗어났을 때 중복 여부 확인
        />
        <Message error={!isNicknameAvailable} hidden={!nickname}>
          {isNicknameAvailable
            ? '사용 가능한 이름이에요'
            : '이름이 중복되었어요'}
        </Message>
        <SpaceBetween />
        <NextButton onClick={handleSubmit} disabled={!isNicknameAvailable}>
          다음으로
        </NextButton>
        {error && <div>Error: {error.message}</div>}
      </div>
    </CenteredContainer>
  );
}

ReactDOM.render(<Join />, document.getElementById('root'));

export default Join;
