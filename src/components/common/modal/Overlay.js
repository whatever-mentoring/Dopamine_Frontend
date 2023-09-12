import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;

  &:before {
    content: '';
    display: block;
    opacity: 0.5;
    background: var(--gray-900);
    max-width: 430px;
    height: 100%;
    margin: auto;
  }
`;

export default Overlay;
