
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";


const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext);

    const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
    });

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
        cliente: values,
        items: cart,
        total: totalCart(),
        fecha: new Date(),
    };

    const ordersRef = collection(db, 'orders');

    addDoc(ordersRef, orden)
        .then((doc) => {setOrderId(doc.id);
        clearCart();
        });
    };

    if (orderId) {
        return (
            <div className="container mt-10 mb-20 max-w-screen-md mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible p-4">
                <h2 className="text-4xl font-semibold text-tecnica m-20 text-center">¡Gracias por tu compra!</h2>
                <hr />
                <p className=" font-semibold text-gray-500 p-5 text-center">Tu código de orden es: {orderId}</p>
            </div>
        );
    }


    return (
    <div className="container mt-10 mb-20 w-1/3 mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible p-4">
        <h2 className="text-2xl font-semibold text-tecnica mb-4">Confirmación de tu compra</h2>
        <hr />
        <h2 className="text-gray-500 p-2">Ingresa tus datos:</h2>
        <hr />

        <form onSubmit={handleSubmit} 
        className="flex flex-col gap-4 max-w-screen mt-4 rounded-md">

            <input
            className="border p-2"
            type="text"
            placeholder="Nombre"
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre"
            />

            <input
            className="border p-2"
            type="text"
            placeholder="Dirección"
            value={values.direccion}
            onChange={handleInputChange}
            name="direccion"
            />
            <input
            className="border p-2"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
            />
            <button type="submit" className="bg-tecnica text-white py-2">
            Enviar
            </button>
        </form>
    </div>
);
};

export default Checkout;
