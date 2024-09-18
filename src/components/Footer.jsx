

function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>El comando de los <span>Premios</span></h3>

                <p className="footer-links"><a href="#">Home</a> | <a href="#">About </a> | <a href="#">Contact </a> | <a href="#">Blog</a>
                </p>

                <p className="footer-company-name">Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved</p>

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
                    <p>Ghaziabad Delhi</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 74**9**258</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
                </div>

                
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations and Effects along with HTML, JavaScript and Projects using C/C++.
                </p> 
            </div>
        </footer>
    )
}

export default Footer