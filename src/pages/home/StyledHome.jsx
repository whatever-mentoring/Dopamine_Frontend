import styled from 'styled-components';

const StyledMain = styled.main`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 200px;
    background: var(--gray-100);
  }

  &::after {
    content: '';
    display: block;
    margin-top: 20px;
    height: 128px;
    background: var(--gray-100);
  }

  /* section + section {
    margin-top: 44px;
  } */

  section > span,
  h3 {
    display: inline-block;
    font-size: var(--title-s);
    font-weight: var(--font-bold);
  }
`;

const ChallengeSection = styled.section`
  overflow-x: hidden;
  padding: 94px 0 44px;

  .level-name {
    margin-left: 20px;
    font-size: var(--text-m);
  }

  & > span {
    margin: 2px 0 16px 20px;
  }

  .swiper-frame {
    padding: 0 20px;

    & > div {
      display: flex;
      align-items: flex-start;
    }
  }

  .swiper-item {
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 16px 10px;
    text-align: center;
    background: var(--white);
    box-shadow: 0 4px 10px #00000010;
    border-radius: 10px;

    img {
      width: 96px;
      aspect-ratio: 1/1;
      margin: auto;
    }
    p {
      margin-top: 10px;
      font-size: var(--text-m);
      color: var(--gray-500);
    }

    strong {
      margin-bottom: 8px;
      display: block;
      font-size: var(--title-s);
      font-weight: var(--font-bold);
    }
  }
`;

const ReportSection = styled.section`
  padding: 20px 20px 0;
  margin-bottom: 44px;

  article {
    padding: 13px 10px 16px;
    box-shadow: 0 4px 10px #00000010;
    border-radius: 10px;

    div:first-child {
      display: flex;
      align-items: flex-end;
      margin-bottom: 9px;
    }

    img {
      margin: 0 auto 3px 0;
      width: 48px;
      aspect-ratio: 1/1;
      border-radius: 100%;
    }

    span + span {
      margin-left: 10px;
    }

    span {
      font-size: var(--text-s);
      color: #757575;
    }

    strong {
      font-size: var(--text-l);
      font-weight: var(--font-bold);
      color: var(--black);
    }
  }

  .status-bar {
    position: relative;
    background: #d9d9d9;
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
      color: var(--gray-500);
    }
  }
`;

export { StyledMain, ChallengeSection, ReportSection, FeedSection };
