import React, { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { UserContext } from "../../context/UserContext";
import Boton from "../Renderprops/Boton";
import trashIcon from "../../assets/trash.svg";

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    const { user } = useContext(UserContext);

    return (
        <section className="container mt-10 max-w-screen-md mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible p-4">
            <p className="text-gray-500 mb-4">Bienvenido: {user.email}</p>
            <h2 className="text-2xl font-semibold text-tecnica mb-4">Resumen de tu compra</h2>
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
            <Boton onClick={clearCart} className="bg-tecnica text-white px-4 py-2 rounded">
            Vaciar carrito
            </Boton>
        </section>
    );
};

export default CartView;
