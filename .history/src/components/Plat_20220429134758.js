
function Plat (props){
    return(
        <div className=" col-1 col-sm-2 col-lg-4" >
            <div className="bg-dark rounded">
                <h1>{props.name} </h1>
                <p> {props.ingredient}</p>
                <div>
                    {props.price} MAD
                </div>
                <button className="btn btn-info">Ajouter</button>
            </div>
       </div>
          
     
    )
}

export default Plat