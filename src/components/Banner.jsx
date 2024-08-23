import inicioBanner from '../assets/images/winner-inicio.jpg'
import prueba2 from '../assets/images/sorteo.jpg'
import prueba3 from '../assets/images/iconLogo.png'
import dinero from '../assets/images/banner.jpeg'
import { useState, useEffect } from 'react';

const images = [inicioBanner, prueba2,prueba3,dinero]
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
    return (
      <div className='Paleta-Colores-banner'>
        <Carrusel items={images}/>
      </div>

    )
  }

export default Banner