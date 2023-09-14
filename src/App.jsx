import './App.css';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Feed from './pages/feed/Feed';
import My from './pages/my/My';
import MissionCertification from './pages/mission/MissionCertification';
import Redirection from './pages/Redirection';
import Splash from './pages/splash/Splash';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/my" element={<My />}></Route>
          <Route path="/mission" element={<MissionCertification />}></Route>
          <Route path="/splash" element={<Splash />}></Route>
          <Route path="/kakao/callback" element={<Redirection />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
