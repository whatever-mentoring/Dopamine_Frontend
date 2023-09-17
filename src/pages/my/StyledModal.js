import BasicBottomModal from '../../components/common/modal/BasicBottomModal';
import styled from 'styled-components';

const StyledModal = styled(BasicBottomModal)`
  & > ul {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    li {
      padding: 10px 0;
      text-align: center;
    }

    button {
      font-size: var(--text-m);
      color: var(--gray-300);
    }

    button.selected {
      color: var(--primary-500);
      font-weight: var(--font-bold);
    }
  }

  .select {
    width: 70px;
  }
`;

export default StyledModal;
