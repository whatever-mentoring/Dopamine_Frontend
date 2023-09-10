import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MissionCertification.css';
// import { FaArrowLeft, FaTimes } from 'react-icons/fa'; // 아이콘 라이브러리에서 아이콘을 가져오기.

function MissionCertification() {
  const handleGoBack = () => {
    // 이전 페이지로 이동하는 로직 추가하기!
    // 예: history.push('/previousPage');
  };

  const handleClose = () => {
    // 화면을 닫는 로직을 추가하기!
  };

  return (
    <header className="mission-header">
      <div className="mission-header-content">
        <button className="icon-button" onClick={handleGoBack}>
          {/* 이전 페이지로 가는 아이콘 */}
          {/* <FaArrowLeft />  */}
        </button>
        미션 인증
        <button className="icon-button" onClick={handleClose}>
          {/* 화면을 닫는 아이콘 */}
          {/* <FaTimes /> */}
        </button>
      </div>
    </header>
  );
}

export default MissionCertification;

// function App() {
//   return (
//     <div className="app">
//       <MissionCertification />
//       {/* 이어서 미션 인증 페이지의 내용 추가하기. */}
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
