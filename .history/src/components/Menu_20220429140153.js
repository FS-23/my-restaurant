import Plat from "./Plat"
function Menu(){
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
          
        </div>
    )
}

export default Menu