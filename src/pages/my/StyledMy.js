import styled from 'styled-components';
import StyledMain from '../../components/StyledMain';

const StyledMy = styled(StyledMain)``;

const ProfileSection = styled.section`
  position: relative;
  padding: 24px 16px 32px;

  .top-wrap {
    display: flex;

    a {
      margin-left: auto;
      width: 24px;
      aspect-ratio: 1/1;
    }
  }

  .profile {
    padding: 30px 0px 24px;
    display: flex;
    align-items: center;

    img {
      width: 48px;
      aspect-ratio: 1/1;
      background: #d9d9d9;
      border-radius: 50%;
    }

    p {
      margin-left: 10px;
      color: var(--gray-900);
      font-size: var(--text-m);

      span {
        display: block;
      }

      span:last-child {
        font-size: var(--title-s);
        font-weight: var(--font-bold);
      }

      span + span {
        margin-top: 2px;
      }
    }
  }
  .gauge-bar {
    height: 10px;
    border-radius: 30px;
    background-color: #d9d9d9;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: ${(props) => props.fillPercentage}%;
      height: 100%;
      background-color: #02b550;
      border-radius: 30px;
    }
  }

  .txt-wrap {
    margin-top: 16px;
    display: flex;

    span {
      font-size: var(--text-m);
      color: var(--gray-600);
      span {
        color: var(--primary-500);
      }
    }

    .cnt {
      margin: 0 12px 0 auto;
    }
  }
`;

const ProofSection = styled.section`
  padding: 24px 0 0; // bottom 확인 필

  .top-wrap {
    display: flex;
    align-items: center;
    padding: 0 16px;

    h2 {
      display: inline-block;
    }

    span {
      margin: 0 auto 0 4px;

      font-size: var(--text-m);
      color: var(--gray-500);
    }
  }

  & > ul {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    li {
      aspect-ratio: 1/1;
    }
  }
`;

export { StyledMy, ProfileSection, ProofSection };
