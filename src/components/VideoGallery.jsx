import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import prueba from '../assets/images/carro.jpg';
import prueba2 from '../assets/images/sorteo.jpg';
import prueba3 from '../assets/images/lluvia.gif';
import like from '../assets/images/like.png';
import vistas from '../assets/images/vistas.png';
import video1 from '../assets/videos/video-8-9-2024.mp4';
import video2 from '../assets/videos/video-9-9-2024.mp4';
import video3 from '../assets/videos/video-10-9-2024.mp4';



function VideoGallery() {
    window.scrollTo(0, 0);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isVideoPlayig, setIsVideoPlaying] = useState(false);
    const [isTitleVIdeo, setIsTitleVideo] = useState(null);
    const [views, setViews] = useState({});
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [contarComments, setContarCommets] = useState({});

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
        setViews((prevViews) => ({
            ...prevViews,
            [video.id]: (prevViews[video.id] || 0) + 1
        }));
        window.scrollTo(0, 0);
    };

    /*Para los likes*/
    const handleLike = () => {
        if (currentVideo) {
            setLikes((prevLikes) => ({
                ...prevLikes,
                [currentVideo.id]: (prevLikes[currentVideo.id] || 0) + 1
            }));
        }
    };

    /*Para agregar un comentario*/
    const handleComment = () => {
        if (currentVideo) {
            const comment = prompt('Escribe tu comentario:');
            if (comment) {
                setComments((prevComments) => ({
                    ...prevComments,
                    [currentVideo.id]: [...(prevComments[currentVideo.id] || []), comment],
                }));
                setContarCommets((prevContarComments) => ({
                    ...prevContarComments,
                    [currentVideo.id]: (prevContarComments[currentVideo.id] || 0) + 1
                }));
            }
        }
    };

    /*Para Compartir*/
    const handleShare = () => {
        alert('Compartir video: ' + currentVideo.url);
    };

    useEffect(() => {
        if (currentVideo) {
            let cantidadComment = contarComments[currentVideo.id];
            const ContentFooder = document.getElementById("content-footer")
            const ContentVideoMiniatura = document.getElementById("video-miniatura")

            let inicializadorPX = (cantidadComment * 60);

            if(inicializadorPX > 0){
                ContentFooder.style.transform = `translateY(${inicializadorPX + 420}px)`;
                ContentVideoMiniatura.style.transform = `translateY(${inicializadorPX + 420}px)`; 
            }else if(cantidadComment === undefined && ContentFooder.style.transform !== "translateY(420px)"){
                ContentFooder.style.transform = `translateY(420px)`;
                ContentVideoMiniatura.style.transform = `translateY(420px)`;  
            }
        }
    }, [comments, currentVideo])

    return (
        <>
            <div className="video-gallery">
                <div>
                    {currentVideo && (
                        <div className="father-video-player">
                            <h1 className="title-video-players">🏅⭐ Ganador del dia {isTitleVIdeo} ⭐🏅</h1>
                            <div className="video-players">
                                <ReactPlayer url={currentVideo.url} playing controls width='100%' height='100%' />
                                <div className="controls">
                                    <div className="likes" onClick={handleLike}>
                                        <span className="icon"> <img src={like} alt="likes" /> </span> {likes[currentVideo.id || 0]}

                                    </div>
                                    <div className="views">
                                        <span className="icon"> <img src={vistas} alt="vistas" /> </span> {views[currentVideo.id || 0]}
                                    </div>
                                    <div className="share" onClick={handleShare}>
                                        <span className="icon">🔗</span>
                                    </div>
                                    <div className="comments" onClick={handleComment}>
                                        <span className="icon">💬</span>{contarComments[currentVideo.id || 0]}
                                    </div>
                                </div>
                                <div className="comments-section">
                                    <div>
                                        <h1 className="title-comments">Comentarios</h1>
                                        {comments[currentVideo.id]
                                            ? comments[currentVideo.id].map((comment, index) => (
                                                <div key={index} className="content-comment" >
                                                    <>
                                                        <h2>User {Math.random() * 100000} ☺</h2>
                                                        <p>{comment}</p>
                                                    </>
                                                </div>
                                            ))
                                            : "No hay comentarios. Se el primero en comentar ☺"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div id="video-miniatura" className="video-miniatura" style={{ transform: isVideoPlayig ? 'translateY(420px)' : 'translateY(0)' }}>
                    <h1 className="title-video-gallery">Lista de los ultimos ganadores</h1>
                    {videos.map((video) => (
                        <div className="father-video-description" key={video.id}>
                            <div  className="miniatura" onClick={() => handleVideoClick(video)}>
                                <img src={video.miniatura} alt={`Miniatura de ${video.title}`} />
                            </div>
                            <div className="description-video-gallery">
                                <p> 🏅⭐ Ganador del dia {`${video.title}`} ⭐🏅</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="content-footer" style={{ transform: isVideoPlayig ? 'translateY(420px)' : 'translateY(0)' }}>
                <Footer />
            </div>
        </>
    );
}

export default VideoGallery;






