import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import ChallengeProvider from './context/ChallengeContext';
import Home from './pages/home/Home';
import Feed from './pages/feed/Feed';
import My from './pages/my/My';
import MissionCertification from './pages/mission/MissionCertification';

function App() {
  return (
    <>
      <GlobalStyle />
      <ChallengeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/feed" element={<Feed />}></Route>
            <Route path="/my" element={<My />}></Route>
            <Route path="/mission" element={<MissionCertification />}></Route>
          </Routes>
        </BrowserRouter>
      </ChallengeProvider>
    </>
  );
}

export default App;
