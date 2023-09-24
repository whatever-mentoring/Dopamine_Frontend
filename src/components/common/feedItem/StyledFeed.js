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

    .more {
      margin-left: auto;
      width: 24px;
      aspect-ratio: 1/1;
      background: ${({ $moreIcon }) => `url(${$moreIcon})`};
    }
  }

  .like {
    margin-top: 8px;
    display: flex;
    align-items: center;
    font-size: var(--text-s);
    color: var(--gray-500);

    img {
      width: 24px;
      aspect-ratio: 1/1;
      margin-right: 2px;
    }
  }

  .swiper-frame {
    border-radius: 10px;
  }

  .swiper-item {
    img {
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }

  .img-wrap {
    position: relative;

    .pagination {
      position: absolute;
      z-index: 100;
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
    margin: 4px 0 6px;
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
