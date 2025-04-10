import iconMenu from '../assets/images/icon-menu.png'
import closeMenu from '../assets/images/close-menu.png'
import ruedaLogo from '../assets/images/mago.png'

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { useInitialStore } from '../store/useGlobalData.js'

import { VideoObserver, VIDEO_STATES } from './VideoObserver.jsx';

import Popup from '../components/InfoPopup.jsx'

function Navbar() {
  const { fetchDataInicial } = useInitialStore();

  const verifyViewport = (x) => {
    if (x.matches) {
      return true
    } else {
      return false
    }
  }

  // Create a MediaQueryList object
  const mmObj = window.matchMedia("(max-width: 768px)")
  const [showUl, setShowUl] = useState(false)
  const [isMovil, setIsMovil] = useState(verifyViewport(mmObj))
  const location = useLocation();
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [visiblePopup, setVisiblePopup] = useState(false)

  useEffect(() => {
    let position = [...document.querySelectorAll(".pathRoute")]
    let urlPage = location.pathname;
    if (isMovil) {
      position.map((el) => {
        el.classList.remove("pathRoute-focus");
      })
    } else {
      position.map((el) => {
        if (urlPage.includes(el.dataset.path)) {
          el.classList.add("pathRoute-focus");
        }
      })
    }

    const unsubscribe = VideoObserver.subscribe(({ state }) => {
      if (state === VIDEO_STATES.PLAYING) {
        setVideoPlaying(true)
        // console.log("El video esta en reproduccion");
      }
      if (state === VIDEO_STATES.ENDED) {
        console.log("El video terminó en el componente hijo");
      }
    });

    return unsubscribe;
  }, [isMovil, videoPlaying]);


  const closeMovilNav = async (e) => {
    if (isMovil) {
      let position = [...document.querySelectorAll(".pathRoute")]
      position.map((el) => {
        el.classList.remove("pathRoute-focus");
      })
      setShowUl(!showUl)
    } else {
      let elementNavar = [...document.querySelectorAll(".pathRoute-focus")];
      if (e.target.matches(".pathRoute")) {
        elementNavar.map((el) => {
          el.classList.remove("pathRoute-focus");
        })
        e.target.classList.add("pathRoute-focus");
      }
      if (e.target.dataset.path === '/Inicio') {
        fetchDataInicial();
      }
      elementNavar = e.target;
    }
  }
  const preventGoToRoute = (e) => {
    if (e.target.dataset.path === '/Sorteo') {
      e.preventDefault();
      e.stopPropagation(); 
      setVisiblePopup(true)
    }
  }

  // Add the match function as a listener for state changes
  mmObj.addEventListener("change", function () {
    let valueViewPort = verifyViewport(mmObj);
    setIsMovil(valueViewPort)
  });


  return (
    <>
      {videoPlaying &&
        <Popup icono="warning" show={visiblePopup} titulo="El Sorteo de hoy esta en Curso" description="Por favor espera a que el sorteo termine para poder comprar tu ticket para el proximo sorteo" boton="ACEPTAR" />}

      <header className="header">
        <div className="logo-header">
          <Link to="/Inicio"><img src={ruedaLogo} alt="" /></Link>
        </div>
        <h1 className="title-desktop">El comando de los PREMIOS</h1>
        <div className="nav-menu">
          <input type="checkbox" id="check" onClick={closeMovilNav} />
          <label htmlFor="check" className="checkbtn">
            <i className="menu-icon" id="btn-menu-action"><img id="img-menu-action" src={showUl ? closeMenu : iconMenu} alt="" /></i>
          </label>
          <ul className={showUl ? 'showUl' : 'hideUl'}>
            <div className='button-movil-nav'>
              <input type="checkbox" id="check" onClick={closeMovilNav} />
              <label htmlFor="check" className="checkbtn">
                <i className="menu-icon" id="btn-menu-action"><img id="img-menu-action" src={showUl ? closeMenu : iconMenu} alt="" /></i>
              </label>
            </div>
            <h1 className="title-movil">El comando de los PREMIOS</h1>
            <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Inicio" to="/Inicio">Inicio</Link ></li>
            <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Rifa" to="/Rifa">Rifas</Link></li>
            <li onClick={videoPlaying ? preventGoToRoute : closeMovilNav}>
              <Link
                className='pathRoute'
                data-path="/Sorteo"
                to={videoPlaying ? "/Inicio" : "/Sorteo/none"}
                onClick={(e) => videoPlaying && e.preventDefault()}
              >
                Sorteo
              </Link>
            </li>
            <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Awards" to="/Awards">Premios</Link></li>
            <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Ganadores" to="/Ganadores">Ganadores</Link></li>
            <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Contactos" to="/Contactos">Contacto</Link></li>
            <div className='img-logo-movil'>  </div>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar