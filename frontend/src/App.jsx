import { Routes, Route, Navigate } from 'react-router-dom';
import AppSection from './apps_page/apps.jsx';
import KidsSection from './kids_page/KidsSection.jsx';
import Game from './game.jsx';
import LoginPage from './components/login.jsx'; 
import SignupPage from './components/signup.jsx';
import GameDetailPage from './components/GameDetailPage';
import { createContext, useContext, useState } from "react";

// Auth context for global authentication state
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// ProtectedRoute component
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  // Persist auth state in localStorage for demo
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Routes>
        <Route path="/" element={<Navigate to="/games" />} />
        <Route path="/apps" element={<AppSection />} />
        <Route path="/kids" element={<KidsSection />} />
        <Route path="/games" element={<Game />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
        {/* Protect GameDetailPage as an example */}
        <Route path="/games/block-blast" element={
          <ProtectedRoute>
            <GameDetailPage />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
