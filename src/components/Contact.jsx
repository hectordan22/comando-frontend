import Footer from "./Footer"
import OfflineNotice from './Offline.jsx'

function Contact() {
    return (
        <>
            <section id="Contactos">
                <h1 className="contac-title">Contactate con Nosotros</h1>
                <div className="container-contact">
                    <div className="box-info">
                        <div className="data-contac">
                            <p><i className="fa-solid fa-phone"></i> +58-426-462-8262</p>
                            <p><i className="fa-solid fa-phone"></i> +58-426-915-6600</p>
                            <p><i className="fa-solid fa-envelope"></i> elComandodelosPREMIOS@gmail.com</p>
                            <p><i className="fa-solid fa-location-dot"></i> Valera - Edo Trujillo- Venezuela</p>
                        </div>
                        <div className="links">
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <form>
                        <div className="input-box">
                            <input type="text" placeholder="Nombre y apellido" required />
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="input-box">
                            <input type="email" required placeholder="Correo electrónico" />
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Asunto" />
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <div className="input-box">
                            <textarea placeholder="Escribe tu mensaje..."></textarea>
                        </div>
                        <button type="submit">Enviar mensaje</button>
                    </form>
                </div>
            </section>
            <Footer/>
            <OfflineNotice/>
        </>
    )
}

export default Contact