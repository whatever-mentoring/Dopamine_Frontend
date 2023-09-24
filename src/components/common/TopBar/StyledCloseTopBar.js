import styled from 'styled-components';
import StyledBasic from './StyledBasic';

const StyledCloseTopBar = styled(StyledBasic)`
  padding: 8px 16px;
  border-bottom: 1px solid var(--gray-100);
  min-height: 41px; // 타이틀 없는 경우

  .close {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default StyledCloseTopBar;
