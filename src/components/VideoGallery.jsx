import  { useEffect, useState, useLayoutEffect} from "react";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import like from '../assets/images/like.png';
import vistas from '../assets/images/vistas.png';
import OfflineNotice from './Offline.jsx'
import fetchData from "../scripts/fetchData.js";
/*Imagenes Para Miniaturas:*/

function ExportVideoGallery() {
    window.scrollTo(0, 0);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isVideoPlayig, setIsVideoPlaying] = useState(false);
    const [isTitleVIdeo, setIsTitleVideo] = useState(null);
    const [views, setViews] = useState({});
    const [likes, setLikes] = useState({});
    const [comments, setComments] = useState({});
    const [contarComments, setContarCommets] = useState({});
    const [seccionesVideos, setSecciones] = useState(null)
    const [loading, setLoading] = useState(true)
   

    useEffect(()=>{
        const Initials = async () => {
           const { error, data, loader} = await fetchData('http://localhost:3000/api/getLastWinners')
           setLoading(loader)
           if (!error && (data && !data.error)) {
            setSecciones(data.response)
           }
         }
         Initials()
    },[])

    let ContentVideoMiniatura = [];

    useLayoutEffect(() => {
        if (seccionesVideos) {
            seccionesVideos.map((seccion) => {
                ContentVideoMiniatura.push(document.getElementById(`video-miniatura${seccion.id}`))
            })
        }
        if (currentVideo) {
            let cantidadComment = contarComments[currentVideo.id];
            const ContentFooder = document.getElementById("content-footer")

            let inicializadorPX = (cantidadComment * 60);

            if (inicializadorPX > 0) {
                ContentFooder.style.transform = `translateY(${inicializadorPX + 420}px)`;
                ContentVideoMiniatura.map((el) => {
                    el.style.transform = `translateY(${inicializadorPX + 420}px)`;
                })

            } else if (cantidadComment === undefined && ContentFooder.style.transform !== "translateY(420px)") {
                ContentFooder.style.transform = `translateY(420px)`;
                ContentVideoMiniatura.map((el) => {
                    el.style.transform = `translateY(420px)`;
                })
            }
        }
    
    }, [comments, currentVideo])

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

    
    if (loading) {
        return (
            <div>Cargando...</div>
        )
    }
  
    if (seccionesVideos) {
        
        return (
            <div className="content-export-video-gallery">
                 <div>
               <div>
                {console.log(currentVideo)}
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
                { seccionesVideos.map((seccion) => (
                    <div className="video-gallery" key={seccion.id}>
                        <div id={`video-miniatura${seccion.id}`} key={`content_${seccion.id}`} className="video-miniatura" style={{ transform: isVideoPlayig ? 'translateY(420px)' : 'translateY(0)' }}>
                            { seccion.videos.length > 0 && <h1 className="title-video-gallery">{seccion.id > 1 ?`${seccion.title} Rifa`:`${seccion.title}`}</h1>}
                            {seccion.videos.length > 0 && seccion.videos.map((video) => (
                                <div className="father-video-description" key={`${seccion.id}${video.id}`}>
                                    <div className="miniatura" onClick={() => handleVideoClick(video)}>
                                        <img src={video.miniatura} alt={`Miniatura de ${video.title}`} />
                                    </div>
                                    <div className="description-video-gallery">
                                        <p> 🏅⭐ Ganador del dia {`${video.title}`} ⭐🏅</p>
                                    </div>
                                </div>
                            ))}
    
                        </div>
                    </div>
                ))
                }
                <div id="content-footer" style={{ transform: isVideoPlayig ? 'translateY(420px)' : 'translateY(0)' }}>
                    <Footer />
                </div>
                <OfflineNotice/>
            </div> 
            </div>
        )
    }
    
}

export default ExportVideoGallery;






