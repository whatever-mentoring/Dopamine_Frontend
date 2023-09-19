import StyledDiv from './StyledDiv';
import successTrue from '../../../assets/icons/success-true.svg';
import successFalse from '../../../assets/icons/success-false.svg';
import { useEffect } from 'react';

const StatusAlert = ({ success, message, setRenderStatus }) => {
  useEffect(() => {
    setTimeout(() => {
      setRenderStatus(false);
    }, 6000);
  }, []);

  return (
    <StyledDiv
      img={success === 'true' ? successTrue : successFalse}
      role="alert"
    >
      {message}
    </StyledDiv>
  );
};

export default StatusAlert;
