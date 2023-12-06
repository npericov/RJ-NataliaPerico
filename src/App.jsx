import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={'Te damos la bienvenida a nuestra Tienda-Taller'}/>      
    </div>
  );
}

export default App;
