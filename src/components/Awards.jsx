import Footer from './Footer';

import { Link } from 'react-router-dom';
import OfflineNotice from './Offline.jsx'
import fetchData from '../scripts/fetchData.js';
import '../styles/Awards.css'
import { useState, useEffect } from 'react';

const initials = { error:null, data: null, loader:true}
function Awards() {
     const [infoInitial, setInfoInitial] = useState(initials)
    const titles = [
        { name:'Premios Principales', key:'premio_principal'},
        { name: 'Premios Sorpresa', key:'premio_sorpresa'},
        { name:'Primeros Eliminados', key:'primeros_eliminados'}
        ]
   
    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página hacia arriba
        document.body.classList.add('no-scroll');
        const initData = async () => {
          const { error, data, loader } = await fetchData('http://localhost:3000/api/getPremios')
          setInfoInitial({error, data, loader})
        }

        initData()
        return document.body.classList.remove('no-scroll');
    },[]);

    if (infoInitial.loader) {
        return (
            <div className='show-modal' id='show-modal'>
                <div className='mago-container'></div>
                <div className="cargando">
                    <div className="pelotas">45</div>
                    <div className="pelotas">62</div>
                    <div className="pelotas">158</div>
                    <span className="texto-cargando">Cargando...</span>
                </div>
            </div>)
    }
    
    if (infoInitial.data) {
        return (
            <>
                <div className='margin-top'></div>
                 {infoInitial.error || infoInitial.data.error && 'Ha ocurrido un error al cargar los datos'}
                 { 
                 (!infoInitial.error && !infoInitial.data.error) && 
                 titles.map((item, index) => {
                    return (
                        <div className='section-premios' key={index}>
                            <h1 className="title-premios">{infoInitial.data.response[item.key].length > 0 && item.name}</h1> <br /><br />
                            { infoInitial.data.response[item.key].length > 0 && infoInitial.data.response[item.key].map((item, index) => {
            
                                return (
                                    <div key={index} className={index == 0 ? 'content-padre-premios0' : 'content-padre-premios'}>
                                        <div className='contentImg-premios'><img src={`http://localhost:3000/premios/${item.imagen}`} alt={item.tipo} /></div>
                                        <div className='contentDesciption-premios'>
                                            <h1>{item.titulo}</h1>
                                            <p className='description-premios'>{item.descripcion}</p>
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
                   
                 })
                  
                }
                <Footer />
                <OfflineNotice/>
            </>
        )
    }
  
}

export default Awards









