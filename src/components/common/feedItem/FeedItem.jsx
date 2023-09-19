import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import ReportModal from '../modal/ReportModal';
import DeleteFeedModal from '../modal/DeleteFeedModal';
import { StyledFeed } from './StyledFeed';
import moreIcon from '../../../assets/icons/more.svg';
import likeIcon from '../../../assets/icons/like.svg';
import unlikeIcon from '../../../assets/icons/unlike.svg';

import { unLikeFeed, likeFeed } from '../../../api/feedLike';

const FeedItem = ({ feed }) => {
  const { nickname } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [like, setLike] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLikeBtn = () => {
    if (like) {
      setLike(false);
      // api 좋아요 취소
    } else {
      setLike(true);
      // api 좋아요
    }
  };

  const doubleClickLike = () => {
    if (!like) {
      setLike(true);
      // api 좋아요
    }
  };

  return (
    <>
      <StyledFeed $moreIcon={moreIcon}>
        <div className="top">
          <img src={feed.profileImg} alt="프로필 사진" />
          <span>{feed.nickname}</span>
          <button
            aria-label="더보기"
            onClick={() => setIsModalOpen(true)}
          ></button>
        </div>
        <div className="img-wrap">
          <Swiper
            className="swiper-frame"
            slidesPerView={1}
            onDoubleClick={doubleClickLike}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {!!feed.images.length &&
              feed.images.map((img, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-item">
                    <img src={img} alt="" />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          {feed.images.length > 1 && (
            <div className="pagination">
              <span>{activeIndex + 1}</span>
              {` / ${feed.images.length}`}
            </div>
          )}
          <button onClick={handleLikeBtn}>
            <img
              src={like ? likeIcon : unlikeIcon}
              alt={like ? '좋아요' : '좋아요 취소'}
            />
          </button>
        </div>
        <strong>{feed.title}</strong>
        <p>{feed.text}</p>
        <time>{feed.time}</time>
      </StyledFeed>
      {isModalOpen && nickname === feed.nickname ? (
        <DeleteFeedModal setIsModalOpen={setIsModalOpen} feedId="" />
      ) : (
        isModalOpen && <ReportModal setIsModalOpen={setIsModalOpen} feedId="" />
      )}
    </>
  );
};

export default FeedItem;
