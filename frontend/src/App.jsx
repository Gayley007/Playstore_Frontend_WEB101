import { Routes, Route, Navigate } from 'react-router-dom';
import AppSection from './apps_page/apps.jsx';
import KidsSection from './kids_page/KidsSection.jsx';
import Game from './game.jsx';
import LoginPage from './components/login.jsx'; 
import SignupPage from './components/signup.jsx';
import GameDetailPage from './components/GameDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/games" />} />
      <Route path="/apps" element={<AppSection />} />
      <Route path="/kids" element={<KidsSection />} />
      <Route path="/games" element={<Game />} />
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/signup" element={<SignupPage />} /> 
      <Route path="/games/block-blast" element={<GameDetailPage />} />
    </Routes>
  );
}

export default App;
