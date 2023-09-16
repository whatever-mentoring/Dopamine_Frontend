import styled from 'styled-components';

const StyledMain = styled.main`
  width: inherit;
  min-height: 100vh;
  margin: auto;
  position: relative;
  display: flex;
  align-items: flex-end;

  div {
    position: absolute;
    top: calc(50% - 25px);
    width: 100%;
    transform: translateY(-50%);

    span {
      display: block;
      margin-top: 16px;
      text-align: center;
      font-size: var(--text-l);
      color: var(--gray-500);
    }
  }

  div > img {
    width: 96px;
    aspect-ratio: 96/108;
    margin: auto;
  }
  h1 {
    max-width: 230px;
    aspect-ratio: 230/124.63;
    margin: auto;
  }

  button {
    position: relative;
    margin: 0 16px 16px;
    width: 100%;
    padding: 15.5px 0 14.5px;
    border-radius: 6px;
    background: #fee500;

    img {
      display: inline-block;
      width: 82px;
      aspect-ratio: 82/15;
      margin: 2.5px 0 0 12px;
    }
  }
  button::before {
    content: '';
    position: absolute;
    left: 26px;
    width: 18px;
    aspect-ratio: 1/1;
    background: ${({ $kakaoLogo }) => `url(${$kakaoLogo}) no-repeat`};
  }
`;

export default StyledMain;
