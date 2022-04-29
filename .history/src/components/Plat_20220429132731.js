
function Plat (props){
    return(
       <>
           <h1>{props.name} </h1>
           <p> {props.ingredient}</p>
           <div>
               {props.price}
           </div>
       </>
    )
}

export default Plat