import styled from 'styled-components';

const StyledBasic = styled.header`
  position: relative;
  padding: 12px 16px;

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
