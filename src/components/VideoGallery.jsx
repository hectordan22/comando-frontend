import React, { useState } from "react";
import ReactPlayer from "react-player";

import prueba from '../assets/images/carro.jpg';
import prueba2 from '../assets/images/sorteo.jpg';
import prueba3 from '../assets/images/lluvia.gif';


const VideoGallery = () => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const videos = [
        {
          id: 1,
          url: '/video1.mp4',
          miniatura: prueba,
          title: 'Video 1'
        },
        {
          id: 2,
          url: '/video2.mp4',
          miniatura: prueba2,
          title: 'Video 2'
        },
        {
          id: 3,
          url:  '/video3.mp4',
          miniatura: prueba3,
          title: 'Video 3'
        },
        {
          id: 4,
          url: '/video4.mp4',
          miniatura: prueba,
          title: 'Video 1'
        },
        {
          id: 5,
          url: '/video5.mp4',
          miniatura: prueba2,
          title: 'Video 2'
        },
        {
          id: 6,
          url:  '/video6.mp4',
          miniatura: prueba3,
          title: 'Video 3'
        }
    ]

    videos.map((video) => console.log(video.miniatura))
    const handleVideoClick = (video) => {
        setCurrentVideo(video);
    }

    return (
        <div className="video-gallery">
            <h1 className="title-video-gallery">Lista de los ultimos ganadores</h1>
            <div className="video-miniatura">
                {videos.map((video)=>(
                    <div key={video.id} className="miniatura" onClick={()=>handleVideoClick(video)}>
                        <img src={video.miniatura} alt={`Miniatura de ${video.title}`} />
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







