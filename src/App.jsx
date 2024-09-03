
import './App.css'
import './styles/Selector.css'
import './styles/Reloj.css'
import './styles/WinnerWhitme.css'
import './styles/Loader.css'
import './styles/LastWinner.css'
import './styles/Faqs.css'
import './styles/Contact.css'
import './styles/Premius.css'
import './styles/video-player.css'
import './styles/videogallery.css'
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
import Premius from './components/Premius.jsx'
import VideoPlayer from './components/VideoPlayer.jsx'
import VideoGallery from './components/VideoGallery.jsx'



function App() {
  const videos = [
    {
      id: 1,
      url: '/video1.mp4',
      miniatura:'/miniatura1.jpg',
      title: 'Video 1'
    },
    {
      id: 2,
      url: '/video2.mp4',
      miniatura:'/miniatura2.jpg',
      title: 'Video 2'
    },
    {
      id: 3,
      url:  '/video3.mp4',
      miniatura:'/miniatura3.jpg',
      title: 'Video 3'
    }
  ]

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={[
             <Banner key={1}/>,
             <h1 key={2} className='title-winner-withme'>Ganar Es Facil Con Nosotros</h1>,
             <VideoPlayer key={3} url={'https://www.youtube.com/watch?v=Ps9VDFSqbQ8'} audioUrl={'https://www.youtube.com/watch?v=Ps9VDFSqbQ8'}/*Si las direcciones se encuentran localmente no es necesario colocarle aqui la url ni el audio *//>,
             <WinnerWhitme key={4} />,
             <LastWinner key={5} />,
             <VideoGallery key={6} videos={videos}/>,
             <Faqs key={7} />,
             <Contact key={8} />,
             <Footer key = {9}/>,
             
        ]}/>
        
        {/*Cambiar la fecha(dateRifa) despues la rifa*/}
        <Route path='/Rifa'
           element = {[
            <div key={1} className='cont-app-reloj'><Reloj type='rifa' dateRifa='09/29/2024' horaRifa='6:00' /></div>,
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

        <Route path='/Premius'
            element = {<Premius/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
