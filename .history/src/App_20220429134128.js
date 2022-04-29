import Menu from './components/Menu'
function App() {
  return (
    <div className="">
       <div className='vw-100 vh-100 position-fixed text-white'> 
           <div className='position-absolute d-none top-0 w-100 h-100 bg-dark app-gradient-container'>

           </div>
           <div className="bg-dark" style={{width:'500px'}}>
              <Menu />
           </div>
       </div>
    </div>
  );
}

export default App;
