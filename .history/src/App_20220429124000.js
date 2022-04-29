import Plat from './components/Plat'
function App() {
  return (
    <div className="App">
        <h2>Hello from my restaurant</h2>
        <Plat name="Pizza margarita" price="12" ingredient="tomate x thon x fromage"/>
        <Plat name="Salade Nicoise"/>
        <Plat name="Stack"/>
    </div>
  );
}

export default App;
