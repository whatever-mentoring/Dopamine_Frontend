import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  gap: 10px;
  bottom: 0;
  width: min(100%, 430px);
  padding: 0 20px 28px;
  background: var(--white);
  border-top: 1px solid var(--gray-100);

  a {
    padding: 13px 0;
    text-align: center;
    width: 100%;
    font-size: var(--text-s);
  }
`;

export default StyledNav;
