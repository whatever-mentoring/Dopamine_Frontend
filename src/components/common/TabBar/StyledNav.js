import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  bottom: 0;
  width: min(100%, 430px);
  padding: 8px 16px 4px;
  background: var(--white);
  border-top: 1px solid var(--gray-100);

  a {
    text-align: center;
    width: 100%;
    font-size: var(--text-s);

    svg {
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto 4px;
      margin-bottom: 2px;
    }
    path {
      stroke: var(--gray-200);
    }
  }
  a.current {
    path {
      stroke: var(--primary-500);
    }
  }
`;

export default StyledNav;
