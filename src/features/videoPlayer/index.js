import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "videojs-plus";
import "videojs-plus/dist/videojs-plus.css";

const defaultPlayerOptions = {
    autoplay: true,
    muted: false,
    aspectRatio: "16:9",
    controls: true,
};

const Player = ({
    playerOptions,
    onPlayerInit,
    onPlayerDispose
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const videoEl = containerRef.current.querySelector("video");
            const player = videojs(videoEl, {
                ...defaultPlayerOptions,
                ...playerOptions,
            });

            onPlayerInit && onPlayerInit(player);

            return () => {
                onPlayerDispose && onPlayerDispose(null);
                player.dispose();
            };
        }
    }, [onPlayerInit, onPlayerDispose, playerOptions]);

    return (
        <div ref={containerRef} style={{ width: '600px' }}>
            <video  />
        </div>
    );
}

export default Player;