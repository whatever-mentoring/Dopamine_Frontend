import { useLocation } from 'react-router-dom';
import CloseTopBar from '../../../components/common/TopBar/BackTopBar';
import FeedItem from '../../../components/common/feedItem/FeedItem';
import { useEffect, useState } from 'react';
import { getFeed } from '../../../api/feed';
import StyledMain from './StyledMain';

const MyFeed = () => {
  const id = useLocation().pathname.slice(9);
  const [feed, setFeed] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await getFeed(id);
        const json = await res.json();
        setFeed(json);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <CloseTopBar tit="나의 인증기록" />
      <StyledMain>{feed.feedId ? <FeedItem feed={feed} /> : null}</StyledMain>
    </>
  );
};

export default MyFeed;
