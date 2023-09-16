import React, { useState } from 'react';
import axios from 'axios';
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
  height: 51px;
  border: none;
  background-color: #eff0f0;
  border-radius: 10px;
  padding: 5px;
  width: 328px;
  max-width: 400px;
`;

const NextButton = styled.button`
  background-color: #02b550;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 10px;
  font-size: 1.2em;
  cursor: pointer;
  width: 328px;
  height: 56px;
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
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  const apiEndpoint = 'http://54.180.66.83:9000/api/members'; // API 엔드포인트 URL
  const token = 'Bearer eyJ0eXBlIjoiYWNjZXNzIiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUwNCwiaWF0IjoxNjk0ODM5NzYxLCJleHAiOjE2OTYwNDkzNjF9.jXou47N2t0E5M31YXNCR1D32q3WGWSMG3rbtZv3xrbw'; // 토큰을 적절하게 설정

  // 이름 중복 검사 함수
const checkNameAvailability = async (name) => {
  try {
    // if (name.length < 2) {
    //   console.log('Name is too short'); // 입력값이 2글자 미만인 경우 로그를 출력
    // }
    const response = await fetch(`${apiEndpoint}/check-nickname`, {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: 
        JSON.stringify({"exp": 0,
          "kakaoId": "string",
          "nickname": "string",
          "refreshToken": "string"
        })
    });
    // const response = await axios.post(
    //   `${apiEndpoint}/check-nickname`,
    //   { nickname: name },
    //   {
    //     headers: {
    //       Authorization: token,
    //     },
    //   }
    // );
    console.log(response);
    return response.data.isAvailable;
    
  } catch (error) {
    console.error('Error checking name availability:', error.message);
    throw error;
  }
};

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    // 이름 중복 검사 함수를 호출하여 중복 여부 확인
    const isAvailable = await checkNameAvailability(nickname);

    if (isAvailable) {
      // 중복이 아닌 경우에만 서버 요청 보냄
      const requestBody = {
        nickname: nickname,
      };
      const response = await axios.post(
        apiEndpoint,
        requestBody,
        {
          headers: {
            Authorization: token, // 'Authorization' 헤더에 토큰 추가
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data);
    }
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
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
          onChange={(e) => {setNickname(e.target.value); checkNameAvailability(e.target.value)}}
        />
        <Message error={!isNicknameAvailable} hidden={!nickname}>
          {isNicknameAvailable ? '사용 가능한 이름이에요' : '이름이 중복되었어요'}
        </Message>
        <SpaceBetween />
        <NextButton onClick={handleSubmit}>
          다음으로
        </NextButton>
        {error && <div>Error: {error.message}</div>}
      </div>
    </CenteredContainer>
  );
}

export default Join;
