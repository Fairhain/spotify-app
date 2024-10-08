import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Callback from './components/api/auth/callback';
import NavBar from './components/nav/navbar';
import UserPlaylists from './components/api/get/userplaylists';
import TopArtists from './components/api/get/topartists';
import TopTracks from './components/api/get/toptracks';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <NavBar/>
        </div>} />
        <Route path="/callback" element={<div>
          <NavBar/>
          <Callback />
        </div>} />
        <Route path="/playlists" element={<div>
          <NavBar/>
          <UserPlaylists />
        </div>} />
        <Route path="/artists" element={<div>
          <NavBar/>
          <TopArtists />
        </div>} />
        <Route path="/tracks" element={
          <div>
            <NavBar/>
            <TopTracks/>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;