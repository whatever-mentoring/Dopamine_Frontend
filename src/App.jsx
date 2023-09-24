import './App.css';
import 'swiper/css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import StatusProvider from './context/StatusContext';
import ChallengeProvider from './context/ChallengeContext';
import UserProvider from './context/UserContext';
import FeedProvider from './context/FeedContext';

import Home from './pages/home/Home';
import Feed from './pages/feed/Feed';
import My from './pages/my/My';
import MissionCertification from './pages/mission/MissionCertification.jsx';
import MissionComplete from './pages/mission/MissionComplete';
import Redirection from './pages/Redirection';
import Splash from './pages/splash/Splash';
import Setting from './pages/my/setting/Setting';
import Nickname from './pages/nickname/nickname';
import Policy from './pages/policy/Policy';
import MyFeed from './pages/my/myFeed/MyFeed';
import Permission from './pages/permission/Permission';
import { getMember } from './api/member';

const AuthRoute = () => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  if (!token) {
    return <Navigate to="/" replace />;
  } else {
    (async () => {
      try {
        // 토큰 유효성
        const res = await getMember();
        if (res.status !== 200) {
          localStorage.clear();
          navigate('/');
        }
      } catch (error) {
        console.error(error);
        localStorage.clear();
        navigate('/');
      }
    })();
  }

  return <Outlet />;
};

const NonAuthRoute = () => {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  if (token) {
    (async () => {
      try {
        // 토큰 유효성
        const res = await getMember();
        navigate('/home');
        if (res.status !== 200) {
          localStorage.clear();
        }
      } catch (error) {
        console.error(error);
        localStorage.clear();
      }
    })();
  }
  return <Outlet />;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <StatusProvider>
          <ChallengeProvider>
            <FeedProvider>
              <BrowserRouter>
                <Routes>
                  <Route element={<NonAuthRoute />}>
                    <Route path="/" element={<Splash />}></Route>
                    <Route
                      path="/kakao/callback"
                      element={<Redirection />}
                    ></Route>
                  </Route>

                  <Route element={<AuthRoute />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/feed" element={<Feed />}></Route>
                    <Route path="/my" element={<My />}></Route>
                    <Route path="/my/feed/:id" element={<MyFeed />}></Route>
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
                    <Route path="/policy" element={<Policy />}></Route>
                    <Route path="/permission" element={<Permission />}></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </FeedProvider>
          </ChallengeProvider>
        </StatusProvider>
      </UserProvider>
    </>
  );
}

export default App;
