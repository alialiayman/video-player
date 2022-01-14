import './App.css';
import React, { useEffect, useState } from 'react';
import Player from './features/videoPlayer';

const playerOptions = {};

function App() {
  const [player, setPlayer] = useState(null);
  const [video, setVideo] = useState({
    sources: [{
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }]
  });

  useEffect(() => {
    if (player) {
      player.src(video.sources);
    }
  }, [video, player])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', flexWrap: 'wrap', border: '5px solid teal', padding: '1rem', margin: '1rem auto' }}>
      <div style={{ width: '40%' }}>
        <h2 style={{ marginBottom: '1rem' }}>HTML5 video</h2>
        <video src={video.sources[0].src} controls autoPlay width="100%" />
      </div>
      <button onClick={() => setVideo({
        sources: [{
          src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }]
      })}
        style={{ backgroundColor: 'lime', width: '10rem', height: '4rem', fontSize: '1rem' }}
      >Change video</button>
      <div style={{ width: '40%', margin: '1rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>VideoJS Plus</h2>
        <Player
          playerOptions={playerOptions}
          onPlayerInit={setPlayer}
          onPlayerDispose={setPlayer}
        />
      </div>
      <p style={{ width: '100%', textAlign: 'center' }}>Open in browsers to see the difference ex. chrome, safari and IE</p>
    </div>
  );
}

export default App;
