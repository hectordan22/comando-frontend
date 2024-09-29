import React from "react";
import Poster from "../assets/images/Poster1.png"

const baseDatos = Array(50)


function DataDisplay(data){
    const dataLength = data.length;

    if(dataLength < 100){
        return(
            <div className="content-see">
                <h1>No se ha alcanzado un minimo de participantes para el Sorteo</h1>
                {dataLength &&(
                   <p>Participando: <span>{dataLength}</span><br/>
                    Se debe alcanzar un minimo de 100 participantes para el premio minimo ¿Listo para le emoción? ¡Inscribete y gana!</p>
                )}
                {!dataLength &&(
                    <p>Se debe alcanzar un minimo de 100 participantes para desbloquear el premio minimo ¿Listo para le emoción? ¡Inscribete y gana!</p>
                )}
                <h2>¡No te quedes sin tu premio! Participa ahora</h2>
            </div>
        )
    }else if(dataLength >= 100 && dataLength < 500){
        return(
            <div className="content-see">
                <h1>Premio a repartir <span>100$</span></h1>
                <p>Participando: <span>{dataLength}</span><br />
                Se ha desbloqueado el premio minimo a repartir. ¡Gana y sorprendete! ¡Participa en nuestro sorteo!</p>
                <h2>¡No te quedes sin tu premio! Participa ahora</h2>
            </div>
        )
    }else if(dataLength >= 500 && dataLength < 1000){
        return(
            <div className="content-see">
                <h1>Premio a repartir <span>500$</span></h1>
                <p>Participando: <span>{dataLength}</span><br />
                Hemos alcanzado el siguiente nivel. Tu suerte te esta esperando. ¡Participa ahora!</p>
                <h2>¡No te quedes sin tu premio! Participa ahora</h2>
            </div>
        )
    }else if(dataLength >= 1000){
        return(
            <div className="content-see">
                <h1>Premio a repartir <span>1000$</span> </h1>
                <p>¡Se ha alcanzado lo que todos queremos! El maximo premio. ¡No pierdas esta oportunidad!. ¡La suerte está de tu lado!. ¡Participa ahora mismo!</p>
                <h2>¡No te quedes sin tu premio! Participa ahora</h2>
            </div>
        )
    }
}


function Seeparticipants(){
    return(
        <div className="content-seeparticipants">
            <img src={Poster} alt="poster" />
            {DataDisplay(baseDatos)}
        </div>
    )
}

export default Seeparticipants;



