import BottomModal from './BottomModal';
import { useContext, useState } from 'react';
import { ChallengeContext } from '../../../context/ChallengeContext';
import ProofModal from './ProofModal';

const ChallengeSelectModal = ({ setIsModalOpen }) => {
  const { challengeList, setChallengeToProve, challengeToProve } =
    useContext(ChallengeContext);
  const [selectedChallenge, setSelectedChallenge] = useState('');

  const handleSelectBtn = (e) => {
    e.preventDefault();
    setSelectedChallenge(e.currentTarget.textContent);
  };

  return (
    <>
      {!selectedChallenge ? (
        <BottomModal setIsModalOpen={setIsModalOpen}>
          <p>어떤 챌린지를 인증하시나요?</p>
          {challengeList.map((v, i) => {
            return (
              <button key={i} onClick={handleSelectBtn}>
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
