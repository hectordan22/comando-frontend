import Footer from './Footer';
import dinero from '../assets/images/banner.jpeg'
import auto from '../assets/images/banner.jpeg'
import moto from '../assets/images/banner.jpeg'
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import OfflineNotice from './Offline.jsx'

const premiosPrincipales = [
    {
        name: "Primer Premio",
        img: dinero,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "Segundo Premio",
        img: auto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "Tercer Premio",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    }
];

const premiosSorpresa = [
    {
        name: "Primer Eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },
    {
        name: "Segundo eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "Tercer Eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    }
];

const PrimerosEliminados = [
    {
        name: "Primer Eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },
    {
        name: "Segundo eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    },

    {
        name: "Tercer Eliminado",
        img: moto,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci recusandae eligendi vero sapiente blanditiis debitis temporibus, iste architecto quam ullam suscipit eius, numquam sunt id inventore deleniti incidunt fugiat odio!'
    }
];
function Awards() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página hacia arriba
        document.body.classList.add('no-scroll');

        return document.body.classList.remove('no-scroll');
    });

    const MapArray = (array, name) => {
        return (
            <>
                <div className='section-premios'>
                    <h1 className="title-premios">{name}</h1>
                    {array.map((item, index) => {
                        return (
                            <div key={index} className={index == 0 ? 'content-padre-premios0' : 'content-padre-premios'}>
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
            </>
        )
    }
    return (
        <>
            <div className='margin-top'></div>
            {MapArray(premiosPrincipales, 'Premios Principales')}
            {MapArray(premiosSorpresa, 'Premios Sorpresa')}
            {MapArray(PrimerosEliminados, 'Primeros Eliminados')}
            <Footer />
            <OfflineNotice/>
        </>
    )
}

export default Awards









