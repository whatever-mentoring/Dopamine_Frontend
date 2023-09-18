import StyledCloseTopBar from './StyledCloseTopBar';
import backIcon from '../../../assets/icons/back.svg';
import xIcon from '../../../assets/icons/x.svg';
import { useNavigate } from 'react-router-dom';

const CloseTopBar = ({ tit, handleBack, handleClose }) => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate(-1);
  };

  console.log(handleBack);
  return (
    <StyledCloseTopBar>
      <h1>{tit}</h1>
      <button className="back" onClick={handleBack || handleBtn}>
        <img src={backIcon} alt="이전 페이지로 가기" />
      </button>
      <button className="close" onClick={handleClose || handleBtn}>
        <img src={xIcon} alt="닫기" />
      </button>
    </StyledCloseTopBar>
  );
};

export default CloseTopBar;
