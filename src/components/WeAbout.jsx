import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'

function WeAbout() {
    return (
        <>
            <h2 className="title-nosotros">Sobre Nosotros</h2>

            <div className="text-mision-vision">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tempore harum perspiciatis hic et. Deleniti esse, est aspernatur cum, libero quam unde suscipit ducimus voluptas omnis eveniet repudiandae, autem error facere ratione facilis architecto consectetur alias dolorem a dignissimos magni doloremque temporibus. Reprehenderit, non voluptas? Quidem sint veniam rem reiciendis! Neque ea, nobis dolorem culpa perspiciatis assumenda eveniet consequatur quisquam.
            </div>
            <div className="container-cards">
                <div className="card-nosotros">
                    <div className="cover">
                        <img src={p1} alt=""/>
                            <div className="img-back"></div>
                    </div>
                    <div className="description">
                        <h2>Hector Salas</h2>
                        <p>Desarrollador Full Stack, encargado de la arquitectura del Comando de los Premios</p>
                        <input type="button" value="Leer Más"/>
                    </div>
                </div>

                <div className="card-nosotros">
                    <div className="cover">
                        <img src={p2} alt=""/>
                            <div className="img-back"></div>
                    </div>
                    <div className="description">
                        <h2>Mauricio Moreno</h2>
                        <p>Desarrollador Front End, encargado de la estructura y Marketing Digital del Comando de los Premios</p>
                        <input type="button" value="Leer Más"/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeAbout