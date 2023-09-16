import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './MissionComplete.css';



function MissionComplete() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="center-content">
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 50 50"
          fill="none"
          style={{
            display: 'block',
            margin: 'auto',
          }}
        >
          <circle cx="25" cy="25" r="24" fill="#02B550" />
          <path
            d="M15 25L22 32L36 18"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="comp-title">
          인증완료!
        </div>

        <div className="comp-sub">
          챌린지피드에 정상적으로 업로드 됐어요!
        </div>
        <div className="comp-sub2">
          내일도 함께 도전해요!
        </div>
      </div>

      {/* 홈으로 돌아가기 버튼 */}
      <footer className="gohome-bottom-bar">
        <button className="gohome-button" onClick={() => navigate('/')}>
          홈으로 돌아가기
        </button>
      </footer>
    </div>
  );
}

export default MissionComplete;
