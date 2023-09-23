import styled from 'styled-components';

const StyledSelect = styled.div`
  position: relative;

  ul {
    width: 100%;
    position: absolute;
    margin-top: 4px;
    font-size: var(--text-s);
    border-radius: 12px;
    padding: 4px 8px;
    max-height: 78px;
    overflow-y: scroll;
    background: white;
    box-shadow: 0px 4px 10px #0000001f;
  }

  button {
    width: 100%;
  }
  ul button {
    text-align: left;
    color: var(--gray-300);
  }

  li + li button {
    margin-top: 8px;
  }

  /* 현재 선택된 옵션 */
  li > button:focus {
    outline: none;
    color: var(--gray-900);
    &::after {
      content: '';
    }
  }
`;

export default StyledSelect;
