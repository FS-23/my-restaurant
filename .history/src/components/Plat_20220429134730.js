
function Plat (props){
    return(
        <div className=" col-2 col-sm-3 col-lg-4" >
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