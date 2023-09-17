import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { editMember } from '../../api/member';
import { useNavigate } from 'react-router-dom';

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
  font-family: SUITE;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
`;

// 사용 예시
/* <Text>This is a medium text</Text> */

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
  font-size: 2em;
  cursor: pointer;
  width: 328px;
  height: 56px;
  max-width: 400px;
`;

const BoldText = styled.p`
  font-family: SUITE;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: left;
  color: black;
`;

const SpaceBetween = styled.div`
  margin-top: 250px;
`;

const Message = styled.div`
  color: ${(props) => (props.$error ? 'red' : 'green')};
`;

function Nickname() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [nickname, setNickname] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await editMember(nickname, 0);
      const json = await res.json();

      if (json.message) {
        setStatus(json.message);
      } else {
        localStorage.setItem('nickname', nickname);
        navigate('/home');
      }
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return (
    <CenteredContainer>
      <GlobalStyle />
      <div>
        <Text>이것만 입력하면 끝이에요.</Text>
        <BoldText>이름을 어떻게 설정할까요?</BoldText>
        <InputBox
          type="text"
          placeholder="이름을 입력하세요"
          value={nickname}
          onChange={async (e) => {
            const name = e.target.value;
            setNickname(name);

            // 이름 유효성 검사
            if (name.length < 2) {
              setStatus('2~10자 이내로 입력해주세요.'); // 입력값이 2글자 미만인 경우 로그를 출력
              setIsNicknameAvailable(false);
            } else {
              setStatus('사용 가능한 이름이에요.');
              setIsNicknameAvailable(true);
            }
          }}
        />
        {status && <Message $error={!isNicknameAvailable}>{status}</Message>}
        <SpaceBetween />
        <NextButton onClick={handleSubmit}>다음으로</NextButton>
      </div>
    </CenteredContainer>
  );
}

export default Nickname;
