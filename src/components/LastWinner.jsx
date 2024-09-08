import VideoPlayer from './VideoPlayer.jsx'

function LastWinner() {

  return (
    <>
    <h2 className="title-last-winner">Ultimos Ganadores</h2>
    <div className="container-winner">
        <h4 className="type-winner">Ganador Rifa</h4>
        <div className="card-last-winner">
            <div className="number-winner">
              <h4>Ticket Nro</h4>
               <h3>93</h3>
            </div>
     
            <div className="data-winner">
             
               <div className="titles-winner">
                 <p>Nombre</p>
                 <p>Cedula</p>
                 <p>Direccion</p>
               </div>
               <div className="values-winner">
                
                 <p>Hector</p>
                 <p>26877841</p>
                 <p>Valera Avanida 3</p>
               </div>
            </div>
            {/* <VideoPlayer url={} audioUrl={}/> */}
         </div>
    </div>

    <div className="container-winner" >
        <h4 className="type-winner">Ganador Rifa</h4>
        <div className="card-last-winner">
            <div className="number-winner">
              <h4>Ticket Nro</h4>
               <h3>93</h3>
            </div>
     
            <div className="data-winner">
             
               <div className="titles-winner">
                 <p>Nombre</p>
                 <p>Cedula</p>
                 <p>Direccion</p>
               </div>
               <div className="values-winner">
                
                 <p>Hector</p>
                 <p>26877841</p>
                 <p>Valera Avanida 3</p>
               </div>
            </div>
         </div>
    </div>
    </>
  )
}

export default LastWinner