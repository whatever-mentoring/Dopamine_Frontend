import React, { useState } from 'react';
import TabBar from '../../components/common/TabBar/TabBar';
import styled from 'styled-components';
import settingIcon from '../../assets/icons/setting.svg';
import { ProfileSection, ProofSection, StyledMy } from './StyledMy';
import StyledSelect from '../../components/common/StyledSelectBtn';
import openIcon from '../../assets/icons/open.svg';

// UI를 위한 임시
import testImg1 from '../../assets/images/my-test1.png';
import testImg2 from '../../assets/images/my-test2.png';
import testImg3 from '../../assets/images/my-test3.png';

const My = () => {
  const level = 2;
  const completionCount = 6;
  const [isSelectOn, setIsSelectOn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOpt, setFilterOpt] = useState('전체보기');
  const [feedList, setFeedList] = useState([
    { src: testImg1 },
    { src: testImg2 },
    { src: testImg3 },
    { src: testImg1 },
    { src: testImg2 },
    { src: testImg3 },
    { src: testImg1 },
    { src: testImg2 },
    { src: testImg3 },
  ]);

  function calculateExperience(level, completionCount) {
    return level * 100 + completionCount * 10;
  }

  return (
    <>
      <StyledMy>
        <h1 className="a11y-hidden">challenG9 | 마이페이지</h1>
        <ProfileSection fillPercentage={70}>
          <div className="top-wrap">
            <h2>내 정보</h2>
            <button>
              <img src={settingIcon} alt="설정" />
            </button>
          </div>
          <div className="profile">
            <img src="" alt="프로필 사진" />
            <p>
              <span>새싹지킴이 도파민님</span>
              <span>잘하고 계시는 군요!</span>
            </p>
          </div>
          <div className="gauge-bar"></div>
          <div className="txt-wrap">
            <span>
              Level. <span>2</span>
            </span>
            <span className="cnt">
              완료 횟수 <span>6</span>
            </span>
            <span>
              내 경험치 <span>6</span>
            </span>
          </div>
        </ProfileSection>
        <ProofSection>
          <div className="top-wrap">
            <h2>나의 인증기록</h2>
            <span>31</span>
            <StyledSelect
              className={isSelectOn ? 'select-btn on' : 'select-btn'}
              onClick={() => setIsModalOpen(true)}
            >
              {filterOpt}
              <img
                src={openIcon}
                alt=""
                className={isSelectOn ? 'open' : null}
              />
            </StyledSelect>
          </div>

          <ul>
            {feedList.length &&
              feedList.map((v, i) => {
                return (
                  <li key={i}>
                    <img src={v.src} alt="" />
                  </li>
                );
              })}
          </ul>
        </ProofSection>
      </StyledMy>
      <TabBar />
    </>
  );
};

export default My;
