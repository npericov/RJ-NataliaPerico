import { useContext, useState } from 'react';
import Boton from '../Renderprops/Boton';
import QuantitySelector from '../ItemDetail/QuantitySelector.jsx';
import { CartContext } from '../../context/CartContext.jsx';
import { Link, useNavigate } from "react-router-dom";
import returnIcon from '../../assets/return.svg';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);
    const navigate = useNavigate();

    const { addToCart, isInCart } = useContext(CartContext);

    console.log(isInCart(item.id));

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        };

        addToCart(itemToCart);
    };

    const handleVolver = () => {
        navigate(-1);
    };

    return (
        <div className="container mx-auto mt-10 mb-20">
            <div className="max-w-screen-md mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible">
                <div className="p-2 m-4 mt-2 mb-2">
                    <Link onClick={handleVolver} >
                        <img className='w-6 h-6' src={returnIcon} alt="return" />
                    </Link>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img src={item.img} alt={item.name} className="w-full h-auto object-cover rounded-md" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-2xl font-bold mb-2 text-gray-500">{item.name}</h3>
                        <p className="text-gray-500 mb-4">{item.description}</p>
                        <p className="text-gray-500 text-lg font-bold mb-2">${item.price}</p>
                        
                        {isInCart(item.id) ? (

                        <div className="flex flex-col items-start mt-4">
                        <Boton>
                            <Link to="/cart">Ver mi carrito</Link>
                        </Boton>
                        <Boton onClick={handleVolver} className='mt-4'>Continuar comprando</Boton>
                    </div>
                        ) : (
                            <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />
                                <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
