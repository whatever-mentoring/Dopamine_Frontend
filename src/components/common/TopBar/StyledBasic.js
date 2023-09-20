import styled from 'styled-components';

const StyledBasic = styled.header`
  position: fixed;
  padding: 12px 16px;
  width: min(430px, 100%);
  background: var(--white);

  h1 {
    font-size: var(--text-l);
    font-weight: var(--font-bold);
    text-align: center;
  }

  .back {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    aspect-ratio: 1/1;
  }
`;

export default StyledBasic;
