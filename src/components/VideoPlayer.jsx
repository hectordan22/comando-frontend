import React, { useEffect, useRef, useState } from "react";
import ReatPlayer from 'react-player';


/*En caso de un video*/
const VideoPlayer = ({url, audioUrl}) => {
    const audioRef = useState(null);

    useEffect(()=>{
        if(audioRef.current){
            audioRef.current.pause()
            audioRef.current.load()
        }
    },[url, audioUrl]);
    
    const handleClick = () => {
        if(audioRef.current){
            audioRef.current.play();
        };
    };

    return (
        <section className='section-video'>
            <div className="content-video-player">          
                <div className="video-player" onClick={handleClick}>
                    <ReatPlayer url = {url} playing /*loop*/ controls/*muted*/ width= '100%' height='100%'/>
                    <audio ref={audioRef} src={audioUrl}/>
                </div>
                <div className="description-video-player">
                    <h1>Mira como puedes tener mas oportunidad de ganar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quaerat, beatae ab, porro iste quis sed odio facilis quidem tempore quibusdam dicta. Magni consectetur ut dolore. Facere veritatis quia sint.</p>
                </div>
            </div>
        </section>
    )
}

/*Usando la API youtube:
impot YouTube form 'react-youtube';

const Reel = ({videoId}) =>{
    const playerRef = useRef(null);

    const handleClik = ()=>{
        if(playerRef.current){
            playerRef.current.internalPlayer.playVideo();
        }
    }

    return (
        <div className="reel" onClick={handleClick}>
            <YouTube
                videoId = {videoId}
                opts = {{
                    playerVars:{
                    autoplay :0,
                    controls:0,
                    mute: 1
                    }
                }}
            />
        </div>
    )
}
*/
export default  VideoPlayer;
