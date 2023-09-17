import styled from 'styled-components';

const StyledMain = styled.main`
  padding-bottom: 56px;

  h3 {
    font-size: var(--title-s);
    font-weight: var(--font-bold);
  }

  section + section {
    border-top: 10px solid var(--gray-100);
  }
`;

export default StyledMain ;
