import React from 'react'


export class Faqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberFaqs: []
        };
        
    }
    saludo(e) {
        const faq = e.target
        if (faq.nodeName === 'DIV') {
            if (faq.className === 'faq' || faq.className === 'faq active') {
                faq.classList.toggle("active-faq")
            } else {
                faq.parentNode.classList.toggle("active-faq")
            }
        } else {
            if (faq.nodeName === 'svg' || faq.nodeName === 'H3') {
                console.log(faq.parentNode.parentNode)
                faq.parentNode.parentNode.classList.toggle("active-faq")
            } else {
                console.log(faq.parentNode.parentNode)
                faq.parentNode.parentNode.parentNode.classList.toggle("active-faq")
            }
        }
    }


    async componentDidMount() {
        this.setState({
            numberFaqs: [
                {
                    title: '¿Cómo funcionan las rifas? ',
                    response: 'Solo tienes que entrar al apartado de "RIFAS" y elegir los numeros con los cuales desees participar, al cumplirse el tiempo establecido, en nuestra plataforma, canales de difunsión como youtube, spotify y nuetras redes sociales se transmitira totalmente en vivo el proceso para elegir el ganador y a su vez se estará dando a conocer dicho ganador, además los datos del ganador estaran visibles en nuestra plataforma para hacer valer nuestra integridad y transprencia'
                },
                {
                    title: '¿Cómo funcionan los sorteos diarios?',
                    response: 'Al igual que las rifas solo tienes que entrar al apartado "SORTEOS" y elegir los numeros con los cuales desees participar, estos sorteos se realizarán diariamente a las 6pm hora de Venezuela. Se debe tomar en cuenta que la participacion minima para realizar el sorteo es de 100 personas asi podemos decir que el premio minimo diario es de 100$, si la cantidad de participantes es de 500 personas o mas pero no llegan a 1000 el premio minimo es de 500$, si llegamos a 1000 personas o mas el premio maximo es de 1000$. En el caso de no llegar a un minimo de participantes(100), el sorteo se realizara al dia siguiente. Al llegar la hora establecida y cumplir con la participacion minima, en nuestra plataforma, canales de difunsión como youtube, spotify y nuetras redes sociales se transmitira totalmente en vivo el proceso para elegir el ganador y a su vez se estará dando a conocer dicho ganador, además los datos del ganador estaran visibles en nuestra plataforma para hacer valer nuestra integridad y transprencia'
                },
                {
                    title: '¿Cómo se obtiene mayor ventaja para ganar?',
                    response: 'Al hacer tu compra bien sea de un solo numero o varios en la misma compra se te regala un id unico, el cual es un link para que puedas comprartirlo en tus diferentes redes socioales o metodo que prefieras. Por cada 10 personas que entren a nuestra plataforma a través de ese link y hagan una compra recibiras un numero aleatorio disponible. IMAGINATE EL PROVECHO QUE SE LE PUEDE SACAR A ESTO ☻'
                },
                {
                    title: '¿Que metodos de pago se aceptan?',
                    response: 'Tratamos de que el proceso de pago sea lo más rapido y eficiente posible para la comodidad de nuestros usuarios. La confianza del consumidor es un elemento clave a la hora de finalizar una compra en el comercio electrónico. Muchos son los métodos que se han intentado implementar en cuanto al pago en las transacciones. A continuación, se detallan algunos de los medios más utilizados: Paypal, Zelle, Tarjeta bancaria, Transferencias bancarias, Pago a través del móvil y Moneda virtual'
                },
                {
                    title: '¿Como se notifica a los ganadores?',
                    response: 'Después de realizar una compra verificada independientemente del evento en que el usuario deseé participar se estará llevando a un apartado para que introduzca sus datos en un formulario y así tener como contactarnos, además solo algunos de estos datos estaran visibles en nuestra plataforma, para hacer valer nuestra integridad, transparencia y confianza'
                },
                {
                    title: '¿Como es la entrega de los premios?',
                    response: 'En el caso de la entrega de los premios de las rifas, ponernos en contacto con nuestros ganadores es una gran ventaja, ya que existe la posibilidad de una interaccion personal, nuestros ganadores podrian elegir el medio que mas les convengan. En el caso de los sorteos el premio se estará entregando por el mismo medio de pago que el usuario realizá su compra'
                }
            ]
        });

    }

    render() {
        return (
            <section className="section-faqs">
                <h2 className="title-faq">Preguntas Frecuentes:</h2>
                {
                    this.state.numberFaqs.map((item, index) => {
                        return (
                            <div className="faq" onClick={this.saludo} key={index}>
                                <div className="question" >
                                    <h3>{item.title}</h3>
                                    <svg width="20" height="15" viewBox="0 0 42 25">
                                        <path
                                            d="M3 3L21 21L39 3"
                                            stroke="white"
                                            strokeWidth="7"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="answer">
                                    <p>
                                        {item.response}
                                    </p>
                                </div>
                            </div>
                        )

                    })
                }

            </section>
        )
    }

}
