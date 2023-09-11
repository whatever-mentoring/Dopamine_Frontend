import { useCallback, useEffect, useRef } from 'react';
import Overlay from './Overlay';
import StyledBottomModal from './StyledBottomModal';

const BottomModal = ({ setIsModalOpen, children }) => {
  const modal = useRef(null);

  useEffect(() => {
    // 모달 외 클릭 시 모달 close
    const closeModal = (e) => {
      if (e.target.tagName === 'HTML') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('click', closeModal);
    window.addEventListener('touchstart', closeModal);
  }, []);

  const setModal = useCallback((node) => {
    modal.current = node;
    node.showModal();
  }, []);

  return (
    <Overlay>
      <StyledBottomModal
        ref={(node) => {
          if (node) {
            setModal(node);
          }
        }}
      >
        {children}
      </StyledBottomModal>
    </Overlay>
  );
};

export default BottomModal;
