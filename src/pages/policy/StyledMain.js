import styled from 'styled-components';

const StyledMain = styled.main`
  padding-top: 40px;
  h2 {
    font-size: var(--text-m);
    font-weight: var(--font-bold);
    margin-bottom: 12px;
  }

  section + section {
    border-top: 10px solid var(--gray-100);
  }

  section {
    padding: 48px 16px;
  }

  font-size: var(--text-s);
`;

export default StyledMain;
