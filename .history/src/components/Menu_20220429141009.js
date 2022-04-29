import { useState } from "react"
import Plat from "./Plat"
function Menu(){
    let [orders , setOrders] = useState([])

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
               menuList.map((menu) =>   < Plat name= {menu.name} price={menu.price} ingredient={menu.ingredient} />)
           }
           <div className="card w-100 m-auto border-0 mt-5">
                 <div className="card-header bg-dark">Mes commandes</div>
                  <div className="card-body border">body</div>
           </div>
           <div className="bg-dark rounded mt-5">
                    {
                        menuList.map((menu) =>   < Plat name= {menu.name} price={menu.price} ingredient={menu.ingredient} />)
                    }
           </div>
          
        </div>
    )
}

export default Menu