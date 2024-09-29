
import { useEffect, useState } from 'react';
import { useInitialStore } from '../store/useGlobalData';


function Reloj({ type }) {
    const {dataInicial} = useInitialStore((state) => state)
    
    
    // estado para rifas
    const [time, setTime] = useState({
        remainSeconds: 0,
        remainMinutes: 0,
        remainHours: 0,
        remainDays: 0,
        remainTime: 0
    })

    // estado para Sorteos
    const [timeSorteo, setTimeSorteo] = useState({
        hora: 0,
        minutos: 0,
        segundos: 0
    })

    const getRemainingTime = deadline => {
        let now = new Date(),
            remainTime = (new Date(deadline) - now + 1000) / 1000,
            remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
            remainDays = Math.floor(remainTime / (3600 * 24));

        setTime({
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays,
            remainTime
        })

    };

    const countdown = (deadline) => {
        console.log(deadline)
        const timerUpdate = setInterval(() => {
            getRemainingTime(deadline);
            if (time.remainTime <= 1) {
                clearInterval(timerUpdate);
            }
        }, 1000)
    };

    const countdownSorteo = () => {
        setInterval(() => {
            let { hora, segundos, minutos } = timeSorteo
            let nueva_hora = new Date();
            //Hora del Sorteo todos los dias a las 18:00 pm 
            hora = (18 - (nueva_hora.getHours()) - 1);
            minutos = (60 - nueva_hora.getMinutes() - 1);
            segundos = 60 - nueva_hora.getSeconds();
            if (hora < 0) {
                let mejoraHora = 18 - nueva_hora.getHours();
                hora = 23 - Math.abs(mejoraHora);
            }
            if (segundos == 60) {
                segundos = 0;
            }
            if (minutos == 60) {
                minutos = 0;
            }
            setTimeSorteo({
                hora,
                minutos,
                segundos
            })
        }, 1000)
    };

    useEffect(()=>{
        if (type === 'sorteo') {
            //Hora del Sorteo todos los dias a las 18:00 pm 
            countdownSorteo()
    
        } else {
             if (dataInicial) {
                /*Cambiar la fecha para la rifa */
                countdown(`${dataInicial.fechaRifa}, ${dataInicial.horaRifa}:00 GMT-4`);
             }
                
        }
    },[time,timeSorteo])
   
     
    if (type === 'sorteo') {
        return (
            <>
            <h2 className='timeTitle'>Tiempo faltante para el Proximo Sorteo</h2>
              <div className="countdown">
                  <span id="hourElement">{timeSorteo.hora < 10 ? `0${timeSorteo.hora}`: timeSorteo.hora} :</span>
                  <span id="minElement">{timeSorteo.minutos < 10 ? `0${timeSorteo.minutos}`: timeSorteo.minutos} :</span>
                  <span id="secElement">{timeSorteo.segundos < 10 ? `0${timeSorteo.segundos}`: timeSorteo.segundos}</span>
              </div>
            </>
        )
    }else{
            return (
                <>
                   <h2 className='timeTitle'>Tiempo faltante para la Proxima Rifa</h2>
                      <div className="countdown">
                          <span id= "dayElement">{time.remainDays} :</span>
                          <span id="hourElement">{time.remainHours} :</span>
                          <span id="minElement">{time.remainMinutes} :</span>
                          <span id="secElement">{time.remainSeconds}</span>
                      </div>
                  </>
          
              )
    }
    
}


export default Reloj