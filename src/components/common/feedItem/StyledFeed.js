import styled from 'styled-components';

const StyledFeed = styled.article`
  & + & {
    margin-top: 33px;
  }

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    img {
      width: 20px;
      aspect-ratio: 1/1;
    }

    span {
      margin-left: 6px;
      font-size: var(--text-m);
    }

    button {
      margin-left: auto;
      width: 24px;
      aspect-ratio: 1/1;
      background: ${({ $moreIcon }) => `url(${$moreIcon})`};
    }
  }

  .swiper-frame {
    overflow: hidden;

    & > div {
      display: flex;
    }
  }

  .swiper-item {
    flex-shrink: 0;

    img {
      border-radius: 10px;
      aspect-ratio: 1/1;
    }
  }

  .img-wrap {
    position: relative;

    .pagination {
      position: absolute;
      padding: 2px 8px;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      font-size: var(--text-s);
      background: #3b403d80;
      color: var(--gray-300);
      border-radius: 12px;

      span {
        color: var(--white);
      }
    }

    button {
      position: absolute;
      bottom: 4px;
      right: 4px;
      width: 36px;
      aspect-ratio: 1/1;
    }
  }

  strong {
    display: block;
    margin: 12px 0 6px;
    font-size: var(--text-l);
    font-weight: var(--font-bold);
  }

  p {
    margin-bottom: 4px;
    font-size: var(--text-m);
  }

  time {
    font-size: var(--text-s);
    font-weight: var(--font-bold);
    color: var(--gray-500);
  }
`;

export { StyledFeed };
