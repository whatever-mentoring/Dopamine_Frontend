import BottomModal from './BottomModal';
import { useContext, useEffect, useState } from 'react';
import { ChallengeContext } from '../../../context/ChallengeContext';
import ProofModal from './ProofModal';
import { getTodayChallenge } from '../../../api/challenge';

const ChallengeSelectModal = ({ setIsModalOpen }) => {
  const {
    challengeList,
    challengeDate,
    setChallengeDate,
    setchallengeList,
    setSelectedChallengeIndex,
  } = useContext(ChallengeContext);
  const [selectedChallenge, setSelectedChallenge] = useState('');

  useEffect(() => {
    (async () => {
      const today = new Date().getDate();
      if (challengeDate !== today) {
        const res = await getTodayChallenge();
        const data = await res.json();
        setchallengeList(data);
        setChallengeDate(today);
      }
    })();
  }, []);

  return (
    <>
      {!selectedChallenge ? (
        <BottomModal setIsModalOpen={setIsModalOpen}>
          <p>어떤 챌린지를 인증하시나요?</p>
          {challengeList.map((v, i) => {
            return (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedChallenge(v.title);
                  setSelectedChallengeIndex(i);
                }}
                className={!!v.certificationYn ? '' : 'default'}
                disabled={!!v.certificationYn}
              >
                {v.title}
              </button>
            );
          })}
        </BottomModal>
      ) : (
        <ProofModal setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default ChallengeSelectModal;
