import ReatPlayer from 'react-player';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import video2 from '../assets/videos/video-9-9-2024.mp4';
import video3 from '../assets/videos/video-10-9-2024.mp4';

import congratulation from '../assets/images/Last-Winner-Congratulation.png';
import { useInitialStore } from '../store/useGlobalData';


function LastWinner() {
  const {dataInicial} = useInitialStore((state) => state)

  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoPlayig, setIsVideoPlaying] = useState(false);
  const containerRef = useRef(null);

   useEffect(()=>{
    dataInicial && dataInicial.lastWinners.map(item => {
      if(item.videoUrl === ''){
      /*   containerRef.current.style.display = "none"; */
        document.getElementById(`content-videoLastWinner${item.id}`).style.display = "none"
        document.getElementById(`data-winner${item.id}`).classList.add("data-winner-video-false");
        document.getElementById(`number-winner${item.id}`).classList.add("number-winner-video-false");
        document.getElementById(`card-last-winner${item.id}`).classList.add("card-last-winner-video-false");
        document.getElementById(`content-img-lastWinner${item.id}`).classList.add("content-img-lastWinner-video-false");
      }else{
       /*  containerRef.current.style.display = "inline-block"; */
         document.getElementById(`content-videoLastWinner${item.id}`).style.display = "inline-block";
      }
     })
     
  },[dataInicial, containerRef]) 

  const handleClick = (video) => {
    setCurrentVideo(video);
    if(currentVideo){
        setIsVideoPlaying(true)
    }
  }
  return (
  <section>
        <h1 className="title-last-winner">Ultimos Ganadores</h1>
  { 
   dataInicial && dataInicial.lastWinners.map((item,index) => {
    return (
      <div className="container-winner" key={index}>
          <h2 className="type-winner">Ganador de {item.title}</h2>
          <div className="card-last-winner" id={`card-last-winner${item.id}`}>
              <div className="number-winner" id={`number-winner${item.id}`}>
                  <h3>Ticket Nro</h3>
                  <div >
                    <h4>{item.numeroGanador}</h4>
                  </div>
                  <h5>Fecha {item.fecha}</h5>
              </div>
              <div className='content-videoLastWinner' id={`content-videoLastWinner${item.id}`} ref={containerRef} onClick={handleClick}>
                <ReatPlayer url={item.videoUrl} playing={isVideoPlayig} controls width= '100%' height='100%'/>
              </div>
              <div className="data-winner" id={`data-winner${item.id}`}>
                 <div className="titles-winner">
                   <p>Nombre:</p>
                   <p>Cedula:</p>
                   <p>Dirección:</p>
                 </div>
                 <div className="values-winner">
                   <p>{item.name}</p>
                   <p>{item.ci}</p>
                   <p>{item.direccion}</p>
                 </div>
              </div>
              <div className='content-img-lastWinner' id={`content-img-lastWinner${item.id}`}>
                <img src={congratulation} alt="Premio" />
                <h4>Felicidades a nuestro GANADOR</h4>
              </div>
          </div>
          
          <div className='button-more-winner'>
            <Link className='btn-more-winner' to="/Ganadores"><span>Ver Ganadores</span><i></i></Link>                                   
          </div>
      </div>
    )
    
  })
}
    </section>
    
  ) 
}

export default LastWinner