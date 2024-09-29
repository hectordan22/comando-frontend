/* import inicioBanner from '../assets/images/winner-inicio.jpg'
import prueba2 from '../assets/images/sorteo.jpg'
import prueba3 from '../assets/images/iconLogo.png'
import dinero from '../assets/images/banner.jpeg' */
import { useState, useEffect } from 'react';
//Data global Inicial
import { useInitialStore } from '../store/useGlobalData';


/* const images = [inicioBanner, prueba2,prueba3,dinero] */

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
      {items.map((imagenUrl,index)=>(
        <img src={imagenUrl} alt={`Imagen-banner ${index}`} key={index} className={`img-carrusel ${index ===activarIndice ? 'active':''}`} />
      ))}
    </div>
  )
}
  function Banner(){
    const {dataInicial} = useInitialStore((state) => state)
    
   if (dataInicial) {
     return (
       <div className='content-primeraImagen'>
         <div className='text-primeraImagen'>
           <h1>¡Bienvenido al emocionante mundo de las rifas y los sorteos!</h1>
           <p>¿Te atreves a participar.? La suerte en nuestra comunidad, sopla a favor de todos. ¡Participa ahora y se parte de nuestra historia de exitos!
           </p>
         </div>
         
         <Carrusel items={dataInicial.imagesBanner}/>
       </div>
 
     )
    
   }
  }

export default Banner