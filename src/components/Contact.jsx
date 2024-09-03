

function Contact() {
    return (
        <>
            <h1 className="contac-title">Contactate con Nosotros</h1>
            <div className="container-contact">
                <div className="box-info">
                    <div className="data-contac">
                        <p><i className="fa-solid fa-phone"></i> +1 408 224 4587</p>
                        <p><i className="fa-solid fa-envelope"></i> livingcodedev@gmail.com</p>
                        <p><i className="fa-solid fa-location-dot"></i> 30 Grant Ave San Francisco CA 94108-5834. USA</p>
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
           
        </>
    )
}

export default Contact