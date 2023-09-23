import { useCallback, useEffect, useRef } from 'react';
import Overlay from './Overlay';
import StyledModal from './StyledModal';

const Modal = ({ setIsModalOpen, children }) => {
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
      <StyledModal
        ref={(node) => {
          if (node) {
            setModal(node);
          }
        }}
      >
        {children}
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
