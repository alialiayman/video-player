import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Player from './features/videoPlayer';
import localVideo from './videos/video.mp4'
import oceanVideo from './videos/oceans.mp4'

const playerOptions = {};

function App() {
  const playerRef = useRef(null);

  const [video, setVideo] = useState({
    sources: [{
      src: localVideo
    }]
  });

  const handleOnReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });

    setVideo({
      sources: [{
        src: localVideo
      }]
    })
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src(video.sources);
    }
  }, [video, playerRef])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', flexWrap: 'wrap', border: '5px solid teal', padding: '1rem', margin: '1rem auto' }}>
      <div style={{ width: '40%' }}>
        <h2 style={{ marginBottom: '1rem' }}>HTML5 video</h2>
        <video src={video.sources[0].src} controls muted width="100%" />
      </div>
      <div style={{ width: '10%' }}>

        <button onClick={() => setVideo({
          sources: [{
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          }]
        })}
          style={{ backgroundColor: 'lime', width: '10rem', height: '4rem', fontSize: '1rem', marginBottom: '1rem' }}
        >Remote video</button>


        <button onClick={() => setVideo({
          sources: [{
            src: oceanVideo
          }]
        })}
          style={{ backgroundColor: 'tan', width: '10rem', height: '4rem', fontSize: '1rem' }}
        >ocean video</button>

      </div>

      <div style={{ width: '40%', margin: '1rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>VideoJS</h2>
        <Player
          playerOptions={playerOptions}
          onReady={handleOnReady}
          width={500}
        />
      </div>
      <p style={{ width: '100%', textAlign: 'center' }}>Open in different browsers to see the difference ex. chrome, safari and IE. modern browsers auto play only if muted</p>
    </div>
  );
}

export default App;
