import React, { useState } from "react";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import prueba from '../assets/images/carro.jpg';
import prueba2 from '../assets/images/sorteo.jpg';
import prueba3 from '../assets/images/lluvia.gif';
import video1 from '../assets/videos/video-8-9-2024.mp4';
import video2 from '../assets/videos/video-9-9-2024.mp4';
import video3 from '../assets/videos/video-10-9-2024.mp4';


function VideoGallery() {
    window.scrollTo(0, 0);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isVideoPlayig, setIsVideoPlaying] = useState(false);
    const [isTitleVIdeo, setIsTitleVideo] = useState(null);

    const videos = [
        {
            id: 1,
            url: video1,
            miniatura: prueba,
            title: 'Video 1'
        },
        {
            id: 2,
            url: video2,
            miniatura: prueba2,
            title: 'Video 2'
        },
        {
            id: 3,
            url: video3,
            miniatura: prueba3,
            title: 'Video 3'
        },
        {
            id: 4,
            url: video3,
            miniatura: prueba,
            title: 'Video 4'
        },
        {
            id: 5,
            url: video2,
            miniatura: prueba2,
            title: 'Video 5'
        },
        {
            id: 6,
            url: video1,
            miniatura: prueba3,
            title: 'Ramon Valdez 8/9/2024'
        }
    ];

    const handleVideoClick = (video) => {
        setCurrentVideo(video);
        setIsTitleVideo(video.title)
        setIsVideoPlaying(true);
        window.scrollTo(0, 0)
    };

    return (
        <>
            <div className="video-gallery">
                <div>
                    {currentVideo && (
                        <div className="father-video-player">
                            <h1 className="title-video-players">🏅⭐ Ganador del dia {isTitleVIdeo} ⭐🏅</h1>
                            <div className="video-players">
                                <ReactPlayer url={currentVideo.url} playing controls width='100%' height='100%' />
                            </div>
                        </div>
                    )}
                </div>
                <div className="video-miniatura" style={{ transform: isVideoPlayig ? 'translateY(360px)' : 'translateY(0)' }}>
                    <h1 className="title-video-gallery">Lista de los ultimos ganadores</h1>
                    {videos.map((video) => (
                        <div className="father-video-description">
                            <div key={video.id} className="miniatura" onClick={() => handleVideoClick(video)}>
                                <img src={video.miniatura} alt={`Miniatura de ${video.title}`} />
                            </div>
                            <div className="description-video-gallery">
                                <p> 🏅⭐ Ganador del dia {`${video.title}`} ⭐🏅</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ transform: isVideoPlayig ? 'translateY(340px)' : 'translateY(0)' }}>
                <Footer />
            </div>
        </>
    );
}

export default VideoGallery;







