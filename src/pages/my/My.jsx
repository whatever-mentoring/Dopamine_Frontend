import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import TabBar from '../../components/common/TabBar/TabBar';
import settingIcon from '../../assets/icons/setting.svg';
import { ProfileSection, ProofSection, StyledMy } from './StyledMy';
import StyledSelectBtn from '../../components/common/select/StyledSelectBtn';
import openIcon from '../../assets/icons/open.svg';

import FilterModal from './FilterModal';
import { getFeedsByMember, getFeedsByMonth } from '../../api/feed';
const My = () => {
  const { nickname, level } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOpt, setFilterOpt] = useState('전체보기');
  const [feedList, setFeedList] = useState([]);

  const getFeedData = async () => {
    if (filterOpt === '전체보기') {
      const res = await getFeedsByMember();
      const json = await res.json();
      if (json.length < 9) {
        setStopReq(true);
      } else {
        setStopReq(false);
      }
      return json;
    } else {
      const opt = filterOpt.split('년 ');
      opt[1] = parseInt(opt[1]).toString().padStart(2, '0');
      const res = await getFeedsByMonth(opt.join('-'));
      setStopReq(true);
      return await res.json();
    }
  };

  useEffect(() => {
    try {
      const data = getFeedData();
      setFeedList(data);
    } catch (error) {
      console.error(error);
    }
  }, [filterOpt]);

  // 무한 스크롤
  const [page, setPage] = useState(0);
  const [stopReq, setStopReq] = useState(false);

  useEffect(() => {
    const addFeedList = () => {
      if (stopReq || filterOpt !== '전체보기') {
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
  }, [page, filterOpt]);

  return (
    <>
      <StyledMy>
        <h1 className="a11y-hidden">challenG9 | 마이페이지</h1>
        <ProfileSection $fillPercent={100 - level.expPercent}>
          <div className="top-wrap">
            <h2>내 정보</h2>
            <Link to="/my/setting">
              <img src={settingIcon} alt="설정" />
            </Link>
          </div>
          <div className="profile">
            <img src={level.badge} alt={`${nickname} 뱃지`} />
            <p>
              <span>
                {level.name} {nickname}님
              </span>
              <span>잘하고 계시는 군요!</span>
            </p>
          </div>
          <div className="exp-bar"></div>
          <div className="txt-wrap">
            <span>
              Level. <span>{level.num}</span>
            </span>
            <span className="cnt">
              완료 횟수 <span>{level.successCnt}</span>
            </span>
            <span>
              내 경험치 <span>{level.exp}</span>
            </span>
          </div>
        </ProfileSection>
        <ProofSection>
          <div className="top-wrap">
            <h2>나의 인증기록</h2>
            <span>{level.successCnt}</span>
            <StyledSelectBtn
              className={isModalOpen ? 'select-btn on' : 'select-btn'}
              onClick={() => setIsModalOpen(true)}
            >
              {filterOpt}
              <img
                src={openIcon}
                alt=""
                className={isModalOpen ? 'open' : null}
              />
            </StyledSelectBtn>
            {isModalOpen && (
              <FilterModal
                filterOpt={filterOpt}
                setFilterOpt={setFilterOpt}
                setIsModalOpen={setIsModalOpen}
              />
            )}
          </div>

          <ul>
            {feedList.length
              ? feedList.map((v, i) => {
                  return (
                    <li key={i}>
                      <img src={v.src} alt="" />
                    </li>
                  );
                })
              : null}
          </ul>
        </ProofSection>
      </StyledMy>
      <TabBar />
    </>
  );
};

export default My;
