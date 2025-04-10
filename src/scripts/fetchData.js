const responseData = {
  data : null,
  error: null,
  loader:false
}

const fetchData = async (url, getBody = null, method ='POST',formdata = false) => {
   let requestOptions = {}
   
   if (getBody) {
     requestOptions.method = method 
     /* cuando no es un formData si puedo enviarle el header Content-Type 
        ya que formulario normal o peticion sin envio de archivos si aceptaa
        el header Content-Type
     */
     if (!formdata) {
       requestOptions.headers = { 
         'Content-Type': 'application/json'
       }
     }
     requestOptions.body = getBody
   }

   
   
   responseData.loader = true
   try {
     const response =  getBody ? await fetch(url, requestOptions) : await fetch(url)
    //  console.log(response)
     const dataInfo = await response.json();
     responseData.loader = false
     responseData.error = null
     responseData.data = dataInfo
   } catch (error) {
     responseData.loader = false
     responseData.error = error
     responseData.data = null
   }
  //  console.log(responseData)
   return  responseData
}


export default fetchData;