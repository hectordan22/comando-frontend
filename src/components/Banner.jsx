
import { useState, useEffect } from 'react';
//Data global Inicial
import { useInitialStore } from '../store/useGlobalData';


const Carrusel = ({items}) => {
  const [activarIndice, setActivarIndice] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActivarIndice((anterior) =>(anterior + 1) % items.length)
    },5000);
    return ()=> clearInterval(interval);
  },[items]);
  
  return(
    <div className='banner-container'>
      {items.map((item,index)=>(
        <img src={item.image} alt={`Imagen-banner ${index}`} key={index} className={`img-carrusel ${index ===activarIndice ? 'active':''}`} />
      ))}
    </div>
  )
}
  function Banner(){
    const {dataInicial} = useInitialStore((state) => state)
    
   if (dataInicial) {
      // console.log(dataInicial)
     return (
       <div className='content-primeraImagen'>
         <div className='text-primeraImagen'>
           <h1>¡Bienvenido al emocionante mundo de las rifas y los sorteos!</h1>
           <p>¿Te atreves a participar.? La suerte en nuestra comunidad, sopla a favor de todos. ¡Participa ahora y se parte de nuestra historia de exitos!
           </p>
         </div>
         
         <Carrusel items={ dataInicial.imagesBanner && dataInicial.imagesBanner}/>
       </div>
 
     )
    
   }
  }

export default Banner