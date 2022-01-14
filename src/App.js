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
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
      <div style={{ padding: '2rem' }}>
        <Player
          playerOptions={playerOptions}
          onPlayerInit={setPlayer}
          onPlayerDispose={setPlayer}
        />
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => setVideo({
          sources: [{
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }]
        })}>Change video</button>
      </div>
    </div>
  );
}

export default App;
