import { createContext, useEffect, useState } from 'react';
import { getTodayChallenge } from '../api/challenge';

// 임시
export const ChallengeContext = createContext({
  challengeList: [
    { title: '텀블러 갖고 다니기', status: true },
    { title: '장바구니 사용하기', status: false },
    { title: '텀블러 갖고 다니기', status: false },
  ],
  selectedChallengeIndex: null,
  imgList: [],
  challengeDate: new Date().getDate(),
  setChallengeList: () => {},
  setSelectedChallengeIndex: () => {},
  setImgList: () => {},
  setChallengeDate: () => {},
});

const ChallengeProvider = ({ children }) => {
  const [challengeList, setChallengeList] = useState([]);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);
  const [imgList, setImgList] = useState([]);
  const [challengeDate, setChallengeDate] = useState(new Date().getDate());

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      (async () => {
        const challengeRes = await getTodayChallenge();
        const challengeData = await challengeRes.json();
        setChallengeList(challengeData);
      })();
    }
  }, []);

  return (
    <ChallengeContext.Provider
      value={{
        challengeList,
        setChallengeList,
        selectedChallengeIndex,
        setSelectedChallengeIndex,
        imgList,
        setImgList,
        challengeDate,
        setChallengeDate,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
