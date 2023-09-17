import { Swiper, SwiperSlide } from 'swiper/react';
import TabBar from '../../components/common/TabBar/TabBar';
import { SButton } from '../../components/common/Buttons';
import JoinStatus from '../../components/JoinStatus';
import ProofModal from '../../components/common/modal/ProofModal';
import {
  ChallengeSection,
  ReportSection,
  FeedSection,
  StyledHome,
} from './StyledHome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/logo-icon-line.png';

const Home = () => {
  const [challengeList, setChallengeList] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function setCookie(cookie_name, value, days) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정

    var cookie_value =
      escape(value) + (days == null ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
  }
  setCookie('myHobby', 'game', '3');

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
      <StyledHome>
        <h1 className="a11y-hidden">challenG9 | 홈</h1>
        <JoinStatus success={true}></JoinStatus>
        <ChallengeSection>
          <img src={logoIcon} alt="지구 아이콘" />
          <h2 className="a11y-hidden">오늘의 챌린지</h2>
          <div className="level-name">새싹지킴이 도파민님</div>
          <span className="tit">
            <h2>오늘의 챌린지</h2>에요:)
          </span>

          <ul>
            {!!challengeList.length &&
              challengeList.map((challenge, i) => {
                return (
                  <li key={i}>
                    <div>
                      <p>난이도 하</p>
                      <strong>{challenge.tit}</strong>
                    </div>
                    <SButton
                      disabled={!challenge.active}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }}
                    >
                      인증하기
                    </SButton>
                  </li>
                );
              })}
          </ul>
          {isModalOpen && <ProofModal setIsModalOpen={setIsModalOpen} />}
        </ChallengeSection>

        <ReportSection>
          <h2>나의 기록</h2>
          <article>
            <div>
              <img src="" alt="" />
              <span className="level">
                Level. <strong>1</strong>
              </span>
              <span className="cnt">
                완료 횟수 <strong>6</strong>
              </span>
              <span className="exp">
                내 경험치 <strong>6</strong>
              </span>
            </div>
            <div aria-label="레벨업 스테이터스 80%" className="status-bar">
              <span></span>
            </div>
          </article>
        </ReportSection>

        <FeedSection>
          <h2 className="a11y-hidden">챌린지 피드</h2>
          <span>함께하는 챌린이들</span>
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
      </StyledHome>
      <TabBar></TabBar>
    </>
  );
};

export default Home;
