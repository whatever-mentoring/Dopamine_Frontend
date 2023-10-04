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
  const [like, setLike] = useState(feed.likePresent);
  const [likeCnt, setLikeCnt] = useState(feed.likePresent);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setLikeCnt(feed.feedLikeResponseDTOList.length);
  }, []);

  const handleLikeBtn = async () => {
    try {
      if (like) {
        await unLikeFeed(feed.feedId);
        setLike(false);
        setLikeCnt(likeCnt - 1);
      } else {
        setLike(true);
        await likeFeed(feed.feedId);
        setLike(true);
        setLikeCnt(likeCnt + 1);
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
        setLikeCnt(likeCnt + 1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <StyledFeed $moreIcon={moreIcon}>
        <div className="top">
          <img src={feed.badgeimage} alt="프로필 사진" />
          <span>{feed.memberResponseDto.nickname}</span>
          <button
            className="more"
            aria-label="더보기"
            onClick={() => setIsModalOpen(true)}
          ></button>
        </div>
        <div className="img-wrap">
          <Swiper
            className="swiper-frame"
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
        </div>

        <button onClick={handleLikeBtn} className="like">
          <img
            src={like ? likeIcon : unlikeIcon}
            alt={like ? '좋아요' : '좋아요 취소'}
          />
          {likeCnt} likes
        </button>
        <strong>{feed.challengeResponseDTO.title}</strong>
        <p>{feed.content}</p>
        <time>{feed.createdDate[1] + '월 ' + feed.createdDate[2] + '일'}</time>
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
