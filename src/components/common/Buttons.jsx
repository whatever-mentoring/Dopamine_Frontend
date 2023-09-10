import styled from 'styled-components';

const LButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px;
  font-size: var(--text-l);
  font-weight: 700;
  border-radius: 100px;
  background: var(--primary-500);
  color: var(--white);

  &:disabled {
    background: var(--gray-300);
  }
`;

const MButton = styled(LButton)`
  padding: 12px;
`;

const SButton = styled(LButton)`
  padding: 10px 48px;
  font-size: var(--text-m);
`;

const SWhiteButton = styled(SButton)`
  padding: 9px 47px;
  border: 1px solid var(--primary-500);
  color: var(--primary-500);
  background: var(--white);

  &:disabled {
    border: 1px solid var(--gray-300);
    color: var(--gray-300);
    background: var(--white);
  }
`;

export { LButton, MButton, SButton, SWhiteButton };
