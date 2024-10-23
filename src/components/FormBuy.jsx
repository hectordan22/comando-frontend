import { useParams } from "react-router-dom"
import { useState } from "react"
import Popup from "./InfoPopup"

const initialData = {
   nombre: '',
   apellido: '',
   cedula: '',
   telefono: '',
   boletos: [],
   afiliado: ''

}

const alertInitial = { show: false, info: '' }

function FormBuy() {
   const { type, boletos, afiliado = 'none' } = useParams()


   const [dataForm, setDataForm] = useState(initialData)
   const [submit, setSubmit] = useState(false)
   const [alertNombre, setAlertNombre] = useState(alertInitial)
   const [alertApellido, setAlertApellido] = useState(alertInitial)
   const [alertCedula, setAlertCedula] = useState(alertInitial)
   const [alertTelefono, setAlertTelefono] = useState(alertInitial)
   const [typePopup, setTypePopup] = useState(null)
   const [response, setResponse] = useState(null)
   const [error, setError] = useState(null)
   

   initialData.boletos = boletos
   initialData.afiliado = afiliado


   const dataTyping = (e) => {
      const { name, value } = e.target
      if (name === 'nombre') {
         const respName = validateLetters(value, name)
         console.log(respName)
         setAlertNombre(
            respName
         )

      }
      if (name === 'apellido') {
         const respApellido = validateLetters(value, name)
         console.log(respApellido)
         setAlertApellido(
            respApellido
         )
      }

      if (name === 'cedula') {
         const respCedula = validateNumbers(value, name)
         setAlertCedula(
            respCedula
         )
      }

      if (name === 'telefono') {
         const respTelefono = validateNumbers(value, name)
         setAlertTelefono(
            respTelefono
         )
      }
      initialData[name] = value
      setDataForm(initialData)
      console.log(dataForm)
   }

   const validateLetters = (value, name) => {
      let justLetters = /[^a-zA-Z ]+/g;
      let resulLetters = justLetters.test(value);
      if (resulLetters) {
         return {
            show: true,
            info: `${name} no acepta numeros ni signos`
         }
      }
      return {
         show: false,
         info: ''
      }

   }

   const validateNumbers = (value, name) => {
      let justNumber = /[^0-9]+/g;
      let resultNumbers = justNumber.test(value);
      if (resultNumbers) {
         return {
            show: true,
            info: 'No coloques puntos ni signos'
         }
      }
      if (name === 'cedula' && value.length < 8) {
         return {
            show: true,
            info: 'La cedula debe tener 8 digitos'
         }
      }
      if (name === 'telefono' && value.length < 11) {
         return {
            show: true,
            info: 'El telefono debe tener 11 digitos contando el 0 a la izquierda'
         }
      }
      return {
         show: false,
         info: 'El telefono debe tener 11 digitos contando el 0 a la izquierda'
      }
   }



   const sendFrom = async () => {
      const isSuccess = validateFields()
      /*  const isEmptys = emptys() */
      console.log(isSuccess)
      if (isSuccess) {
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm)
         };
         let endpoint = type === 'sorteo' ? 'comprarSorteo' : 'comprarRifa'

         const response = await fetch(`http://localhost:3000/api/coindraw/${endpoint}`, requestOptions);
         const data = await response.json();
         console.log(data)
         setError(data.error)
         setResponse(data)

         if (type === 'sorteo') {
            if (data.error) {
               setTypePopup(()=>{                 
                  return <Popup icono="fail" show={true} titulo="La conexión con el serivor falló. Por favor, revisa tu conexión a internet e intentalo mas tarde" description="Hubo un problema al obtener los datos. Estamos trabajando para resolverlo lo antes posible. Por favor, recarga la página o intenta más tarde" boton="ACEPTAR" />
               })
               
            } else {
               if (data.info.notInserts.length > 0 && data.info.inserts.length === 0) {
                  setTypePopup(()=>{
                     return <Popup icono="info" show={true} titulo={`Lo sentimos, los numeros que has seleccionado ya han sido comprados`} description={`Los numeros ${data.info.notInserts.join()} ya han sido comprados. Elige de nuevo por favor`} boton="ACEPTAR" />
                  })

               } else if (data.info.notInserts.length > 0 && data.info.inserts.length > 0) {
                  setTypePopup(()=>{
                     return<Popup icono="info" show={true} titulo={`Lo sentimos, los numeros ${data.info.notInserts.join()} que has seleccionado ya han sido comprados`} description={`Los numeros ${data.info.notInserts.join()} ya han sido comprados. Sin embargo se realizo la compra con exito de los numeros: ${data.info.inserts.join()}`} enlace={{ actve: true, link: `${data.info.enlace_afiliado}` }} boton="ACEPTAR" />
                  })
                  

               } else if (data.info.notInserts.length === 0 && data.info.inserts.length > 0) {
                  setTypePopup(()=>{
                     return <Popup icono="success" show={true} titulo={`Tu compra se ha realizado con exito felicidades`} description={`Se realizo la compra con exito de los numeros: ${data.info.inserts.join(", ")}`} enlace={{ actve: true, link: `${data.info.enlace_afiliado}` }} boton="ACEPTAR" />
                  })
               }
            }
         } else {
            if (data.error) {

               setTypePopup(()=>{
                  return <Popup icono="fail" show={true} titulo="La conexión con el serivor falló. Por favor, revisa tu conexión a internet e intentalo mas tarde" description="Hubo un problema al obtener los datos. Estamos trabajando para resolverlo lo antes posible. Por favor, recarga la página o intenta más tarde" boton="ACEPTAR" />
               })

            } else {
               if (data.info.notInserts.length > 0 && data.info.inserts.length === 0) {
                  setTypePopup(()=>{
                     return <Popup icono="info" show={true} titulo={`Lo sentimos, los numeros que has seleccionado ya han sido comprados`} description={`Los numeros ${data.info.notInserts.join()} ya han sido comprados. Elige de nuevo por favor`} boton="ACEPTAR" />
                  })


               } else if (data.info.notInserts.length > 0 && data.info.inserts.length > 0) {
                  setTypePopup(()=>{
                     return <Popup icono="info" show={true} titulo={`Lo sentimos, los numeros ${data.info.notInserts.join()} que has seleccionado ya han sido comprados`} description={`Los numeros ${data.info.notInserts.join()} ya han sido comprados. Sin embargo se realizo la compra con exito de los numeros: ${data.info.inserts.join()}`} boton="ACEPTAR" />
                  })


               } else if (data.info.notInserts.length === 0 && data.info.inserts.length > 0) {
                  setTypePopup(()=>{
                     return <Popup icono="success" show={true} titulo={`Tu compra se ha realizado con exito felicidades`} description={`Se realizo la compra con exito de los numeros: ${data.info.inserts.join(", ")}`} boton="ACEPTAR" />
                  })
               }
            }

         }

      }
   }
      const validateFields = () => {
         let submit = false
         let valids = 0
         const fields = [alertNombre, alertApellido, alertCedula, alertTelefono]
         const requires = ['nombre', 'apellido', 'cedula', 'telefono']
         fields.forEach((field, index) => {
            if (!field.show && dataForm[requires[index]] !== '') {
               valids++
            }
         });

         if (valids === 4) {
            submit = true
         }
         return submit

      }

      if(!response && !error){
         return (
            <>
               <div className="form-container-buy">
                  <h1>¡ Pago Exitoso !</h1>
                  <p className="subtitle-buy-form">Ya casi queda : solo registra tus datos</p>
                  <div className="inputAndLabel">
                     <label htmlFor="name">Nombre</label>
                     <div className="alert-input">
                        <input type="text" name="nombre" onChange={dataTyping} />
                        <p style={{ display: alertNombre.show ? 'block' : 'none' }} >{alertNombre.show ? alertNombre.info : ''}</p>
                     </div>
   
                  </div>
                  <div className="inputAndLabel">
                     <label htmlFor="name">Apellido</label>
                     <div className="alert-input">
                        <input type="text" name="apellido" onChange={dataTyping} />
                        {/* <p>El Apellido es obligatorio</p> */}
                        <p style={{ display: alertApellido.show ? 'block' : 'none' }}>{alertApellido.show ? alertApellido.info : ''}</p>
                     </div>
   
                  </div>
   
                  <div className="inputAndLabel">
                     <label htmlFor="name">Cedula</label>
                     <div className="alert-input">
                        <input type="text" name="cedula" onChange={dataTyping} />
                        <p style={{ display: alertCedula.show ? 'block' : 'none' }}>{alertCedula.show ? alertCedula.info : ''}</p>
                     </div>
                  </div>
   
                  <div className="inputAndLabel">
                     <label htmlFor="name">Telefono</label>
                     <div className="alert-input">
                        <input type="text" name="telefono" onChange={dataTyping} />
                        <p style={{ display: alertTelefono.show ? 'block' : 'none' }}>{alertTelefono.show ? alertTelefono.info : ''}</p>
                     </div>
                  </div>
   
                  <button type="button" onClick={sendFrom} className="button-data-buy">Enviar</button>
               </div>
            </>
         )
      }
      if(response){
         return typePopup;
      }
      
}
export default FormBuy;