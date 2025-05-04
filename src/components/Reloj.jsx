  
 import { useEffect, useState ,useRef} from 'react';
 import { useInitialStore } from '../store/useGlobalData';
 import moment from 'moment-timezone'; // Importación clave
 import '../styles/Reloj.css';
 import fetchData from '../scripts/fetchData'
 
 /* 
 Importante que dataInicial cumpla con este formato
 {
     fechaRifa: "2025-04-29",  // Formato ISO (YYYY-MM-DD)
     horaRifa: "18:45"         // Formato 24h (HH:mm)
 } */
 
 function Reloj({ type }) {
   const { dataInicial, updateDataInicial} = useInitialStore((state) => state);


   useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/api/sse-rifa'); //

    // Escuchar el evento "rifaActualizada"
    eventSource.addEventListener('rifaActualizada', (e) => {
      const nuevosDatos = JSON.parse(e.data);
      console.log(nuevosDatos)
     const { fecha , hora} = nuevosDatos
      updateDataInicial({
          rifaStatus:'active',
          fechaRifa: fecha,
          horaRifa: hora
      })
    });

    // Escuchar el evento "rifaCreada"
     eventSource.addEventListener('rifaCreada', (e) => {
      const nuevosDatos = JSON.parse(e.data);
      console.log(nuevosDatos)
     const { fecha , hora } = nuevosDatos
      updateDataInicial({
          rifaStatus:'active',
          fechaRifa: fecha,
          horaRifa: hora
      })
    }); 

    return () => eventSource.close(); // Limpiar al desmontar
  }, []);
 
   const timerRef = useRef(null);
   
   // Estado para rifas
   const [time, setTime] = useState({
     remainSeconds: 0,
     remainMinutes: 0,
     remainHours: 0,
     remainDays: 0,
     remainTime: 0
   });
 
   // Estado para sorteos
   const [timeSorteo, setTimeSorteo] = useState({
     hora: 0,
     minutos: 0,
     segundos: 0
   });
 
   // ==================== FUNCIONES MEJORADAS ====================
   const getRemainingTime = (deadline) => {
     const now = moment().tz('America/Caracas'); // Hora actual en Venezuela
     const end = moment.tz(deadline, 'America/Caracas'); // Fecha límite en Venezuela
     
     const diff = end.diff(now, 'seconds');
     const isExpired = diff <= 0;
 
     const remainTime = isExpired ? 0 : diff;
     const duration = moment.duration(remainTime, 'seconds');
 
     setTime({
       remainSeconds: ('0' + duration.seconds()).slice(-2),
       remainMinutes: ('0' + duration.minutes()).slice(-2),
       remainHours: ('0' + duration.hours()).slice(-2),
       remainDays: duration.days(),
       remainTime: remainTime
     });
     return isExpired
   };
 
   const countdown = (deadline) => {
     // Limpiar intervalo existente
     if (timerRef.current) clearInterval(timerRef.current);
     
     // Actualización inmediata
     const isExpired = getRemainingTime(deadline);
     
     if (!isExpired) {
       timerRef.current = setInterval(() => {
         const shouldStop = getRemainingTime(deadline);
         if (shouldStop && timerRef.current) {
           clearInterval(timerRef.current);
           updateDataInicial({
            rifaStatus:'progress' 
          })
          updateStatusRifa('progress')
         }
          
       }, 1000);
     }
  
   };

   // Función para actualizar el estado de la rifa cuando el relojo llega a 0
   const updateStatusRifa = async (newStatus) => {
    const { rifaId } = dataInicial
    const body ={
       newStatus,
       id: rifaId
    }
    const { error, data} = await fetchData('http://localhost:3000/api/updateStatusRifa',JSON.stringify(body),'PUT')
    if (!error) {
      if (!data.error) {
         console.log(data)
      }
    }
    
   }
 
   const countdownSorteo = () => {
     const timer = setInterval(() => {
       const now = moment().tz('America/Caracas');
       const sorteoTime = moment().tz('America/Caracas').set({ 
         hour: 18, minute: 0, second: 0 
       });
 
       // Si ya pasó la hora del sorteo hoy, calcular para mañana
       if (now.isAfter(sorteoTime)) {
         sorteoTime.add(1, 'day');
       }
 
       const duration = moment.duration(sorteoTime.diff(now));
       
       setTimeSorteo({
         hora: ('0' + duration.hours()).slice(-2),
         minutos: ('0' + duration.minutes()).slice(-2),
         segundos: ('0' + duration.seconds()).slice(-2)
       });
     }, 1000);
 
     return () => clearInterval(timer); // Cleanup
   };
 
   // ==================== EFECTOS ====================
   useEffect(() => {
     if (type === 'sorteo') {
       countdownSorteo();
     } else if (dataInicial) {
      console.log(dataInicial)
       // Formatea la fecha y hora con moment-timezone
       const deadline = moment.tz(
         `${dataInicial.fechaRifa} ${dataInicial.horaRifa}`,
         'YYYY-MM-DD HH:mm',
         'America/Caracas'
       ).format();
 
       console.log('Fecha procesada:', deadline); // Debug
       if (!(deadline === 'Invalid date')) {
         countdown(deadline);
       }
     }
 
     // Limpieza de intervalos
     return () => {
       clearInterval();
     };
   }, [dataInicial, type]);
 
   // ==================== RENDER ====================
   if (type === 'sorteo') {
     return (
       <>
         <h2 className='timeTitle'>Tiempo faltante para el Próximo Sorteo</h2>
         <div className="countdown">
           <span id="hourElement">{timeSorteo.hora} :</span>
           <span id="minElement">{timeSorteo.minutos} :</span>
           <span id="secElement">{timeSorteo.segundos}</span>
         </div>
       </>
     );
   } else {
     return (
       <>
         <h2 className='timeTitle'>Tiempo faltante para la Próxima Rifa</h2>
         <div className="countdown">
           <span id="dayElement">{time.remainDays} :</span>
           <span id="hourElement">{time.remainHours} :</span>
           <span id="minElement">{time.remainMinutes} :</span>
           <span id="secElement">{time.remainSeconds}</span>
         </div>
       </>
     );
   }
 }
 
 export default Reloj;