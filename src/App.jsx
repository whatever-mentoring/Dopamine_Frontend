import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MissionCertification from './MissionCertification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mission" element={<MissionCertification />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
