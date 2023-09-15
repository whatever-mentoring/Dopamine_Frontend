import StyledDiv from './StyledDiv';
import successTrue from '../../../assets/icons/success-true.svg';
import successFalse from '../../../assets/icons/success-false.svg';

const StatusAlert = ({ success, message }) => {
  return (
    <StyledDiv
      success={success}
      img={success ? successTrue : successFalse}
      role="alert"
    >
      {message}
    </StyledDiv>
  );
};

export default StatusAlert;
