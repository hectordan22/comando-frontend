import inicioBanner from '../assets/images/winner-inicio.jpg'
import prueba2 from '../assets/images/sorteo.jpg'
import prueba3 from '../assets/images/iconLogo.png'
import dinero from '../assets/images/banner.jpeg'
import { useState} from 'react';


const images = [inicioBanner, prueba2,prueba3,dinero]
function Banner() {
  const [position, setPosition ] = useState(2)

    const nextItem = () => {
      setTimeout(() => {
        setPosition((position) => position === images.length - 1 ? 0 : position + 1)
       
      }, 3000);
      
  }
    return (
      <div>
          <div className="banner-container" >
          <img src={images[position]} onLoad={nextItem} />
         {/*  <span className="description-banner-desktop" >
              Puedes ser el proximo Ganador
          </span> */}
      </div>
      </div>
    )
  
    
}

export default Banner