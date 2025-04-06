import { useEffect } from "react";
import fallaServidor from '../assets/images/img-falla-al-servidor.png'
import fallaServidor2 from '../assets/images/img-falla-al-servidor2.png'
import warningEvento from '../assets/images/img-warning.png'
import successEvento from '../assets/images/img-success-popup.png'
import informarEvento from '../assets/images/infoImg.png'
import '../styles/InfoPopup.css'
const typePopup = {
    success: successEvento,
    fail: [fallaServidor, fallaServidor2],
    info: informarEvento,
    warning: warningEvento
};

const animateImgPopup = ()=>{
    const imgAnimada = document.getElementById(`img-popup1`)
    let animatePopup = setInterval(()=>{
        imgAnimada.style.zIndex = "-999"
    },2000)
    let animatePopup2 = setInterval(()=>{
        imgAnimada.style.zIndex = "999"
    },4000)
    setTimeout(()=>{
        clearInterval(animatePopup)
        clearInterval(animatePopup2)
    },60000)
   
}


function Popup({icono, titulo, description, boton, show, enlace = {actve:false, link:""}}){

    useEffect(()=>{
        if (icono === "fail") {
            animateImgPopup()  
        }
    },[icono])

   
    const handleRetry = () => {
        window.location.reload();
    }
    return(
        <div className="content-father-popup" style={show?{display: "flex",flexDirection:"column"} :{display: "none"}}>
            <div className="content-popup" style={show?{display: "flex",flexDirection:"column"} :{display: "none"}}>
                <div className="icono-popup">
                    {(icono === "fail")
                    ?typePopup[icono].map((img,index)=>(
                        <img key={index} src={img} alt="icono" id={`img-popup${index}`}/>
                    ))
                    :<img src={typePopup[icono]} alt="icono"/>}
                </div>
                <div className="title-popup">
                    <h1>{titulo}</h1>
                </div>
                <div className="description-popup">
                    <p>{description}</p>
                </div>
                <div className="enlace-popup">
                    <p>{enlace.link}</p>
                </div>
                <button className="btn-popup" onClick={handleRetry}>{boton}</button>
            </div>
        </div>
    )
    
}

export default Popup


