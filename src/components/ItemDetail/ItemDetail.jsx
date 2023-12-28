import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


    



const ItemDetail = ({ item }) => {
    const handleAddToCart = (quantity) => {
    
        console.log(`Agregando al carrito: ${quantity} de ${item.name}`);
        };

    return (

       <section className="container m-auto py-10 ">

        <div className="w-80 bg-white relative max-w-sm rounded shadow-md hover:shadow-2xl overflow-visible">
            <img src={item.img} alt={item.name} />
            <h3 className="  text-gray-600 text-xl font-bold  text-center">{item.name}</h3>
            <hr />
            <p className='text-gray-800 px-8 py-2'>{item.description}</p>
            <p className=" text-gray-500 text-l font-bold px-8 py-2 ">Precio: ${item.price}</p>
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
       </div>

       </section>

    );
    };

    export default ItemDetail;



