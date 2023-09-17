import { useEffect, useState } from 'react';
import TabBar from '../../components/common/TabBar/TabBar';
import FeedItem from '../../components/common/feedItem/FeedItem';
import { StyledMain } from './StyledMain';
import { StyledHeader } from './StyledHeader';
import uploadIcon from '../../assets/icons/upload.svg';
import StyledSelect from '../../components/common/StyledSelectBtn';
import openIcon from '../../assets/icons/open.svg';

import SortModal from './SortModal';
import ChallengeSelectModal from '../../components/common/modal/ChallengeSelectModal';

import { ChallengeContext } from '../../context/ChallengeContext';
import { useContext } from 'react';

import feedTestImg from '../../assets/images/feed-test.png';
import profileTestImg from '../../assets/images/profile-test.png';

const Feed = () => {
  const [feedList, setFeedList] = useState([]);
  const [sortOpt, setSortOpt] = useState('최신순');
  const [isSortSelectOn, setIsSortSelectOn] = useState(false);
  const [skipNum, setSkipNum] = useState(0);
  const [isChallengeSelectModalOpen, setIsChallengeSelectModalOpen] =
    useState(false);
  console.log(document.cookie);

  const { challengeToProve } = useContext(ChallengeContext);

  useEffect(() => {
    // api 요청
    setFeedList([
      {
        profileImg: profileTestImg,
        nickname: '닉네임',
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
    setSkipNum(10);
  }, []);

  // 무한 스크롤
  useEffect(() => {
    const addFeedList = () => {
      // 더 렌더링할 리스트가 없으면 얼리리턴

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // 바닦에 닿기 20px 전 추가 렌더링
      if (scrollHeight - scrollTop <= clientHeight + 20) {
        console.log(skipNum);
        // api 요청
        // setFeedList([...feedList]);
        setSkipNum(skipNum + 10);
      }
    };

    window.addEventListener('scroll', addFeedList);

    return () => window.removeEventListener('scroll', addFeedList);
  }, [skipNum, feedList]);

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

<StyledSelect
          className={isSortSelectOn ? 'select-btn on' : 'select-btn'}
          // onClick : 탭, 스페이스 포함
          onClick={() => setIsSortSelectOn(true)}
        >
          {sortOpt}
          <img
            src={openIcon}
            alt=""
            className={isSortSelectOn ? 'open' : null}
          />
        </StyledSelect>
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
