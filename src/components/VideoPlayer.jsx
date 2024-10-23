import React, { useEffect, useRef, useState } from "react";
import ReatPlayer from 'react-player';


/*En caso de un video*/
const VideoPlayer = ({url}) => {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isVideoPlayig, setIsVideoPlaying] = useState(false);
    
    const handleClick = (video) => {
        setCurrentVideo(video);
        if(currentVideo){
            setIsVideoPlaying(true)
        }
    };

    return (
        <section className='section-video'>
            <div className="content-video-player">          
                <div className="video-player" onClick={handleClick}>
                    <ReatPlayer url = {url} playing={isVideoPlayig} controls width= '100%' height='100%'/>
                </div>
                <div className="description-video-player">
                    <h1>Mira como puedes tener mas oportunidad de ganar</h1>
                    <p>¿Quieres obtener numeros gratis.??<br/>En esta sección te mostramos como hacerlo.!!<br/>Así que toma nota, sigue los pasos y preparate para unirte a nuestra lista de ganadores. <span>😊😊😊</span></p>
                </div>
            </div>
        </section>
    )
}

export default  VideoPlayer;
