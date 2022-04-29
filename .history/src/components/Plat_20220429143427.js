
function Plat (props){
    let {plat} = props
    console.log('prpos:', plat)
    return(
        <div className=" col-1 col-sm-2 text-white col-lg-4 mt-4 position-relative plat-container" >
            <div className="bg-dark p-2 rounded">
                <h2>{plat.name} </h2>
                <p> {plat.ingredient}</p>
                <div>
                    {plat.price} MAD
                </div>
                <button className="btn btn-info mt-2" onClick={()=> {plat.onChoose(plat.id)}}>Ajouter</button>
            </div>
       </div>
          
     
    )
}

export default Plat