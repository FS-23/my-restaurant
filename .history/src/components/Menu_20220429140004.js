import Plat from "./Plat"
function Menu(){
    let menuList = [
          {id: 1 , name: "Pizza margarita" , price: 12 , ingredient: "Tomate x Thon x Fromage"},
          {id: 2 , name: "Salade Nicoise" , price: 12 , ingredient: "Tomate x Oignon x Oeuf"},
          {id: 3 , name: "Stack" , price: 60 , ingredient: "Ingrediant stack"},
          {id: 4 , name: "Tagine" , price: 20 , ingredient: "Tomate x Poulet x Batata"},
          {id: 5 , name: "Jus d'orange" , price: 8 , ingredient: "Orange"},
    ]

    return (
        <div className="row">
            < Plat name="Pizza margarita" price="12" ingredient="Tomat x Thon x Fromage" />
            < Plat name="Pizza margarita" price="12" ingredient="Tomat x Thon x Fromage" />
            < Plat name="Pizza margarita" price="12" ingredient="Tomat x Thon x Fromage" />
            < Plat name="Pizza margarita" price="12" ingredient="Tomat x Thon x Fromage" />
        </div>
    )
}

export default Menu