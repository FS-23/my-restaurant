import { useState } from "react"
import Plat from "./Plat"
function Menu(){
    let [orders , setOrders] = useState([])

    function handleOnClick(id){
          console.log("Je suis le plat numero "+ id)
          let plat  = menuList.find( (menu)=> menu.id == id)

          console.log('plat:', plat)
          setOrders( orders => ([...orders , plat]) )

          setTimeout( function(){
               console.log('orders:', orders)
          },2000)

    }
    let menuList = [
          {id: 1 , name: "Pizza margarita" , price: 12 , ingredient: "Tomate x Thon x Fromage"},
          {id: 2 , name: "Salade Nicoise" , price: 12 , ingredient: "Tomate x Oignon x Oeuf"},
          {id: 3 , name: "Stack" , price: 60 , ingredient: "Ingrediant stack"},
          {id: 4 , name: "Tagine" , price: 20 , ingredient: "Tomate x Poulet x Batata"},
          {id: 5 , name: "Jus d'orange" , price: 8 , ingredient: "Orange"},
          {id: 6 , name: "Jus d'avocat" , price: 12 , ingredient: "Avocat"},
    ]

    function commandeComponent(props){
        let {plat} = props
        return (
            <div className=" col-1 col-sm-2 text-white col-lg-4 mt-4 position-relative plat-container" >
                <div className="bg-dark p-2 rounded">
                    <h2>{plat.name} </h2>
                    <p> {plat.ingredient}</p>
                    <div>
                        {plat.price} MAD
                    </div>
                    <button className="btn btn-danger mt-2" onClick={()=> {}}>Annulerr</button>
                </div>
            </div>
        )
    }
    return (
        <div className="row">
           {
               menuList.map((menu , index) =>   < Plat key={index} plat={{...menu, onChoose: handleOnClick }} />)
           }
           <div className="card w-100 m-auto border-0 mt-5">
                 <div className="card-header bg-dark text-white">Mes commandes</div>
                  <div className="card-body border row m-0">
                    {
                        orders.map((menu , index) =>  <commandeComponent key={index} plat={menu} />)
                    }
                  </div> 
           </div>
         
        </div>
    )
}

export default Menu