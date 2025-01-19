import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoEnVivo = ({ videoUrl, setVisible }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [showComponent, setShowComponent] = useState(false);
    const [videoEnd, setVideoEnd] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            if (hours === 12 && minutes === 40) {
                setShowComponent(true);
                setVisible();
            }
        }
        checkTime();
        const intervalID = setInterval(checkTime, 1000);

        return () => clearInterval(intervalID)
    }, [videoUrl]);

    const handleVideoEnd = () => {
        setVideoEnd(true);
        setTimeout(() => {
            setShowComponent(false)
        }, 60000)
    }

    return (
        showComponent && (
            <div className="content-video-envivo">
                <div className="video-envivo">
                    <ReactPlayer url={videoUrl} playing={isPlaying} onEnded={handleVideoEnd} width={"100%"} height={"100%"} />
                </div>
            </div>
        )
    );
};

export default VideoEnVivo;


