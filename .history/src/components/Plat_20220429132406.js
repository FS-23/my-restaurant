function Plat (props){
    return(
       <>
           <h1>{props.name} </h1>
           <p> ingrediants: {props.ingredient}</p>
           <div>
               prix: {props.price}
           </div>
       </>
    )
}

export default Plat