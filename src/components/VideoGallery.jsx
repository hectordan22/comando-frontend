import React, { useState } from "react";
import ReactPlayer from "react-player";

import prueba from '../assets/images/carro.jpg';
import prueba2 from '../assets/images/sorteo.jpg';


const VideoGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const videos = [
        {
          id: 1,
          url: '/video1.mp4',
          miniatura: {prueba},
          title: 'Video 1'
        },
        {
          id: 2,
          url: '/video2.mp4',
          miniatura:'../assets/images/sorteo.jpg',
          title: 'Video 2'
        },
        {
          id: 3,
          url:  '/video3.mp4',
          miniatura:'/miniatura3.jpg',
          title: 'Video 3'
        }
    ]

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







