import styled from 'styled-components';
import StyledMain from '../../components/StyledMain';

const StyledHome = styled(StyledMain)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 218px;
    background: var(--primary-500);
  }

  section > span,
  h2 {
    display: inline-block;
    text-align: center;
    font-size: var(--title-s);
    font-weight: var(--font-bold);
  }
`;

const ChallengeSection = styled.section`
  overflow-x: hidden;
  padding: 27px 16px 48px;

  img {
    margin: auto;
    width: 71px;
    aspect-ratio: 71/67;
  }

  .level-name {
    margin-top: 6px;
    text-align: center;
    font-size: var(--text-m);
    color: var(--white);
  }

  .tit {
    display: block;
    margin: 0 auto 20px;
    font-size: var(--title-m);
    color: var(--white);
  }

  h2 {
    font-size: var(--title-m);
    color: var(--white);
  }

  ul {
    border-radius: 10px;
    background: var(--white);
    box-shadow: 0 4px 10px #00000010;
  }

  li + li {
    border-top: 1px solid var(--gray-100);
  }

  li {
    box-sizing: border-box;
    padding: 20px 17px 20px 16px;
    display: flex;
    align-items: center;

    p {
      font-size: var(--text-s);
      color: var(--gray-400);
    }

    strong {
      display: block;
      font-size: var(--text-l);
      font-weight: var(--font-bold);
      color: var(--gray-900);
    }

    button {
      margin-left: auto;
      padding: 8px 24px;
      width: auto;
    }
  }
`;

const ReportSection = styled.section`
  padding: 30px 16px;

  article {
    margin-top: 24px;

    div {
      display: flex;
      align-items: flex-end;
      margin-bottom: 9px;
    }

    img {
      margin-right: 6px;
      width: 32px;
      aspect-ratio: 1/1;
      border-radius: 100%;
    }

    .level {
      margin-right: auto;
      strong {
        font-size: var(--title-s);
      }
    }

    .exp {
      margin-left: 10px;
    }

    span {
      font-size: var(--text-m);
      color: var(--gray-600);
    }

    strong {
      font-weight: var(--font-bold);
      color: var(--primary-600);
    }
  }

  .status-bar {
    position: relative;
    background: rgba(2, 181, 80, 0.1);
    height: 10px;
    border-radius: 30px;

    span {
      position: absolute;
      background: var(--primary-500);
      width: 80%;
      height: 10px;
      border-radius: 30px;
    }
  }
`;

const FeedSection = styled.section`
  overflow-x: hidden;
  padding: 30px 0; // bottom 임의

  & > span {
    margin-left: 20px;
  }

  a {
    float: right;
    margin-right: 20px;
    line-height: 3rem;
    font-size: var(--text-m);
    color: var(--gray-500);
  }

  .swiper-frame {
    margin-top: 19px;
    padding: 0 20px;

    & > div {
      padding-right: 50px;
      display: flex;
      align-items: flex-start;
    }
  }

  .swiper-item {
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 10px;

    img {
      aspect-ratio: 1/1;
    }

    p {
      margin-top: 10px;
      font-size: var(--text-m);
    }
  }
`;

export { StyledHome, ChallengeSection, ReportSection, FeedSection };
