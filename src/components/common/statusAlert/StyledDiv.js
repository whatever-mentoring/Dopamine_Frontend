import styled from 'styled-components';

const StyledDiv = styled.div`
  /* 위치 공통인가? */
  position: fixed;
  left: 50%;
  bottom: 68px;
  z-index: 100;

  width: calc(min(100%, 430px) - 40px);
  padding: 12px 0;
  text-align: center;
  font-size: var(--text-m);
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0px 2px 6px var(--gray-200);

  &::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    width: 18px;
    aspect-ratio: 1/1;
    vertical-align: text-top;
    background: ${({ img }) => `url(${img})`};
  }

  /* 밑에서 위로 토스트 등장 */
  transform: translate(-50%, 100%);
  animation:
    popup 0.3s ease-in 0s 1 forwards running,
    popdown 0.3s ease-in 5s 1 forwards running;
  @keyframes popup {
    100% {
      transform: translate(-50%);
    }
  }

  @keyframes popdown {
    100% {
      transform: translate(-50%, 100%);
    }
  }
`;

export default StyledDiv;
