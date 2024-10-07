// AuthRedirect.tsx
import React from 'react';

const CLIENT_ID = 'cc0d6b182b0c47828f0fae661633ba7d';
const REDIRECT_URI = 'http://localhost:5173/callback'; // Replace with your redirect URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'code';
const SCOPES = 'user-read-private user-read-email playlist-read-private';

const LoginWithSpotify: React.FC = () => {
  const handleLogin = () => {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;
    window.location.href = authUrl; // Redirect to Spotify authorization page
  };

  return (
    <button onClick={handleLogin}>
      Login with Spotify
    </button>
  );
};

export default LoginWithSpotify;
