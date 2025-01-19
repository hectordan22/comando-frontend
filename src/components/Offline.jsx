import React, { useEffect, useState } from "react";
import sinAccesoInternet from '../assets/images/sin-acceso-a-internet.png'

const OfflineNotice = (text) => {
    const [isOffline, setIsOffLine] = useState(!navigator.onLine);

    useEffect(() => { 
        const handleOnline = () => setIsOffLine(false);
        const handleOffline = () => setIsOffLine(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        if(isOffline){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
        return ()=>{
            window.removeEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
        }
    }, [isOffline]);

    const handleRetry = () => {
        window.location.reload();
    }

    if (!isOffline) {
        return null;
    }
    return (
        <>
        <div className="content-father-offline">
            <div className="content-offline">
                <div className="content-img-offline">
                    <img src={sinAccesoInternet} alt="logo" />
                </div>
                <div className="content-text">
                    <p>Estás desconectado. Por favor verifica tu conexión a internet</p>
                </div>
                <div className="animation-offline">
                    <div className="cargando2">
                        <div className="pelotas2">45</div>
                        <div className="pelotas2">62</div>
                        <div className="pelotas2">15</div>
                        <div className="pelotas2">7</div>
                        <div className="pelotas2">91</div>
                        <span className="texto-cargando2">Buscando Conexión</span>
                    </div>
                </div>
                <button className="btn-offline" onClick={handleRetry}>Reintentar</button>
            </div>
        </div>
        </>
    )
}
export default OfflineNotice;





