import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { editMember } from '../../api/member';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { StatusContext } from '../../context/StatusContext';
import { LButton } from '../../components/common/Buttons';
import successTrueIcon from '../../assets/icons/success-true.svg';
import successFalseIcon from '../../assets/icons/success-false.svg';
import CloseTopBar from '../../components/common/TopBar/CloseTopBar';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: min(100%, 430px);
  padding: 71px 16px 16px;

  &.join {
    padding-top: 60px;
  }

  strong {
    margin-top: 2px;
    font-size: var(--title-m);
    font-weight: 700;
  }

  button {
    margin-top: auto;
  }
`;

const Text = styled.p`
  font-size: var(--text-m);
  text-align: left;
  color: var(--gray-700);
`;

const InputBox = styled.input`
  margin-top: 20px;
  font-size: var(--text-m);
  background: var(--gray-100);
  border-radius: 12px;
  padding: 15px 12px;
  width: 100%;

  &:focus {
    padding: 14px 11px;
    border: 1px solid var(--primary-500);
    outline: none;
  }

  &.error {
    padding: 14px 11px;
    border: 1px solid var(--error);
  }
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 0 4px;
  font-size: var(--text-s);
  color: ${(props) => (props.$error ? 'var(--error)' : 'var(--primary-500)')};

  &::before {
    content: '';
    margin-right: 4px;
    width: 18px;
    aspect-ratio: 1/1;
    background: ${(props) =>
      props.$error
        ? `url(${props.$successFalseIcon}) no-repeat`
        : `url(${props.$successTrueIcon}) no-repeat`};
  }
`;

function Nickname() {
  const { setNickname } = useContext(UserContext);
  const { setRenderJoinStatus } = useContext(StatusContext);

  const [status, setStatus] = useState(null);
  const [nicknameVal, setNicknameVal] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(true);
  const navigate = useNavigate();
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === '/join') {
      setRenderJoinStatus(true);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await editMember(nicknameVal, 0);
      const json = await res.json();

      if (json.message) {
        setStatus(json.message);
        setIsNicknameAvailable(false);
      } else {
        localStorage.setItem('nickname', nicknameVal);
        setNickname(nicknameVal);
        navigate('/home');
      }
    } catch (error) {
      alert('닉네임 설정에 실패했어요.');
      console.error(error);
    }
  };

  return (
    <>
      <CloseTopBar tit="닉네임 변경" />
      <CenteredContainer className={path === '/join' ? 'join' : ''}>
        <Text>이것만 입력하면 끝이에요.</Text>
        <strong>이름을 어떻게 설정할까요?</strong>
        <InputBox
          type="text"
          placeholder="10글자 이내로 작성할 수 있어요."
          minLength="2"
          maxLength="10"
          className={isNicknameAvailable ? '' : 'error'}
          value={nicknameVal}
          onChange={async (e) => {
            const name = e.target.value;
            setNicknameVal(name);

            // 이름 유효성 검사
            if (e.target.validity.tooLong || e.target.validity.tooShort) {
              setStatus('2~10자 이내로 입력해주세요.');
              setIsNicknameAvailable(false);
            } else if (name[0] === ' ' || name[1] === ' ') {
              setStatus('공백으로 시작하거나 끝날 수 없어요.');
              setIsNicknameAvailable(false);
            } else {
              setStatus('사용 가능한 이름이에요.');
              setIsNicknameAvailable(true);
            }
          }}
        />
        {status && (
          <Message
            $error={!isNicknameAvailable}
            $successTrueIcon={successTrueIcon}
            $successFalseIcon={successFalseIcon}
          >
            {status}
          </Message>
        )}
        <LButton onClick={handleSubmit}>다음으로</LButton>
      </CenteredContainer>
    </>
  );
}

export default Nickname;
