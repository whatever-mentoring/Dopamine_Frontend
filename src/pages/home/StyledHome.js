import styled from 'styled-components';
import StyledMain from '../../components/StyledMain';

const StyledHome = styled(StyledMain)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 218px;
    background: var(--primary-500);
  }

  &::after {
    content: '';
    flex-basis: 98px;
    flex-grow: 1;
    background: #ededed;
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
  position: relative;
  overflow-x: hidden;
  padding: 27px 16px 20px;

  .earth {
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
    gap: 8px; // 임의

    span {
      display: flex;
      align-items: center;
      font-size: var(--text-s);
      color: var(--gray-400);
    }
    span::after {
      content: '';
      margin-left: 4px;
      width: 6px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background: var(--primary-500);
    }

    span.MID::after {
      background: #fda521;
    }
    span.HIGH::after {
      background: var(--error);
    }

    strong {
      display: block;
      font-size: var(--text-l);
      font-weight: var(--font-bold);
      color: var(--gray-900);
    }

    button {
      flex-shrink: 0;
      margin-left: auto;
      padding: 8px;
      width: 96px;

      &:disabled {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px;
        border: 1px solid var(--gray-100);
        color: var(--primary-500);
        background: var(--white);
      }
      &:disabled::after {
        content: '';
        margin-left: 2px;
        width: 18px;
        aspect-ratio: 1/1;
        background: ${({ $successIcon }) => `url(${$successIcon}) no-repeat`};
      }
    }
  }

  .tooltip-icon {
    width: 20px;
    aspect-ratio: 1/1;
    margin: 8px 9px 0 auto;
  }

  .tooltip {
    position: absolute;
    width: fit-content;
    right: 49px;
    bottom: 6px;
    padding: 8px 10px;
    border-radius: 12px;
    font-size: var(--text-s);
    color: var(--primary-500);
    background: #d7fede99;
    box-shadow: 0px 4px 10px #0000001f;

    strong {
      display: block;
      font-weight: var(--font-bold);
    }
    span + span::before {
      content: '';
      display: inline-block;
      height: 9px;
      width: 1px;
      background: var(--primary-200);
      margin: 0 4px;
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

  .exp-bar {
    position: relative;
    background: rgba(2, 181, 80, 0.1);
    height: 10px;
    border-radius: 30px;

    &::before {
      content: '';
      position: absolute;
      background: var(--primary-500);
      width: ${({ $fillPercent }) => $fillPercent}%;
      height: 10px;
      border-radius: 30px;
    }
  }
`;

const FeedSection = styled.section`
  overflow-x: hidden;
  padding: 30px 0 31px; // bottom 임의

  & > span {
    margin-left: 16px;
  }

  & > a {
    float: right;
    margin-right: 16px;
    line-height: 3rem;
    font-size: var(--text-m);
    color: var(--gray-500);
  }

  .swiper-frame {
    margin-top: 19px;
    padding: 0 16px;

    & > div {
      padding-right: 50px;
    }
  }

  .swiper-item {
    img {
      border-radius: 10px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    p {
      margin-top: 10px;
      font-size: var(--text-m);
    }
  }

  & > p {
    margin: 20px 16px 0;
    padding: 69px 0;
    text-align: center;
    font-size: var(--text-m);
    color: var(--gray-400);
    border: 1px solid var(--gray-200);
    border-radius: 12px;
  }
`;

export { StyledHome, ChallengeSection, ReportSection, FeedSection };
