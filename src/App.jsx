import './App.css';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MissionCertification from './MissionCertification';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
         <Route path="/mission" element={<MissionCertification />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
