import './App.css';
import CartView from './components/CartView/CartView';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CardContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App () {

  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route path="/" element={<ItemListContainer/> }/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartView /> } />



            <Route path="/not-found" element={<h2>Not found</h2> }/>
            <Route path="*" element={<Navigate to={"/not-found"}/> }/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
