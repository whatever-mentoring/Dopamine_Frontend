import StatusAlert from './common/statusAlert/StatusAlert';

const JoinStatus = ({ success }) => {
  return (
    <StatusAlert
      success={success}
      message={success ? '회원가입이 완료되었어요.' : ''}
    ></StatusAlert>
  );
};

export default JoinStatus;
