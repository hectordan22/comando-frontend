import dinero from '../assets/images/banner.jpeg'
import auto from '../assets/images/banner.jpeg'
import moto from '../assets/images/banner.jpeg'
import React, { useEffect } from"react";
import { Link } from 'react-router-dom';


const premios = [
    {
        name: "primero",
        img: dinero,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "segundo",
        img: auto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "tercero",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "cuarto",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    }
];


function Premius() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página hacia arriba
        document.body.classList.add('no-scroll');

        return document.body.classList.remove('no-scroll');
    });

    return (
        <div className='section-premios'>
            {premios.map((item, index) => {
                return (
                    <div key={index} className='content-padre-premios'>
                        <div className='contentImg-premios'><img src={item.img} alt={item.name} /></div>
                        <div className='contentDesciption-premios'>
                            <h1>{item.name}</h1>
                            <p className='description-premios'>{item.description}</p>
                        </div>
                        <div className='content-button'>
                            <button><Link className='pathRoute' to="/Rifa">Compra Tu Numero</Link></button>                            
                      </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Premius









