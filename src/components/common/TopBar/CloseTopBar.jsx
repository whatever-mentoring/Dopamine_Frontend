import StyledCloseTopBar from './StyledCloseTopBar';
import xIcon from '../../../assets/icons/x.svg';
import { useNavigate } from 'react-router-dom';

const CloseTopBar = ({ tit }) => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate(-1);
  };

  return (
    <StyledCloseTopBar>
      <h1>{tit}</h1>
      <button className="close" onClick={handleBtn}>
        <img src={xIcon} alt="닫기" />
      </button>
    </StyledCloseTopBar>
  );
};

export default CloseTopBar;
