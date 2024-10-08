const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Spotify Backend is running');
});

const CLIENT_ID = 'cc0d6b182b0c47828f0fae661633ba7d';
const CLIENT_SECRET = 'a311b458ff49400d9a1759c20b0c3093';
const REDIRECT_URI = 'http://localhost:5173/callback';

app.get('/getAccessToken', async (req, res) => {
  const code = req.query.code;
  
  console.log(code);
  const fetch = (await import('node-fetch')).default;

  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    // Log the response from Spotify to inspect it
    const tokenData = await response.json();
    console.log('Spotify API Response:', tokenData); // Log the raw response from Spotify

    // Send the token data back to the frontend
    res.json(tokenData);
  } catch (error) {
    console.error('Error fetching access token:', error);
    res.status(500).send('Error fetching access token');
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
