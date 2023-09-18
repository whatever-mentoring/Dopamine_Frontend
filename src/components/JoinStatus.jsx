import { useEffect } from 'react';
import StatusAlert from './common/statusAlert/StatusAlert';

const JoinStatus = ({ success, setRenderStatus }) => {
  useEffect(() => {
    setTimeout(() => {
      setRenderStatus(false);
    }, 6000);
  }, []);

  return (
    <StatusAlert
      success={success}
      message={success ? '회원가입이 완료되었어요.' : ''}
    ></StatusAlert>
  );
};

export default JoinStatus;
