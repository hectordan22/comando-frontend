import carro from '../assets/images/carro.jpg'
import sorteo from '../assets/images/sorteo.jpg'
import Reloj from './Reloj'

import React from 'react'


import { Link } from 'react-router-dom'


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
                    description: 'Con un pago movil unicamente a traves de la plataforma',
                    path: '/Sorteo/none'
                },
                {
                    title: 'Rifas',
                    description: 'Los sorteos se realizan a diario a las 6pm y se transmite en vivo. La cantidad de dinero para el ganador depende del numero de participantes que compraron tickets',
                    path: '/Rifa',
                    horaRifa:'6:00',
                    fechaRifa:'06/29/2024'
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
                                    <img src={item.title ==='Sorteos' ? sorteo : carro} alt={item.title} />
                                    <div className='button-sorteo-more'>
                                    <Link className='btn-more-winner' to={item.path}>{ item.title }</Link>
                                    </div>
                                </div>
                                <div className='content-description'>
                                    <p>{item.description}</p>
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

