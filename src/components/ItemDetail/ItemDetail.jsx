import { useContext, useState } from 'react';
import Boton from '../Renderprops/Boton';
import QuantitySelector from '../ItemDetail/QuantitySelector.jsx';
import { CartContext } from '../../context/CardContext.jsx';



const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)


    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }


        console.log(itemToCart)
        addToCart(itemToCart)

    }



    return (

        <div className="container mx-auto mt-10">
            <div className="max-w-screen-md mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible">
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <img src={item.img} alt={item.name} className="w-full h-auto object-cover rounded-md" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <p className="text-gray-800 text-lg font-bold mb-2">${item.price}</p>
                        <QuantitySelector cantidad={cantidad} stock={item.stock} setCantidad={setCantidad} />
                        <div className="mt-4">
                            <Boton onClick={handleAgregar} className="bg-tecnica text-white px-4 py-2 rounded">
                                Agregar al carrito
                            </Boton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

    export default ItemDetail;



