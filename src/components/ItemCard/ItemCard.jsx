import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Renderprops/Boton.jsx';


const ItemCard = ({ item }) => {
    const handleAddToCart = (quantity) => {
    
    console.log(`Agregando al carrito: ${quantity} de ${item.name}`);
    };

    return (
        <article key={item.id} className="w-80 mt-8 bg-white relative max-w-sm min-h-[300px] rounded shadow-md hover:shadow-2xl overflow-visible mx-4 my-8">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-t-md" />
            <div className="p-4">
                <h3 className="text-gray-800 text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-500 text-base font-bold mb-4">Precio: ${item.price}</p>

            { item.stock < 10 && <p className=" mt-1 font-semibold text-m text-red-500 text-center">Quedan sólo {item.stock} unidades!</p> }

                <div className="flex items-center justify-center">
                    <Boton onClick={() => handleAddToCart(1)} className="bg-tecnica text-white px-4 py-2 rounded">
                        <Link to={`/item/${item.id}`}>Ver más</Link>
                    </Boton>
                </div>
            </div>
        </article>
    );
};

export default ItemCard;
