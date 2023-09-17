import styled from 'styled-components';

const StyledDiv = styled.div`
  /* 위치 공통인가? */
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 68px;
  z-index: 1000;

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
`;

export default StyledDiv;
