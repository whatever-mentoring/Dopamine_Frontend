import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 24px 20px 8px; // bottom 임의
  position: fixed;
  z-index: 100;
  display: flex;
  width: min(100%, 430px);
  background: var(--white);

  h2 {
    font-size: var(--title-s);
    font-weight: var(--font-bold);
  }

  button {
    margin-left: auto;
    width: 30px;
    aspect-ratio: 1/1;
  }
`;

export { StyledHeader };
