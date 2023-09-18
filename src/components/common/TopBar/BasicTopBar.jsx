import StyledBasic from './StyledBasic';
import backIcon from '../../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

const BasicTopBar = ({ tit }) => {
  const navigate = useNavigate();
  return (
    <StyledBasic>
      <h1>{tit}</h1>
      <button className="back" onClick={() => navigate(-1)}>
        <img src={backIcon} alt="이전 페이지로 가기" />
      </button>
    </StyledBasic>
  );
};

export default BasicTopBar;
