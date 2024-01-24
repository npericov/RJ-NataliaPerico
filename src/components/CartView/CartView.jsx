import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../Renderprops/Boton";
import trashIcon from "../../assets/trash.svg";
import { UserContext } from "../../context/UserContext";
import EmtpyCart from "./EmtpyCart";
import { Link } from 'react-router-dom';




const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    const { user } = useContext(UserContext);

    if (!user.email) return <h2>No hay usuario registrado</h2>
    if (cart.length === 0) return <EmtpyCart />

    return (
        <section className="container mt-10 max-w-screen-md mx-auto mb-20 bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible p-4">
            <p className="text-gray-500 mb-4">Bienvenido: {user.email}</p>
            <h2 className="text-2xl font-semibold text-tecnica mb-4">Tu carrito</h2>
            <hr />

            <ul className="p-4">
                {cart.map((item) => (
                <li key={item.id} className="flex gap-3 border-b my-4">
                    <img src={item.img} alt="Cart img" className="w-32" />
                    <div>
                        <h3 className="text-2xl text-gray-500">{item.name}</h3>
                        <p className="text-xl font-bold text-gray-500">
                        Sub-total $ {item.price * item.cantidad}
                        </p>
                        <p className="text-gray-500">Cantidad: {item.cantidad}</p>

                        <div className="p-4">
                            <Boton onClick={() => removeItem(item.id)}>
                            <img src={trashIcon} className="w-4" alt="trash icon" />
                            </Boton>
                        </div>
                    </div>
                </li>
                ))}
            </ul>

            <h4 className="text-2xl font-bold text-gray-500 mb-4">Total: $ {totalCart()}</h4>
            <div className="flex justify-between">
                
                <Boton className="bg-tecnica text-white px-4 py-2 rounded">
                <Link to="/checkout">Finalizar mi compra</Link>
                </Boton>

                <Boton onClick={clearCart} className="bg-gray-500 text-white px-4 py-2 rounded">
                Vaciar carrito
                </Boton>
            </div>

        </section>
    );
};

export default CartView;
