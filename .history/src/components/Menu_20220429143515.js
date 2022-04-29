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


    return (
        <div className="row">
           {
               menuList.map((menu , index) =>   < Plat key={index} plat={{...menu, onChoose: handleOnClick }} />)
           }
           <div className="card w-100 m-auto border-0 mt-5">
                 <div className="card-header bg-dark">Mes commandes</div>
                  <div className="card-body border">body</div>
           </div>
           <div className="bg-dark rounded mt-5 d-none">
                    {
                        orders.map((menu , index) =>   <h2>{menu.name}</h2>)
                    }
           </div>
          
        </div>
    )
}

export default Menu