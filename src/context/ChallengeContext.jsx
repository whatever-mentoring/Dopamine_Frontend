import { createContext, useEffect, useState } from 'react';
import { getTodayChallenge } from '../api/challenge';

export const ChallengeContext = createContext({
  challengeList: [],
  selectedChallengeIndex: null,
  imgList: [],
  challengeDate: new Date().getDate(),
  setChallengeList: () => {},
  setSelectedChallengeIndex: () => {},
  setImgList: () => {},
  setChallengeDate: () => {},
  setChallengeData: async () => {},
});

const ChallengeProvider = ({ children }) => {
  const [challengeList, setChallengeList] = useState([]);
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(null);
  const [imgList, setImgList] = useState([]);
  const [challengeDate, setChallengeDate] = useState(new Date().getDate());

  const setChallengeData = async () => {
    try {
      const res = await getTodayChallenge();
      const json = await res.json();
      setChallengeList(json);
      setChallengeDate(new Date().getDate());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      (async () => {
        await setChallengeData();
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
        setChallengeData,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
