import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginWithSpotify from './components/api/authredirect';
import Callback from './components/api/callback';
import NavBar from './components/nav/navbar';
import UserPlaylists from './components/api/userplaylists';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <NavBar/>
          <LoginWithSpotify/>
        </div>} />
        <Route path="/callback" element={<div>
          <NavBar/>
          <Callback />
        </div>} />
        <Route path="/playlists" element={<div>
          <NavBar/>
          <UserPlaylists />
        </div>} />
      </Routes>
    </Router>
  );
};

export default App;