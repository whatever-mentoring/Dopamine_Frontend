import styled from 'styled-components';

const StyledSelect = styled.button`
  font-size: var(--text-s);
  color: var(--gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 850px;
  padding: 1px 7px;
  background: var(--white);
  border: 1px solid var(--gray-300);

  img {
    margin-left: 4px;
    width: 10px;
    aspect-ratio: 1/1;
  }
  img.open {
    transform: rotate(180deg);
  }
`;

export default StyledSelect;
