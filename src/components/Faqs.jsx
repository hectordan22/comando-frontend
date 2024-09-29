
import { useInitialStore } from '../store/useGlobalData';

export function Faqs() {
    const {dataInicial} = useInitialStore((state) => state)
  
  const saludo = (e) => {
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

        return (
            <section className="section-faqs">
                <h2 className="title-faq">Preguntas Frecuentes:</h2>
                {
                  dataInicial && dataInicial.Faqs.map((item, index) => {
                        return (
                            <div className="faq" onClick={saludo} key={index}>
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
