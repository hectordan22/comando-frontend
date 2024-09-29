
import iconMenu from '../assets/images/icon-menu.png'
import closeMenu from '../assets/images/close-menu.png'
import ruedaLogo from '../assets/images/mago.png'

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Navbar() {
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
  }, [isMovil])

  const closeMovilNav = (e) => {

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
      elementNavar = e.target;
    }
  }


  // Add the match function as a listener for state changes
  mmObj.addEventListener("change", function () {
    let valueViewPort = verifyViewport(mmObj);
    setIsMovil(valueViewPort)
  });

  return (

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
          <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Sorteo" to="/Sorteo/none">Sorteos</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Awards" to="/Awards">Premios</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Ganadores" to="/Ganadores">Ganadores</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' data-path="/Contactos" to="/Contactos">Contacto</Link></li>
          <div className='img-logo-movil'>  </div>
        </ul>
      </div>
    </header>
  )
}

export default Navbar