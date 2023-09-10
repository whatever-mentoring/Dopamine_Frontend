import StyledNav from './StyledNav';
import { Link } from 'react-router-dom';

const TabBar = () => {
  return (
    <StyledNav>
      <Link to="/">홈</Link>
      <Link to="/">챌린지피드</Link>
      <Link to="/">My</Link>
    </StyledNav>
  );
};

export default TabBar;
