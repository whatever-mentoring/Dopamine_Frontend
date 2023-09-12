import styled from 'styled-components';

const StyledBottomModal = styled.dialog`
  width: min(100%, 430px);
  max-width: 100%;
  border: none;
  margin: auto auto 0;
  padding: 30px 20px 21px;
  border-radius: 12px 12px 0 0;

  /* 밑에서 위로 모달 등장 */
  transform: translateY(100%);
  animation: modal-animation 0.3s ease-in 0s 1 forwards running;
  @keyframes modal-animation {
    100% {
      transform: translateY(0);
    }
  }

  p {
    margin-bottom: 16px;
    font-size: var(--text-l);
    font-weight: var(--font-bold);
  }

  button {
    padding: 16px 0;
    width: 100%;
    font-size: var(--text-m);
    border: 1px solid var(--gray-300);
    border-radius: 12px;
  }

  button + button {
    margin-top: 12px;
  }

  &::backdrop {
    display: none;
  }
`;

export default StyledBottomModal;
