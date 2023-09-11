import { useEffect, useRef } from 'react';
import Overlay from './Overlay';
import StyledBottomModal from './StyledBottomModal';

const BottomModal = ({ setIsModalOpen, children }) => {
  const modal = useRef(null);

  useEffect(() => {
    // 모달 외 클릭 시 모달 close
    const handleClick = (e) => {
      if (e.target.tagName === 'HTML') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    modal.current.showModal();
  }, []);

  return (
    <Overlay>
      <StyledBottomModal ref={modal}>{children}</StyledBottomModal>
    </Overlay>
  );
};

export default BottomModal;
