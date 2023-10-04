import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 71px 16px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: var(--title-l);
    font-weight: var(--font-bold);
  }

  .guide-section {
    padding: 16px 0 40px;
    p {
      margin-bottom: 20px;
      font-size: var(--text-l);
      color: var(--gray-500);
    }

    div {
      padding: 19px 11px 19px 9px;
      font-size: var(--text-m);
      border: 1px solid var(--primary-400);
      border-radius: 12px;
      background: #d7fede80;
      color: var(--primary-900);

      strong {
        font-weight: var(--font-bold);
      }
    }
  }

  .gray-section {
    margin: 0 -16px;
    padding: 20px 16px;
    flex-grow: 1;
    background: var(--gray-100);

    p {
      text-align: center;
      font-size: var(--text-m);
      color: var(--gray-500);
    }
  }
`;

export default StyledMain;
