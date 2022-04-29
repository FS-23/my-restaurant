
function Plat (props){
    return(
        <div className="bg-dark mt-5 p-3 rounded" style={{width:'200px' , margin: "auto"}}>
            <h1>{props.name} </h1>
           <p> {props.ingredient}</p>
           <div>
               {props.price} MAD
           </div>
           <button className="btn btn-info">Ajouter</button>
       </div>
          
     
    )
}

export default Plat