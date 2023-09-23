import styled from 'styled-components';

const StyledSetting = styled.main`
  padding-top: 48px;

  li {
    padding: 16px;
    font-size: var(--text-l);
  }
  li + li {
    border: 1px solid var(--gray-100);
  }
`;

export default StyledSetting;
