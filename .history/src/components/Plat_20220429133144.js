
function Plat (props){
    return(
       <>
           <h1>{props.name} </h1>
           <p> {props.ingredient}</p>
           <div>
               {props.price} MAD
           </div>
           <button className="btn btn-info">Ajouter</button>
       </>
    )
}

export default Plat