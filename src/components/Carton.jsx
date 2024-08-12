import React, { useLayoutEffect, useRef, useState } from "react";
// import { useEffect, useState } from "react";

function CartonRifa(){
    const numeros = Array.from({length : 100},(_,index)=> index + 1);

    const containerTitleRef = useRef(null)
    const titleResize = () => {
        const elemRef = document.getElementById("title-carton");
        containerTitleRef.current.clientWidth < 400 ? elemRef.style.fontSize = '1.2rem': elemRef.style.fontSize = '1.7rem';
    } 
    
    
    useLayoutEffect(()=>{
        titleResize();
        window.addEventListener('resize', titleResize);
        
        const effectNumbers = () => {
            let random = Math.floor(Math.random() * 100);
            let number = document.getElementById(`Effect_${numeros[random]}`);
            
            number.classList.add("efectoExplocion")
            setTimeout(()=>{
                number.classList.remove("efectoExplocion");
                number.classList.add("check2");
            },500);
        }

        let effect = setInterval(effectNumbers, 2000)
        setTimeout(()=>{
            clearInterval(effect);
            effect = null;
        },20000);
    },[])

    return (
        <div className="content-carton" ref={containerTitleRef}>
            <h1 className="title-carton" id="title-carton">El comando de los PREMIOS</h1>
            <div className="carton">
                {Array.from({length: 10}, (_,columnaIndex) => (
                    <div key={columnaIndex} className="columnaNumeros">
                        {numeros.slice(columnaIndex * 10, (columnaIndex + 1) * 10).map((numero)=>(
                            <div key={numero} className="contentNumeros">
                                <div className="numeros" id={`Effect_${numero}`}>
                                    {numero}
                                </div>   
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default CartonRifa




