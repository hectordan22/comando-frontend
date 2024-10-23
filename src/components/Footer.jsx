

function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>El comando de los <span>Premios</span></h3>

                <p className="footer-links"><a href="#">Inicio</a> | <a href="#">Rifas </a> | <a href="#">Sorteos </a> | <a href="#">Contacto</a>
                </p>

                <p className="footer-company-name">Copyright © 2024 <strong>El Comando De Los PREMIOS</strong> Todos los derechos reservados</p>

                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                </div>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p>Valera - Edo Trujillo - Venezuela</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+58-426-462-8262</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p>elComandodelosPREMIOS@gmail.com</p>
                </div>

                
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Sobre Nosotros</span>
                    <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript and Projects using C/C++.
                </p> 
            </div>
        </footer>
    )
}

export default Footer