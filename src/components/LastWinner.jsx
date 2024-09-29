import ReatPlayer from 'react-player';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import video2 from '../assets/videos/video-9-9-2024.mp4';
import video3 from '../assets/videos/video-10-9-2024.mp4';

import congratulation from '../assets/images/Last-Winner-Congratulation.png';


const dataSorteo = {
  id: "1",
  title: 'Sorteo',
  fecha: '14/09/2024',
  name: 'Mauricio Moreno',
  ci: '23777790',
  direccion: 'Valera',
  numeroGanador: '28',
  videoUrl: video2
}

const dataRifa = {
  id:"2",
  title: 'Rifa',
  fecha: '15/09/2024',
  name: 'Mauricio Moreno',
  ci: '23777790',
  direccion: 'Valera',
  numeroGanador: '24845',
  videoUrl: video3
}

function returnGanador(data){
  
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoPlayig, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(()=>{
      if(data.videoUrl === undefined){
        containerRef.current.style.display = "none";
        document.getElementById(`data-winner${data.id}`).classList.add("data-winner-video-false");
        document.getElementById(`number-winner${data.id}`).classList.add("number-winner-video-false");
        document.getElementById(`card-last-winner${data.id}`).classList.add("card-last-winner-video-false");
        document.getElementById(`content-img-lastWinner${data.id}`).classList.add("content-img-lastWinner-video-false");
      }else{
        containerRef.current.style.display = "inline-block";
      }
  },[data, containerRef])
  

  const handleClick = (video) => {
    setCurrentVideo(video);
    if(currentVideo){
        setIsVideoPlaying(true)
    }
  }
  return(
    <div className="container-winner">
        <h2 className="type-winner">Ganador de {data.title}</h2>
        <div className="card-last-winner" id={`card-last-winner${data.id}`}>
            <div className="number-winner" id={`number-winner${data.id}`}>
                <h3>Ticket Nro</h3>
                <div >
                  <h4>{data.numeroGanador}</h4>
                </div>
                <h5>Fecha {data.fecha}</h5>
            </div>
            <div className='content-videoLastWinner' ref={containerRef} onClick={handleClick}>
              <ReatPlayer url={data.videoUrl} playing={isVideoPlayig} controls width= '100%' height='100%'/>
            </div>
            <div className="data-winner" id={`data-winner${data.id}`}>
               <div className="titles-winner">
                 <p>Nombre:</p>
                 <p>Cedula:</p>
                 <p>Dirección:</p>
               </div>
               <div className="values-winner">
                 <p>{data.name}</p>
                 <p>{data.ci}</p>
                 <p>{data.direccion}</p>
               </div>
            </div>
            <div className='content-img-lastWinner' id={`content-img-lastWinner${data.id}`}>
              <img src={congratulation} alt="Premio" />
              <h4>Felicidades a nuestro GANADOR</h4>
            </div>
        </div>
        
        <div className='button-more-winner'>
          <Link className='btn-more-winner' to="/Ganadores"><span>Ver Ganadores</span><i></i></Link>                                   
        </div>
    </div>
  )
  
}
function LastWinner() {
  return (
    <>
    <section>
      <h1 className="title-last-winner">Ultimos Ganadores</h1>
        {returnGanador(dataSorteo)}
        {/* {returnGanador(dataRifa)} */}
    </section>
    </>
  )
}

export default LastWinner