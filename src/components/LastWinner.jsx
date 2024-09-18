import ReatPlayer from 'react-player';
import { Link } from 'react-router-dom'
import video2 from '../assets/videos/video-9-9-2024.mp4';
import video3 from '../assets/videos/video-10-9-2024.mp4';

import congratulation from '../assets/images/Last-Winner-Congratulation.png';
import { useState } from 'react';


const dataSorteo = {
  title: 'Sorteo',
  fecha: '14/09/2024',
  name: 'Mauricio Moreno',
  ci: '23777790',
  direccion: 'Valera',
  numeroGanador: '28',
  videoUrl: video2,
  }

const dataRifa = {
  title: 'Rifa',
  fecha: '15/09/2024',
  name: 'Mauricio Moreno',
  ci: '23777790',
  direccion: 'Valera',
  numeroGanador: '24845',
  videoUrl: video3,
}

function returnGanador(data){
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoPlayig, setIsVideoPlaying] = useState(false);

  const handleClick = (video) => {
    setCurrentVideo(video);
    if(currentVideo){
        setIsVideoPlaying(true)
    }
  }
  return(
    <div className="container-winner">
        <h2 className="type-winner">Ganador de {data.title}</h2>
        <div className="card-last-winner">
            <div className="number-winner">
                <h3>Ticket Nro</h3>
                <div >
                  <h4>{data.numeroGanador}</h4>
                </div>
                <h5>Fecha {data.fecha}</h5>
            </div>
            <div className='content-videoLastWinner' onClick={handleClick}>
              <ReatPlayer url={data.videoUrl} playing={isVideoPlayig} controls width= '100%' height='100%'/>
            </div>
            <div className="data-winner">
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
            <div className='content-img-lastWinner'>
              <img src={congratulation} alt="Premio" />
              <h4>Felicidades a nuestro GANADOR</h4>
            </div>
        </div>
        
        <div className='button-more-winner'>
          <Link className='btn-more-winner' to="/Ganadores"><span>Ver Más Ganadores</span><i></i></Link>                                   
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
        {returnGanador(dataRifa)}
    </section>
    </>
  )
}

export default LastWinner