function Plat (props){
    return(
       <>
           <h1>Je suis {props.name} </h1>
           <p>{props.ingredient}</p>
           <div>
               prix: {props.price}
           </div>
       </>
    )
}


export default Plat