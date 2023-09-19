import { useEffect, useState, useContext } from 'react';
import { ChallengeContext } from '../../context/ChallengeContext';
import TabBar from '../../components/common/TabBar/TabBar';
import FeedItem from '../../components/common/feedItem/FeedItem';
import ChallengeSelectModal from '../../components/common/modal/ChallengeSelectModal';
import SortModal from './SortModal';
import { StyledMain } from './StyledMain';
import { StyledHeader } from './StyledHeader';
import uploadIcon from '../../assets/icons/upload.svg';
import StyledSelectBtn from '../../components/common/select/StyledSelectBtn';
import openIcon from '../../assets/icons/open.svg';

import { getFeedsByDate, getFeedsByLikeCount } from '../../api/feed';

import feedTestImg from '../../assets/images/feed-test.png';
import profileTestImg from '../../assets/images/profile-test.png';

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [sortOpt, setSortOpt] = useState('최신순');
  const [isSortSelectOn, setIsSortSelectOn] = useState(false);
  const [page, setPage] = useState(0);
  const [stopReq, setStopReq] = useState(false);
  const [isChallengeSelectModalOpen, setIsChallengeSelectModalOpen] =
    useState(false);

  const { challengeToProve } = useContext(ChallengeContext);

  const getData = async () => {
    let res;
    if (sortOpt === '최신순') {
      res = await getFeedsByDate();
    } else if (sortOpt === '좋아요순') {
      res = await getFeedsByLikeCount();
    }

    const json = await res.json();
    console.log(json);

    if (json.length < 9) {
      setStopReq(true);
    }

    return json;
  };

  useEffect(() => {
    // const data = getData()
    // setFeedList(data)
    setStopReq(false);
    // 임시
    setFeedList([
      {
        profileImg: profileTestImg,
        nickname: '하연',
        images: [feedTestImg, feedTestImg, feedTestImg],
        title: '참여 챌린지 이름',
        text: '들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자',
        time: '9월 9일',
      },
      {
        profileImg: profileTestImg,
        nickname: '닉네임',
        images: [feedTestImg],
        title: '참여 챌린지 이름',
        text: '들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자 들어가는 내용 최대 100자',
        time: '9월 9일',
      },
    ]);
    setPage(1);
  }, [sortOpt]);

  // 무한 스크롤
  useEffect(() => {
    const addFeedList = () => {
      if (stopReq) {
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // 바닦에 닿기 20px 전 추가 렌더링
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        console.log(page);
        // const data = getData()
        // setFeedList([...feedList, data]);
        setPage(page + 1);
      }
    };

    window.addEventListener('scroll', addFeedList);

    return () => window.removeEventListener('scroll', addFeedList);
  }, [page, feedList]);

  return (
    <>
      <StyledHeader>
        <h1 className="a11y-hidden">challenG9 챌린지 피드</h1>
        <h2>함께하는 챌린이들</h2>
        <button
          aria-label="챌린지 인증"
          onClick={() => setIsChallengeSelectModalOpen(true)}
        >
          <img src={uploadIcon} alt="업로드" />
        </button>
      </StyledHeader>
      <StyledMain>
        {isChallengeSelectModalOpen && (
          <ChallengeSelectModal
            setIsModalOpen={setIsChallengeSelectModalOpen}
          />
        )}

        <StyledSelectBtn
          className={isSortSelectOn ? 'select-btn on' : 'select-btn'}
          onClick={() => setIsSortSelectOn(true)}
        >
          {sortOpt}
          <img
            src={openIcon}
            alt=""
            className={isSortSelectOn ? 'open' : null}
          />
        </StyledSelectBtn>
        {isSortSelectOn && (
          <SortModal
            setIsModalOpen={setIsSortSelectOn}
            setSortOpt={setSortOpt}
          />
        )}

        {!!feedList.length &&
          feedList.map((feed, i) => {
            return <FeedItem feed={feed} key={i} />;
          })}
      </StyledMain>
      <TabBar></TabBar>
    </>
  );
};

export default Feed;
