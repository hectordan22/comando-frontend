import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoGallery = ({videos}) => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleVideoClick = (video) => {
        setCurrentVideo(video);
    }

    return (
        <div className="video-gallery">
            <div className="video-miniatura">
                {videos.map((video)=>(
                    <div key={video.id} className="miniatura" onClick={()=>handleVideoClick(video)}>
                        <img src={video.thumbnail} alt={`Miniatura de ${video.title}`} />
                    </div>
                ))}
            </div>
                {currentVideo && (
                    <div className="video-player2">
                        <ReactPlayer url={currentVideo.url} playing controls width="100%" height="100%"/>
                    </div>
                )}          
        </div>
    )
}

export default VideoGallery;







