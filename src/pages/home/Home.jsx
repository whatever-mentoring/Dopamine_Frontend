import { Swiper, SwiperSlide } from 'swiper/react';
import TabBar from '../../components/common/TabBar/TabBar';
import { MButton } from '../../components/common/Buttons';
import JoinStatus from '../../components/JoinStatus';
import ProofModal from './ProofModal';
import {
  StyledMain,
  ChallengeSection,
  ReportSection,
  FeedSection,
} from './StyledHome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [challengeList, setChallengeList] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // 임시
    const mission1 = new URL(
      '../../assets/images/mission1.png',
      import.meta.url
    ).href;
    const mission2 = new URL(
      '../../assets/images/mission2.png',
      import.meta.url
    ).href;
    setChallengeList([
      {
        tit: '텀블러 갖고 다니기',
        text: '일회용 사용을 줄여봐요',
        status: '미션 인증할래요',
        active: true,
        img: mission1,
      },
      {
        tit: '텀블러 갖고 다니기',
        text: '장바구니 사용하기',
        status: '내일 인증할 수 있어요',
        active: false,
        img: mission2,
      },
    ]);

    // 임시
    const homeFeed1 = new URL(
      '../../assets/images/home-feed1.png',
      import.meta.url
    ).href;
    const homeFeed2 = new URL(
      '../../assets/images/home-feed2.png',
      import.meta.url
    ).href;
    const homeFeed3 = new URL(
      '../../assets/images/home-feed3.png',
      import.meta.url
    ).href;
    setFeedList([
      {
        tit: '플라스틱 제품 대신에 다른',
        img: homeFeed1,
      },
      {
        tit: '분리수거 이렇게 열심히 해본',
        img: homeFeed2,
      },
      {
        tit: '컵 재활용해서 화분으로 썼어요',
        img: homeFeed3,
      },
    ]);
  }, []);

  return (
    <>
      <StyledMain>
        <h1 className="a11y-hidden">challenG9</h1>
        <h2 className="a11y-hidden">홈</h2>
        <JoinStatus success={true}></JoinStatus>
        <ChallengeSection>
          <h3 className="a11y-hidden">오늘의 챌린지</h3>
          <div className="level-name">새싹지킴이</div>
          <span>
            도파민님, <h3>오늘의 챌린지</h3>에요:)
          </span>

          <Swiper className="swiper-frame" spaceBetween={8}>
            {!!challengeList.length &&
              challengeList.map((challenge, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-item">
                    <img src={challenge.img} alt="" />
                    <p>{challenge.text}</p>
                    <strong>{challenge.tit}</strong>
                    <MButton
                      disabled={!challenge.active}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }}
                    >
                      {challenge.status}
                    </MButton>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          {isModalOpen && <ProofModal setIsModalOpen={setIsModalOpen} />}
        </ChallengeSection>

        <ReportSection>
          <h3>나의 기록</h3>
          <article>
            <div>
              <img src="" alt="" />
              <span className="lavel">
                Level. <strong>1</strong>
              </span>
              <span>
                총 미션완료 <strong>6</strong>
              </span>
            </div>
            <div aria-label="레벨업 스테이터스 80%" className="status-bar">
              <span></span>
            </div>
          </article>
        </ReportSection>

        <FeedSection>
          <h3 className="a11y-hidden">챌린지 피드</h3>
          <span>우리는 모여서&#127793;</span>
          <Link to="/">더보기</Link>
          <Swiper
            className="swiper-frame"
            spaceBetween={10}
            slidesPerView={2.46}
            observer={true}
            observeParents={true}
          >
            {!!feedList.length &&
              feedList.map((feed, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-item">
                    <img src={feed.img} alt="" />
                    <p className="ellipsis">{feed.tit}</p>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </FeedSection>
      </StyledMain>
      <TabBar></TabBar>
    </>
  );
};

export default Home;
