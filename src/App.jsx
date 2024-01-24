import './App.css';
import CartView from './components/CartView/CartView';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Checkout from './components/Checkout/Checkout';



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
            <Route path="/checkout" element={<Checkout />} />



            <Route path="/not-found" element={<h2>Not found</h2> }/>
            <Route path="*" element={<Navigate to={"/not-found"}/> }/>
          </Routes>

          <Footer/>

        </BrowserRouter>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
