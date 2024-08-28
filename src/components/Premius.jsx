import dinero from '../assets/images/banner.jpeg'
import auto from '../assets/images/banner.jpeg'
import moto from '../assets/images/banner.jpeg'
import React, { useState } from "react";


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
                            <button><a href="#">Compra Tu Numero</a></button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Premius









