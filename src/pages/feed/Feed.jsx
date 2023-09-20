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

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [sortOpt, setSortOpt] = useState('최신순');
  const [isSortSelectOn, setIsSortSelectOn] = useState(false);
  const [page, setPage] = useState(1);
  const [stopReq, setStopReq] = useState(false);
  const [isChallengeSelectModalOpen, setIsChallengeSelectModalOpen] =
    useState(false);

  const {} = useContext(ChallengeContext);

  const getData = async () => {
    let res;
    if (sortOpt === '최신순') {
      res = await getFeedsByDate(page);
    } else if (sortOpt === '좋아요순') {
      res = await getFeedsByLikeCount(page);
    }

    const json = await res.json();
    if (json.length < 9) {
      setStopReq(true);
    } else {
      setPage(page + 1);
    }

    return json;
  };

  useEffect(() => {
    setPage(1);
  }, [sortOpt]);

  useEffect(() => {
    if (page === 1) {
      (async () => {
        const data = await getData();
        setFeedList(data);
        setStopReq(false);
      })();
    }

    // 무한 스크롤
    const addFeedList = () => {
      if (stopReq) {
        return;
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // 바닥에 닿기 20px 전 추가 렌더링
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        console.log(page);
        (async () => {
          window.removeEventListener('scroll', addFeedList);
          const data = await getData();
          setFeedList([...feedList, ...data]);
        })();
      }
    };

    window.addEventListener('scroll', addFeedList);
    return () => window.removeEventListener('scroll', addFeedList);
  }, [page]);

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
