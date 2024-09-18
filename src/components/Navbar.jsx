
import iconMenu from '../assets/images/icon-menu.png'
import closeMenu from '../assets/images/close-menu.png'
import ruedaLogo from '../assets/images/mago.png'

import { Link } from 'react-router-dom'
import { useState } from 'react';

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


  const closeMovilNav = () => {
    if (isMovil) {
      setShowUl(!showUl)
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
        <Link to="/"><img src={ruedaLogo} alt="" /></Link>
      </div>
      <h1 className="title-desktop">El comando de los Premios</h1>
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
          <h1 className="title-movil">El comando de los Premios</h1>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/">Inicio</Link ></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/Rifa">Rifas</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/Sorteo/none">Sorteos</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/Premius">Premios</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/Ganadores">Ganadores</Link></li>
          <li onClick={closeMovilNav}><Link className='pathRoute' to="/">Contacto</Link></li>
          <div className='img-logo-movil'>  </div>
        </ul>
      </div>
    </header>
  )
}

export default Navbar