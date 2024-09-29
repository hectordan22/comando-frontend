// import carro from '../assets/images/carro.jpg'
// import sorteo from '../assets/images/sorteo.jpg'
import Reloj from './Reloj'
import Balls from './Balls'
import tambor from '../assets/images/Tambor5.png'
import { Link } from 'react-router-dom'
import CartonRifa from './Carton'

import { useInitialStore } from '../store/useGlobalData'

const data = [
    {
        title: 'Sorteos',
        description: (
            <p><span>SORTEOS EPICOS: ¡Descubre tu suerte y conviertete en un ganador!</span><br></br>
            Los sorteos se realizan a diario a las 6pm y se transmite en vivo. La cantidad de dinero para el ganador depende del numero de participantes.<br></br>
            No te quedes por fuera compra tu ticket ya.!
            </p>
        ),
        path: '/Sorteo/none'
    },
     {
        title: 'Rifas',
        description: (
            <p><span>¡Participa en Nuestras Emocionantes Rifas y gana premios increibles!</span><br></br>
                -PRIMER PREMIO<br></br>
                -SEGUNDO PREMIO<br></br>
                -TERCER PREMIO<br></br>
                Además de muchos premios sorpresa ¡Participa Ahora!</p>
        ),
        
        path: '/Rifa'
        /*Cambiar la fecha(fechaRifa) despues la rifa*/
    }

]

export function WinnerWhitme() {
    const {dataInicial} = useInitialStore((state) => state)
   /*  let nuevaData = [
        data[0]
    ] 
    if (dataInicial) {
       nuevaData.push({
        ...data[1],
        horaRifa:dataInicial.horaRifa,
        fechaRifa:dataInicial.fechaRifa

       })

    }  */  
    if (dataInicial) {
        return (
            <section className='father-winner'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='content-winner' key={index}>
                                <div className='content-image'>
                                    <img src={item.title ==='Sorteos' ? tambor : ''} alt={item.title} />
                                    {item.title === 'Sorteos'? <Balls/> : <CartonRifa/> }
                                    <div className='button-sorteo-more'>
                                        <Link className='btn-more-winner' to={item.path}> <span>{ item.title }</span><i></i></Link>                                      
                                    </div>
                                </div>
    
                                <div className='content-description'>
                                    {item.description}
                                </div>
    
                                <div className='content-reloj'>
                                 {
                                  item.title === 'Sorteos' ?  <Reloj type='sorteo' key={index} /> :  <Reloj type='rifa' key={index} />
                                 } 
                                </div>                              
                            </div>
                        )
                    })
                }
    
    
            </section>
        )
    }
   
}


