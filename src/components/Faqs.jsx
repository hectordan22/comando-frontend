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
                faq.classList.toggle("active")
            } else {
                faq.parentNode.classList.toggle("active")
            }
        } else {
            console.log(faq.nodeName)
            if (faq.nodeName === 'svg' || faq.nodeName === 'H3') {
                console.log(faq.parentNode.parentNode)
                faq.parentNode.parentNode.classList.toggle("active")
            } else {
                console.log(faq.parentNode.parentNode)
                faq.parentNode.parentNode.parentNode.classList.toggle("active")
            }
        }
    }


    async componentDidMount() {
        this.setState({
            numberFaqs: [
                {
                    title: '¿ Como Pagar ? ',
                    response: 'Con un pago movil unicamente a traves de la plataforma'
                },
                {
                    title: '¿ Como son los sorteos?',
                    response: 'Los sorteos se realizan a diario a las 6pm y se transmite en vivo. La cantidad de dinero para el ganador depende del numero de participantes que compraron tickets'
                },
                {
                    title: 'Que es JavaScript?',
                    response: 'Los Efectos tienen un diferente ciclo de vida al de los componentes. Los componentes pueden montarse, actualizarse o desmontarse. Un Efecto solo puede hacer dos cosas: empezar a sincronizar algo y luego dejar de sincronizarlo. Este ciclo puede suceder varias veces si tu Efecto depende de props y estado que cambian con el tiempo. React provee una regla del linter para comprobar que hayas especificado las dependencias de tu Efecto correctamente'
                }
            ]
        });

    }

    render() {
        return (
            <section className="section-faqs">
                <h2 className="title">FAQs</h2>
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
