import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useContext, useEffect } from 'react';
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

  const handleLikeBtn = async () => {
    try {
      if (like) {
        const res = await unLikeFeed(feed.feedId);
        setLike(false);
      } else {
        setLike(true);
        const res = await likeFeed(feed.feedId);
        console.log(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const doubleClickLike = async () => {
    if (!like) {
      try {
        await likeFeed(feed.feedId);
        setLike(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // console.log(feed.feedLikeResponseDTOList);
    setLike(false);
  }, []);

  return (
    <>
      <StyledFeed $moreIcon={moreIcon}>
        <div className="top">
          <img src={''} alt="프로필 사진" />
          <span>{feed.memberResponseDto.nickname}</span>
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
            {feed.image1Url && (
              <SwiperSlide className="swiper-item">
                <img src={feed.image1Url} alt="" />
              </SwiperSlide>
            )}
            {feed.image2Url && (
              <SwiperSlide className="swiper-item">
                <img src={feed.image2Url} alt="" />
              </SwiperSlide>
            )}
            {feed.image3Url && (
              <SwiperSlide className="swiper-item">
                <img src={feed.image2Url} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
          <div className="pagination">
            <span>{activeIndex + 1}</span>
            {feed.image3Url ? ' / 3' : feed.image2Url ? ' / 2' : ' / 1'}
          </div>
          <button onClick={handleLikeBtn}>
            <img
              src={like ? likeIcon : unlikeIcon}
              alt={like ? '좋아요' : '좋아요 취소'}
            />
          </button>
        </div>
        <strong>{feed.challengeResponseDTO.title}</strong>
        <p>{feed.text}</p>
        <time>{feed.content}</time>
      </StyledFeed>
      {isModalOpen && nickname === feed.memberResponseDto.nickname ? (
        <DeleteFeedModal setIsModalOpen={setIsModalOpen} feedId={feed.feedId} />
      ) : (
        isModalOpen && (
          <ReportModal setIsModalOpen={setIsModalOpen} feedId={feed.feedId} />
        )
      )}
    </>
  );
};

export default FeedItem;
