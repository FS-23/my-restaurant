import Plat from './components/Plat'
function App() {
  return (
    <div className="App">
        <h2>Hello from my restaurant</h2>
        <Plat name="Pizza margarita" price="12" ingredient="tomate x thon x fromage"/>
        <Plat name="Salade Nicoise"/>
        <Plat name="Stack"/>
        <Plat2 />
    </div>
  );
}

function Plat2(){
   return (
     <h5>Plat components</h5>
   )
}
export default App;
