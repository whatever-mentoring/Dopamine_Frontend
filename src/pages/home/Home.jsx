import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { getTodayChallenge } from '../../api/challenge';
import { getMember } from '../../api/member';
import { getFeedsByLikeCount } from '../../api/feed';

import TabBar from '../../components/common/TabBar/TabBar';
import { SButton } from '../../components/common/Buttons';
import StatusAlert from '../../components/common/statusAlert/StatusAlert';
import ProofModal from '../../components/common/modal/ProofModal';
import {
  ChallengeSection,
  ReportSection,
  FeedSection,
  StyledHome,
} from './StyledHome';
import logoIcon from '../../assets/images/logo-icon-line.png';
import tooltipIcon from '../../assets/icons/tooltip.svg';

const Home = () => {
  // renderProofStatus 추가 '챌린지 인증에 실패했어요'
  const { nickname, level, renderJoinStatus, setRenderJoinStatus } =
    useContext(UserContext);
  const [challengeList, setChallengeList] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const setData = async () => {
      // 오늘의 챌린지
      const challengeRes = await getTodayChallenge();
      console.log(challengeRes);
      const challengeData = await challengeRes.text();
      console.log(challengeData);
      // 피드(좋아요순)
      const feedRes = await getFeedsByLikeCount();
      const feedData = await feedRes.text();
      console.log(feedData);
    };

    setData();
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
        {renderJoinStatus ? (
          <StatusAlert
            success="true"
            message="회원가입이 완료되었어요."
            setRenderStatus={setRenderJoinStatus}
          ></StatusAlert>
        ) : null}
        <ChallengeSection>
          <img className="earth" src={logoIcon} alt="지구 아이콘" />
          <h2 className="a11y-hidden">오늘의 챌린지</h2>
          {level && (
            <div className="level-name">
              {level.name} {nickname}님
            </div>
          )}
          <span className="tit">
            <h2>오늘의 챌린지</h2>에요:)
          </span>

          <ul>
            {!!challengeList.length &&
              challengeList.map((challenge, i) => {
                return (
                  <li key={i}>
                    <div>
                      <span>난이도 하</span>
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
          <img className="tooltip" src={tooltipIcon} alt="툴팁" />
          {isModalOpen && <ProofModal setIsModalOpen={setIsModalOpen} />}
        </ChallengeSection>

        {level && (
          <ReportSection $fillPercent={100 - level.expPercent}>
            <h2>나의 기록</h2>
            <article>
              <div>
                <img src={level.badge} alt={`${level.name} 뱃지`} />
                <span className="level">
                  Level. <strong>{level.num}</strong>
                </span>
                <span className="cnt">
                  완료 횟수 <strong>{level.successCnt}</strong>
                </span>
                <span className="exp">
                  내 경험치 <strong>{level.exp}</strong>
                </span>
              </div>
              <div
                aria-label={`레벨업까지 남은 경험치 ${level.expPercent}%`}
                className="exp-bar"
              >
                <span></span>
              </div>
            </article>
          </ReportSection>
        )}

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
