import styled from 'styled-components';

const StyledMissionComplete = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;

  &::before {
    content: '';
    display: block;
    width: 100px;
    aspect-ratio: 1/1;
    background: ${({ $successIcon }) =>
      `center / contain no-repeat url(${$successIcon})`};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 80px;
    right: 30px;
    width: 61px;
    aspect-ratio: 61/83.62;
    background: ${({ $waterIcon }) =>
      `center / contain no-repeat url(${$waterIcon})`};
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: var(--title-l);
    margin-top: 12px;
  }

  p {
    margin: 12px 0 92px;
    font-size: var(--text-l);
    color: var(--gray-600);
  }

  span {
    position: absolute;
    bottom: 150px;
    right: 88px;
    font-size: var(--text-m);
    color: var(--gray-600);
  }

  .center-content {
    text-align: center;
  }
`;

const StyledFooter = styled.footer`
  width: min(100%, 430px);
  max-width: 100%;
  border-top: 1px solid var(--gray-100);
  padding: 19px 16px 4px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
`;

export { StyledFooter };
export default StyledMissionComplete;
