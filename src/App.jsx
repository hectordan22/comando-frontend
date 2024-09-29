
import './App.css'
import './styles/Selector.css'
import './styles/Reloj.css'
import './styles/WinnerWhitme.css'
import './styles/loader.css'
import './styles/LastWinner.css'
import './styles/Faqs.css'
import './styles/Contact.css'
import './styles/Awards.css'
import './styles/video-player.css'
import './styles/videogallery.css'
import './styles/Footer.css'
import './styles/Seeparticipants.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import { WinnerWhitme } from './components/WinnerWhitme.jsx'
import LastWinner from './components/LastWinner.jsx'
import { Faqs } from './components/Faqs.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Reloj from './components/Reloj.jsx'
import SelectorRifa from './components/SelectorRifa.jsx'
import SelectorSorteo from './components/SelectorSorteo.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormBuy from './components/FormBuy.jsx'
import Awards from './components/Awards.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'
import ExportVideoGallery from './components/VideoGallery.jsx'
import Seeparticipants from './components/Seeparticipants.jsx'

/* import videoPrueba from './assets/videos/video-10-9-2024.mp4'; */
import { useEffect } from 'react'
import { useInitialStore } from './store/useGlobalData.js'

let videoPrueba = ''

function App() {

  const { dataInicial, isLoading, error,fetchDataInicial } = useInitialStore();
  useEffect(() => {
    fetchDataInicial();
  }, []);

  if (dataInicial) {
    videoPrueba = dataInicial.videoInicialUrl
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Inicio' element={[
             <Banner key={1}/>,
             <h1 key={2} className='title-winner-withme'>Ganar Es Facil Con Nosotros</h1>,
             <VideoPlayer key={3} url={videoPrueba}/>,/*Si las direcciones se encuentran localmente no es necesario colocarle aqui la url ni el audio */
             <Seeparticipants key={4}/>,
             <WinnerWhitme key={5} />,
             <LastWinner key={6} />,
             <Faqs key={7} />,
             <Contact key={8} />,
             <Footer key = {9}/>,
          
        ]}/>
        
        {/*Cambiar la fecha(dateRifa) despues la rifa*/}
        <Route path='/Rifa'
           element = {[
            <div key={1} className='cont-app-reloj'><Reloj type='rifa' /></div>,
            <h2 className='titleSelector'  key={2}>Elige y Compra Ahora mismo tu numero y Participa en Nuestra Gran Rifa</h2>,
            <SelectorRifa key={3}/>
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

        <Route path='/Awards'
            element = {<Awards/>}
        />
        <Route path='/Ganadores' element= {<ExportVideoGallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
