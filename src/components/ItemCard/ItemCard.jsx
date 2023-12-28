import React from 'react';
import { Link } from 'react-router-dom';


const ItemCard = ({ item }) => {
    const handleAddToCart = (quantity) => {
    
    console.log(`Agregando al carrito: ${quantity} de ${item.name}`);
    };

    return (
        <article key={item.id} className="w-80 bg-white relative max-w-sm rounded shadow-md hover:shadow-2xl overflow-visible">
            <img src={item.img} alt={item.name} />
            <h3 className="  text-gray-600 text-xl font-bold  text-center">{item.name}</h3>
            <hr />
            <p className=" text-gray-500 text-l font-bold px-8 py-2 text-center ">Precio: ${item.price}</p>
            <button className ="Button bg-tecnica border-2 rounded-xl w-40 h-8 flex items-center justify-center text-white m-auto px-8 py-4">
            <Link to={`/item/${item.id}`}>Ver más</Link>
            </button>
        </article>
    );
};

export default ItemCard;
