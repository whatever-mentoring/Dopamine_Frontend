import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import ChallengeProvider from './context/ChallengeContext';
import Home from './pages/home/Home';
import Join from './pages/join/Join';
import Feed from './pages/feed/Feed';
import My from './pages/my/My';
import MissionCertification from './pages/mission/MissionCertification';
import MissionComplete from './pages/mission/MissionComplete';
import Redirection from './pages/Redirection';
import Splash from './pages/splash/Splash';

function App() {
  return (
    <>
      <GlobalStyle />
      <ChallengeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/my" element={<My />}></Route>
            <Route path="/mission" element={<MissionCertification />}></Route>
            <Route path="/mission2" element={<MissionComplete />}></Route>
            <Route path="/kakao/callback" element={<Redirection />}></Route>
            <Route path="/join" element={<Join />}></Route>
          </Routes>
        </BrowserRouter>
      </ChallengeProvider>
    </>
  );
}

export default App;
