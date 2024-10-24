
import './App.css'
import './styles/Selector.css'
import './styles/Reloj.css'
import './styles/WinnerWhitme.css'
import './styles/loader.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import { WinnerWhitme } from './components/WinnerWhitme.jsx'
import LastWinner from './components/LastWinner.jsx'
import WeAbout from './components/WeAbout.jsx'
import { Faqs } from './components/Faqs.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
// import SelectorTicket from './components/SelectorTicket.jsx'
import Reloj from './components/Reloj.jsx'
import SelectorRifa from './components/SelectorRifa.jsx'
import SelectorSorteo from './components/SelectorSorteo.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormBuy from './components/FormBuy.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={[
             <Banner key={1} />,
             <h1 key={9} className='title-winner-withme'>Gana dinero con Nosotros</h1>,
             <WinnerWhitme key={2} />,
             <LastWinner key={5} />,
             <WeAbout key={6} />,
             <Faqs key={7} />,
             <Contact key={8} />
   
        ]}/>
        
        {/*Cambiar la fecha(dateRifa) despues la rifa*/}
        <Route path='/Rifa'
           element = {[
            <div key={1} className='cont-app-reloj'><Reloj type='rifa' dateRifa='06/29/2024' horaRifa='6:00' /></div>,
            <h2 className='titleSelector'  key={2}>Elige y Compra Ahora mismo tu numero y Participa en Nuestra Gran Rifa</h2>,
            <SelectorRifa key={3} />
           ]
           }
        />
         
        {/* Ruta para comprar desde un enlace que una persona me haya compartido */}
        <Route path='/Sorteo/:afiliado'
          element = {[
            <div className='cont-app-reloj' key={1}><Reloj type='sorteo'  /></div>,
            <h2 className='titleSelector' key={2}>Compra tu Numero Ahora y Participa en Nuestro Gran Sorteo</h2>,
            <SelectorSorteo key={3} />
          ]}
        
        />

        <Route path='/formBuy/:type/:boletos/:afiliado'
            element = {<FormBuy/>}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
