import React, { useState } from 'react';
import './App.css';

function App() {
  // 버튼 클릭 여부를 상태로 관리
  const [isClicked, setIsClicked] = useState(false);

  // 버튼을 클릭할 때 실행되는 함수
  const handleClick = () => {
    setIsClicked(!isClicked); // 버튼 상태를 토글npm start

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>리액트 버튼 예제</h1>
        <p>버튼을 클릭해보세요!</p>
        <button onClick={handleClick}>{isClicked ? '클릭됨' : '클릭 안됨'}</button>
      </header>
    </div>
  );
}

export default App;
