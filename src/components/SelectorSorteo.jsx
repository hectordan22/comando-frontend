import arrowCircle from '../assets/images/arrow-circle-next.png'
import ticketDefinido from '../assets/images/ticke_definido_1.png'
import { useParams } from "react-router-dom"
import Footer from './Footer.jsx'
import useFetchBolets from '../scripts/useFetch';
import logo from '../assets/images/mago.png';
import { useState, useEffect } from 'react';



let arraySorteo = [];
let totalSorteos = 0


function SelectorSorteo() {
    const { afiliado } = useParams()
    const [countSorteo, setcountSorteo] = useState(0)
    const [valuesSorteo, setValuesSelect] = useState([])
    const [showAmountsSorteo, setShowAmountsSorteo] = useState(false)
    const { error, data, loading } = useFetchBolets('http://localhost:3000/api/coindraw/getSorteoBuyers', {})

    // console.log(data)
    if (data) {
        arraySorteo = []
        llenarData(data)
    }

    let sections = [];
    for (let i = 0; i < arraySorteo.length; i += 10) {
        sections.push(arraySorteo.slice(i, i + 10))
    }

    const prevItem = () => {
        setcountSorteo((countSorteo) => {
            let currentSection = countSorteo === 0 ? arraySorteo.length - 1 : countSorteo - 1
            let elem = document.getElementById(`${arraySorteo[currentSection].id}Sorteo`)
            elem.animate([{ transform: "translateX(-100%)" }, { transformorigin: "100%" }], { duration: 500 })
            return currentSection
        })
    }

    const nextItem = () => {
        setcountSorteo(() => {
            let currentSection = countSorteo === arraySorteo.length - 1 ? 0 : countSorteo + 1
            let elem = document.getElementById(`${arraySorteo[currentSection].id}Sorteo`)
            elem.animate([{ transform: "translateX(100%)" }, { transformorigin: "100%" }], { duration: 500 })
            return currentSection
        })
    }

    const selectedValue = (e) => {
        setShowAmountsSorteo(true)
        amountCalculate('add')
        let elegido = [e.target.value]
        let value = valuesSorteo.concat(elegido)
        setValuesSelect(value)
        document.getElementById(`buttonSorteo${elegido[0]}`).className = 'check'
    }

    const actionDelete = (e) => {
        let value = e.target.value
        const filterData = valuesSorteo.filter(item => item != value)
        setValuesSelect(filterData)
        document.getElementById(`buttonSorteo${value}`).className = 'item-ticket1'
        amountCalculate('delete')
    }

    const Comprar = () => {
        // convert object to string using JSON.stringify()
        const ticketsJson = JSON.stringify(valuesSorteo)
        // convert string to base64

        const tickets = btoa(ticketsJson)
        window.location.href = `http://localhost:5173/formBuy/sorteo/${tickets}/${afiliado}`
    }

    const amountCalculate = (action) => {
        //establecer el monto del dolar automaticamente para que se actualize automaticamente
        totalSorteos = action === 'add' ? totalSorteos + 5 : totalSorteos - 5
        document.getElementById('amountSorteo').innerText = `${totalSorteos} Bs`
        if (totalSorteos === 0) {
            setShowAmountsSorteo(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0); // Desplaza la página hacia arriba
        if (loading || error || data.error) {
            document.body.classList.add('no-scroll')
        }
        return () => document.body.classList.remove('no-scroll')
    }, [loading, error, data])


    let initRangeSorteo = data ? arraySorteo[countSorteo].init : 0
    let finishRangeSorteo = data ? arraySorteo[countSorteo].finish : 0

    if (loading) {
        return (
            <div className='show-modal' id='show-modal'>
                <div className='mago-container'></div>
                <div className="cargando">
                    <div className="pelotas">45</div>
                    <div className="pelotas">62</div>
                    <div className="pelotas">158</div>
                    <span className="texto-cargando">Cargando...</span>
                </div>
            </div>

        )
    }

    if (error || data.error) {
        return (
            <div className='bg-popup-error' id='bg-popup-error'>
                <div className='body-popup-error'>
                    <span className='span-icon-error'>&#128534;</span>
                    <p className='title-error-popup'>Algo salio mal</p>
                    <p className='content-error-popup'>El servicio no pudo obtner los boletos disponibles.Intentalo de nuevo </p>
                    <button type='button' className='btn-error-popup'>Intentar de nuevo</button>
                </div>
            </div>
        )
    }

    const desplegar = (e) => {

        let anteriores = [...document.querySelectorAll(`.classSelecionado`)]
        let arrayBotonesAnteriores = [...document.querySelectorAll(`.classSelecionado button`)]
        let spanAnteriores = [...document.querySelectorAll(`.classSelecionado span`)]
        anteriores.map((el) => (
            el.classList.remove("classSelecionado")
        ))
        arrayBotonesAnteriores.map((el) => (
            el.classList.remove("button-children-first-indicador-active")
        ))
        spanAnteriores.map((el) => (
            el.classList.remove('spanTrue')
        ))


        e.target.classList.add("classSelecionado")

        let arrayBotonesActuales = [...document.querySelectorAll(`.classSelecionado button`)]
        arrayBotonesActuales.map((el) => (
            el.classList.toggle('button-children-first-indicador-active')
        ))

        let spanActuales = [...document.querySelectorAll(`.classSelecionado span`)]
        spanActuales.map((el) => (
            el.classList.toggle('spanTrue')
        ))
    }

    const ubicarSection = (e) =>{
        setcountSorteo(() => {
            let currentSection = Number(e.target.id)
            let elem = document.getElementById(`${arraySorteo[currentSection].id}Sorteo`)
            elem.animate([{ transform: "translateX(100%)" }, { transformorigin: "100%" }], { duration: 500 })
            return currentSection
        })
    }

    return (
        <>
            <div className='section-carousel'>
                <div className='children-first'>
                    <h2 className='title-children-first'>Secciones de Numeros Globales</h2>
                    <div className='father-button-children-first'>
                        {sections.map((buttonPadre, indexSection) => (
                            <div key={indexSection} id={indexSection} className='div-children-first' onClick={desplegar}>{buttonPadre[0].init} - {buttonPadre[9].finish} <span className='spanFalse'>&#8811;</span>
                           
                                {buttonPadre.map((el, index) => {
                                   
                                   let initEl = String(el.init)
                                   let initialInit = ""
                                   if(initEl.length === 4){
                                       initialInit = initEl.slice(0,1)
                                   }else if(initEl.length === 5){
                                       initialInit = initEl.slice(0,2)
                                   }else if(initEl.length === 6){
                                       initialInit = initEl.slice(0,3)
                                   }else if(initEl.length === 7){
                                       initialInit = initEl.slice(0,4)
                                   }else if(initEl.length === 8){
                                       initialInit = initEl.slice(0,5)
                                   }

                                    return(
                                    <button key={index} id={indexSection >= 1 ?`${initialInit}${index}` : index} className='button-children-first-indicador-none' onClick={ubicarSection}>{`${el.init} - ${el.finish}`}</button>

                                )})}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='carousel-inner' id="carousel-inner">
                    <div className='presentation'>
                        <h1>El comando de los PREMIOS</h1>
                        <div className='content-presentation-logo'>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>

                    <div className="controls-arrows-inner">
                        <div className="control-arrow left" type="button" id="prevCarrousel">
                            <img src={arrowCircle} alt="" onClick={prevItem} />
                        </div>
                        <h3 className="describe-position" id="describe-position">{initRangeSorteo + '-' + finishRangeSorteo}</h3>
                        <div className="control-arrow rigth" type="button" id="nextCarrousel">
                            <img src={arrowCircle} alt="" onClick={nextItem} />
                        </div>
                    </div>

                    <div className="content-tickets" id="content-tickets">
                        {arraySorteo.map((item, index) => {
                            let show = false
                            if (index === countSorteo) {
                                show = true
                            }
                            return (
                                <div className='carousel-item' style={show ? { display: 'flex', } : { display: 'none' }} id={`${item.id}Sorteo`} key={index}>
                                    {item.items.map((boleto, index) => {
                                        return (
                                            <button className={boleto.disponible ? 'item-ticket1' : 'item-not-avaliable1'} disabled={!boleto.disponible} key={index} id={'buttonSorteo' + boleto.numero} onClick={selectedValue} value={boleto.numero}>
                                                {boleto.numero}
                                            </button>
                                        )
                                    }
                                    )
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='children-three'>
                    <h3 className="title-selected">NUMEROS SELECCIONADOS</h3>
                    <div className={showAmountsSorteo ? "content-selections-active" : "content-selections-desactive"} id="content-selections-sorteo" >
                        <div className="selected-items" id="selected-items">
                            {valuesSorteo.map((item, index) => {
                                return (
                                    <div className='item-ticket-selected' id={item} key={index}>
                                        <div className='container-ticket' >
                                            <img src={ticketDefinido} alt="ticke_definido_1" />
                                            <h4 className='number-selected-text'>{item}</h4>
                                        </div>
                                        <button type="button" className="botonQuitar" value={item} onClick={actionDelete}>QUITAR</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="container-amount">
                            <p className="amount-title">Monto</p>
                            <h3 className="amount-value" id='amountSorteo' data-amount={totalSorteos}></h3>
                        </div>
                        <button type="button" onClick={Comprar} className="btn-comprar-Sorteo">Comprar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function llenarData(data = {}) {

    const { response } = data
    //establecer el parametro para actualizar la cantidad de numeros a renderizar
    let initial = 1
    let finaly = 100

    for (let i = 0; i < 100; i++) {
        let arrayItems = []

        let configTable = {
            init: i === 0 ? initial : initial += 100,
            finish: i === 0 ? finaly : finaly += 100,
            id: `carouselItem${i}`
        }

        for (let i = configTable.init; i <= configTable.finish; i++) {
            const item = {
                disponible: true,
                numero: i
            }
            for (let x = 0; x < response.length; x++) {
                const numeroCompra = response[x];
                const { boleto } = numeroCompra
                const boletoNumber = parseInt(boleto)
                if (boletoNumber === i) {
                    item.disponible = false
                }
            }
            arrayItems.push(item)
        }

        configTable.items = arrayItems

        arraySorteo.push(configTable)

    }
}

export default SelectorSorteo
