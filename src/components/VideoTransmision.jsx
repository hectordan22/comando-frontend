import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoTransmision.css';
import { GiSoundOff } from "react-icons/gi";

const VideoTransmision = ({
  videoUrl,
  scheduledTime, // Formato "HH:MM" (ej. "20:51")
  videoDuration = 5, // Duración en minutos
  isLive = false // Si es transmisión en vivo
}) => {
  // const [showPlayer, setShowPlayer] = useState(false);
  const [showPlayer, setShowPlayer] = useState('waiting');
  const [showEndMessage, setShowEndMessage] = useState(false);
  const [isMuted, setIsMuted] = useState(true);/** */
  const playerRef = useRef(null);
  const apiCheckInterval = useRef(null);

  // Función para obtener hora exacta (API + fallback local)
  const getAccurateTime = async () => {
    try {
      const response = await fetch('https://www.timeapi.io/api/time/current/zone?timeZone=America/Caracas', {
        signal: AbortSignal.timeout(3000) // Timeout de 3 segundos
      });
      const { dateTime } = await response.json();
      return new Date(dateTime);
    } catch {
      // console.warn("Usando hora local como fallback");
      return new Date(); // Fallback seguro
    }
  };

  // Verificación principal (se ejecuta periódicamente)
  const checkSchedule = async () => {
    const now = await getAccurateTime();
    const [targetHour, targetMinute] = scheduledTime.split(':').map(Number);
    const targetTime = new Date(now);

    targetTime.setHours(targetHour, targetMinute, 0, 0);

    const isRightTime = now >= targetTime && now < targetTime.getTime() + videoDuration * 60000;

    if(isRightTime || isLive){
      setShowPlayer('playing');
    }
  };

  useEffect(() => {
    // Verificación inmediata al montar
    checkSchedule();
    // Configurar intervalo cada 5 segundos (equilibrio entre precisión y rendimiento)
    apiCheckInterval.current = setInterval(checkSchedule, 5000);
    return () => {
      clearInterval(apiCheckInterval.current);
    };
  }, [checkSchedule]);

  // Calcular tiempo transcurrido desde scheduledTime (segundos)
  const getElapsedTime = async () => {
    const now = await getAccurateTime();
    const [targetHours, targetMinutes] = scheduledTime.split(':').map(Number);
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      targetHours,
      targetMinutes,
      0
    );

    return Math.floor((now - targetTime) / 1000);
  };

  // Forzar autoplay (método confiable)
  const handleReady = async () => {
    if (playerRef.current) {
      const elapsed = Math.max(0, await getElapsedTime());
      console.log(elapsed)
      if (!isLive && elapsed > 0) {
        playerRef.current.seekTo(elapsed, 'seconds');
      }
      // Truco para asegurar autoplay en móviles
      playerRef.current.getInternalPlayer().mute();
      playerRef.current.getInternalPlayer().playVideo();
    }
  };

  //Mostrar mensaje al final del video
  const handleVideoEnd = () => {
    setShowPlayer('ended');
    setShowEndMessage(true);
    
    setTimeout(()=>{
      setShowEndMessage(false)
      setShowPlayer('waiting')
    },60000)
  };
  
  // Bloqueo de interacciones
  const blockInteraction = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // if (!showPlayer && !showEndMessage) return null;
  if(showPlayer === 'waiting') return null;

  return (
    <div className="video-container">
      {showPlayer === 'ended' ? (
        <div className="end-message">
          <h2>TRANSMISIÓN FINALIZADA</h2>
          <p>Gracias por participar</p>
        </div>
      ) : (
        <>
          <div className="video-header">
            <h1>{isLive ? 'EN VIVO' : 'VIDEO PROGRAMADO'}</h1>
            <p>{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="player-wrapper" onClick={blockInteraction}>
            <div className="click-blocker"></div>
            <ReactPlayer
              ref={playerRef}
              url={`${videoUrl}?autoplay=1&mute=1`}
              playing={true}
              muted={isMuted}
              onReady={handleReady}
              onEnded={handleVideoEnd}
              width="100%"
              height="100%"
              playsinline
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    rel: 0
                  }
                }
              }}
            />
            {isMuted && (
              <div className="unmute-message" onClick={() => setIsMuted(false)}>
                <p><GiSoundOff className='GiSoundOff' /></p>
                <p>Activar el sonido</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoTransmision;
