// import React from "react";
// import { Search, HelpCircle } from "lucide-react";
// import "./game.css";
// import New from './components/new.jsx'; 
// import Data from './components/data.jsx'; 
// import Footer from './components/footer.jsx'; 
// export default function App() {
//   return (
//     <>
//       {/* Header/Nav */}
//       <div className="header">
//         {/* Left section: Logo and Tabs */}
//         <div className="left-section">
//           <div className="google-play-logo">
//             <img
//               src="logo.png"
//               alt="Google Play Logo"
//               className="google-logo-icon"
//             />
//             <span className="google-logo-text">Google Play</span>
//           </div>

//           <div className="tabs">
//             <div className="tab2">Games</div>
//             <div className="tab">Apps</div>
//             <div className="tab">Kids</div>
//           </div>
//         </div>

//         {/* Right section: Icons */}
//         <div className="right-section">
//           <Search className="icon" />
//           <HelpCircle className="icon" />
//           <div className="profile">S</div>
//         </div>
//       </div>

//       {/* Main Section Below Navbar */}
//       <div className="main-content">
//         <div className="feature-card">Phone</div>
//         <div className="feature-card">Tablet</div>
//         <div className="feature-card">Tv</div>
//         <div className="feature-card">chromebook</div>
//         <div className="feature-card">Watch</div>
//         <div className="feature-card">Car</div>
//       </div>
//        {/* Calling Data pages */}
//       <Data />
//      {/* calling Top Charts */}
//       <New />
//       {/* calling footer */}
//       <Footer />
      
//     </>
  
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search, HelpCircle } from "lucide-react";
import "./game.css";
import New from './components/new.jsx';
import Data from './components/data.jsx';
import Footer from './components/footer.jsx';
import GameDetails from './components/GameDetails.jsx';

export default function App() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <div className="google-play-logo">
            <img src="logo.png" alt="Google Play Logo" className="google-logo-icon" />
            <span className="google-logo-text">Google Play</span>
          </div>

          <div className="tabs">
            <div className="tab2">Games</div>
            <div className="tab">Apps</div>
            <div className="tab">Kids</div>
          </div>
        </div>

        <div className="right-section">
          <Search className="icon" />
          <HelpCircle className="icon" />
          <div className="profile">S</div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-content">
                <div className="feature-card">Phone</div>
                <div className="feature-card">Tablet</div>
                <div className="feature-card">Tv</div>
                <div className="feature-card">Chromebook</div>
                <div className="feature-card">Watch</div>
                <div className="feature-card">Car</div>
              </div>
              <Data />
              <New />
              <Footer />
            </>
          }
        />
        <Route path="/game/:gameId" element={<GameDetails />} />
      </Routes>
    </>
  );
}
