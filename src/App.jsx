import './App.css';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MissionCertification from './MissionCertification';
import Join from './join'; // 공백을 제거하여 올바른 파일 경로로 임포트합니다.

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mission" element={<MissionCertification />}></Route>
          <Route path="/join" element={<Join />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
