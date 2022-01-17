import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import './bright.css';

const defaultPlayerOptions = {
    autoplay: false,
    muted: true,
    fluid: true,
    controls: true,
    preload: 'auto',
    userActions: {
        hotkeys: true,
    },
    playbackRates: [2, 1.5, 1, 0.75, 0.5],
    controlBar: { volumePanel: { inline: false, vertical: true }}
};

const Player = ({
    playerOptions,
    onReady
}) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        // make sure Video.js player is only initialized once
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

            const player = playerRef.current = videojs(videoElement,
                {
                    ...defaultPlayerOptions,
                    ...playerOptions
                }, () => {
                    console.log("player is ready");
                    onReady && onReady(player);
                });
        } else {
            // you can update player here [update player through props]
            // const player = playerRef.current;
            // player.autoplay(options.autoplay);
            // player.src(options.sources);
        }
    }, [onReady, playerOptions, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div>
            <video ref={videoRef} className="video-js vjs-bright vjs-big-play-centered" data-setup='{}'/>
        </div>
    );
}

export default Player;