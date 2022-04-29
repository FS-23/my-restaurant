
function Plat (props){
    return(
        <div className=" col-1 col-sm-2 col-lg-4 mt-4" >
            <div className="bg-dark p-2 rounded">
                <h2>{props.name} </h2>
                <p> {props.ingredient}</p>
                <div>
                    {props.price} MAD
                </div>
                <button className="btn btn-info mt-2">Ajouter</button>
            </div>
       </div>
          
     
    )
}

export default Plat