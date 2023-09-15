import { createContext, useState } from 'react';

// 임시
export const ChallengeContext = createContext({
  challengeList: [
    { title: '텀블러 갖고 다니기', status: true },
    { title: '장바구니 사용하기', status: false },
    { title: '텀블러 갖고 다니기', status: false },
  ],
  challengeToProve: null,
  setChallengeList: () => {},
  setChallengeToProve: () => {},
});

const ChallengeProvider = ({ children }) => {
  const [challengeList, setChallengeList] = useState([
    { title: '텀블러 갖고 다니기', status: true },
    { title: '장바구니 사용하기', status: false },
    { title: '텀블러 갖고 다니기', status: false },
  ]);

  const [challengeToProve, setChallengeToProve] = useState(null);
  return (
    <ChallengeContext.Provider
      value={{
        challengeList,
        challengeToProve,
        setChallengeList,
        setChallengeToProve,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
