import styled from 'styled-components';

/* 팝업 스타일 */
const StyledModal = styled.dialog`
  position: relative;
  max-width: 328px;
  width: calc(100% - 32px);
  border: none;
  padding: 30px 14px 20px;
  background-color: #fff; /* 흰 배경색 */
  border-radius: 10px; /* 라운드 네모박스 형태로 */
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 그림자 효과 */

  strong {
    font-weight: var(--font-bold);
    font-size: var(--title-s);
  }

  p {
    margin: 16px 0 26px;
    font-size: var(--text-l);
    color: var(--gray-600);
  }

  .close-button {
    width: 24px;
    aspect-ratio: 1/1;
  }

  .btn-wrap {
    display: flex;
    gap: 12px;
  }

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export default StyledModal;
