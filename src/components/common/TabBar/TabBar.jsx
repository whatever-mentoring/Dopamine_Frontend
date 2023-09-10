import StyledNav from './StyledNav';
import { Link, useLocation } from 'react-router-dom';
import navList from './navList';

const TabBar = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      {navList.map((v, i) => {
        return (
          <Link
            to={v.path}
            key={i}
            className={pathname === v.path ? 'current' : ''}
          >
            {v.img}
            {v.name}
          </Link>
        );
      })}
    </StyledNav>
  );
};

export default TabBar;
