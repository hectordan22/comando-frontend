// import carro from '../assets/images/carro.jpg'
// import sorteo from '../assets/images/sorteo.jpg'
import Reloj from './Reloj'
import Balls from './Balls'
import React from 'react'
import tambor from '../assets/images/Tambor5.png'
import { Link } from 'react-router-dom'
import CartonRifa from './Carton'


export class WinnerWhitme extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {

        this.setState({
            data: [
                {
                    title: 'Sorteos',
                    description: (
                        <p>SORTEOS EPICOS: ¡Descubre tu suerte y conviertete en un ganador!<br></br>
                        Los sorteos se realizan a diario a las 6pm y se transmite en vivo. La cantidad de dinero para el ganador depende del numero de participantes.<br></br>
                        No te quedes por fuera compra tu ticket ya.!
                        </p>
                    ),
                    path: '/Sorteo/none'
                },
                {
                    title: 'Rifas',
                    description: (
                        <p>¡Participa en Nuestras Emocionantes Rifas!<br></br>
                            -PRIMER PREMIO<br></br>
                            -SEGUNDO PREMIO<br></br>
                            -TERCER PREMIO<br></br>
                            Además de muchos premios sorpresa ¡Participa Ahora!</p>
                    ),
                    path: '/Rifa',
                    horaRifa:'6:00',
                    fechaRifa:'10/29/2024'
                    /*Cambiar la fecha(fechaRifa) despues la rifa*/
                }

            ]
        });

    }
    render() {
        return (
            <section className='father-winner'>
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div className='content-winner' key={index}>
                                <div className='content-image'>
                                    <img src={item.title ==='Sorteos' ? tambor : ''} alt={item.title} />
                                    {item.title === 'Sorteos'? <Balls/> : <CartonRifa/> }
                                    <div className='button-sorteo-more'>
                                    <Link className='btn-more-winner' to={item.path}>{ item.title }</Link>
                                    </div>
                                </div>
                                <div className='content-description'>
                                    {item.description}
                                </div>

                                <div className='content-reloj'>
                                 {
                                  item.title === 'Sorteos' ?  <Reloj type='sorteo' key={index} /> :  <Reloj type='rifa' dateRifa={item.fechaRifa} horaRifa={item.horaRifa} key={index} />
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

