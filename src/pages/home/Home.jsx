import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { ChallengeContext } from '../../context/ChallengeContext';
import { FeedContext } from '../../context/FeedContext';
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
import { StatusContext } from '../../context/StatusContext';
import successIcon from '../../assets/icons/success-true.svg';

const Home = () => {
  const navigate = useNavigate();
  const { nickname, level } = useContext(UserContext);
  const { setFeedSortOpt } = useContext(FeedContext);
  const {
    renderJoinStatus,
    setRenderJoinStatus,
    renderChallengeStatus,
    setRenderChallengeStatus,
  } = useContext(StatusContext);
  const {
    setSelectedChallengeIndex,
    challengeList,
    challengeDate,
    setChallengeData,
  } = useContext(ChallengeContext);
  const [feedList, setFeedList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const feedRes = await getFeedsByLikeCount();
        const feedData = await feedRes.json();
        setFeedList(feedData.slice(0, 6));

        const today = new Date().getDate();
        if (challengeDate !== today) {
          await setChallengeData();
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    let status = false;
    const closeTooltip = (e) => {
      if (!status) {
        status = true;
        return;
      }

      if (!e.target.closest('.tootip')) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      window.addEventListener('click', closeTooltip);
    }

    return () => window.removeEventListener('click', closeTooltip);
  }, [showTooltip]);

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
        {renderChallengeStatus ? (
          <StatusAlert
            success="false"
            message="챌린지 인증에 실패했어요."
            setRenderStatus={setRenderChallengeStatus}
          ></StatusAlert>
        ) : null}
        <ChallengeSection $successIcon={successIcon}>
          <img className="earth" src={logoIcon} alt="지구 아이콘" />
          <h2 className="a11y-hidden">오늘의 챌린지</h2>
          {level.num ? (
            <div className="level-name">
              {level.name} {nickname}님
            </div>
          ) : null}
          <span className="tit">
            <h2>오늘의 챌린지</h2>에요:)
          </span>

          <ul>
            {challengeList.length
              ? challengeList.map((challenge, i) => {
                  return (
                    <li key={i}>
                      <div>
                        <span className={challenge.challengeLevel}>
                          난이도{' '}
                          {challenge.challengeLevel === 'HIGH'
                            ? '상'
                            : challenge.challengeLevel === 'MID'
                            ? '중'
                            : '하'}
                        </span>
                        <strong>{challenge.title}</strong>
                      </div>
                      <SButton
                        disabled={!!challenge.certificationYn}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsModalOpen(true);
                          setSelectedChallengeIndex(i);
                        }}
                      >
                        {challenge.certificationYn ? '인증완료' : '인증하기'}
                      </SButton>
                    </li>
                  );
                })
              : null}
          </ul>
          <img
            className="tooltip-icon"
            src={tooltipIcon}
            alt="툴팁"
            onClick={() => setShowTooltip(true)}
            onTouchStart={() => setShowTooltip(true)}
          />
          {showTooltip ? (
            <p className="tooltip">
              Tip! 난이도가 높을수록 경험치가 더 빨리 쌓여요.
              <strong>
                <span>상 +20 exp</span>
                <span>중 +10 exp</span>
                <span>하 +5 exp</span>
              </strong>
            </p>
          ) : null}
          {isModalOpen && <ProofModal setIsModalOpen={setIsModalOpen} />}
        </ChallengeSection>

        {level.num ? (
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
        ) : null}

        <FeedSection>
          <h2 className="a11y-hidden">챌린지 피드</h2>
          <span>함께하는 챌린이들</span>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              setFeedSortOpt('좋아요순');
              navigate('/feed');
            }}
          >
            더보기
          </Link>
          {feedList.length ? (
            <Swiper
              className="swiper-frame"
              spaceBetween={10}
              slidesPerView={2.46}
              observer={true}
              observeParents={true}
            >
              {feedList.map((feed, i) => {
                return (
                  <SwiperSlide key={i} className="swiper-item">
                    <Link to={'/feed'}>
                      <img src={feed.image1Url} alt="" />
                      <p className="ellipsis">
                        {feed.challengeResponseDTO.title}
                      </p>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <p>업로드된 인증글이 없어요.</p>
          )}
        </FeedSection>
      </StyledHome>
      <TabBar></TabBar>
    </>
  );
};

export default Home;
