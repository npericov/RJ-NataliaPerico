import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CardContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />


          <Route path="/not-found" element={<h2>Not found</h2> }/>
          <Route path="*" element={<Navigate to={"/not-found"}/> }/>
        </Routes>

      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
