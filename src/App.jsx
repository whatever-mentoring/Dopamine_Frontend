import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import ChallengeProvider from './context/ChallengeContext';
import UserProvider from './context/UserContext';

import Home from './pages/home/Home';
import Feed from './pages/feed/Feed';
import My from './pages/my/My';
import MissionCertification from './pages/mission/MissionCertification.jsx';
import MissionComplete from './pages/mission/MissionComplete';
import Redirection from './pages/Redirection';
import Splash from './pages/splash/Splash';
import Setting from './pages/my/setting/Setting';
import Nickname from './pages/nickname/nickname';

const AuthRoute = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const NonAuthRoute = () => {
  const token = localStorage.getItem('accessToken');
  console.log(token);
  if (token) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
};

function App() {
  // 토큰 유효한지 확인 코드로 추가하기

  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <ChallengeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<NonAuthRoute />}>
                <Route path="/" element={<Splash />}></Route>
                <Route path="/kakao/callback" element={<Redirection />}></Route>
              </Route>

              <Route element={<AuthRoute />}>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/feed" element={<Feed />}></Route>
                <Route path="/my" element={<My />}></Route>
                <Route path="/my/setting" element={<Setting />}></Route>
                <Route
                  path="/mission"
                  element={<MissionCertification />}
                ></Route>
                <Route
                  path="/mission/success"
                  element={<MissionComplete />}
                ></Route>
                <Route path="/join" element={<Nickname />}></Route>
                <Route path="/nickname" element={<Nickname />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ChallengeProvider>
      </UserProvider>
    </>
  );
}

export default App;
