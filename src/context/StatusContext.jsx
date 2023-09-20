import { createContext, useState } from 'react';

export const StatusContext = createContext({
  renderJoinStatus: false,
  setRenderJoinStatus: () => {},
  renderChallengeStatus: false,
  setRenderChallengeStatus: () => {},
});

const StatusProvider = ({ children }) => {
  const [renderJoinStatus, setRenderJoinStatus] = useState(false);
  const [renderChallengeStatus, setRenderChallengeStatus] = useState(false);

  return (
    <StatusContext.Provider
      value={{
        renderJoinStatus,
        setRenderJoinStatus,
        renderChallengeStatus,
        setRenderChallengeStatus,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
