

import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
        setQuantity(quantity + 1);
    }
    };

    const decrement = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
    }
    };

    return (
    <div className='Counter flex justify-between px-6 py-4'>
        <div className='Controls flex items-center'>
            <button className='Button text-gray-700 bg-white border border-gray-200 enabled:hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2 text-center' onClick={decrement}>-</button>
            <h4 className='Number px-2'>{quantity}</h4>
            <button className='Button text-gray-700 bg-white border border-gray-200 enabled:hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2 text-center' onClick={increment}>+</button>
        </div>
        <div>
            <button className='Button bg-tecnica border-2 rounded-xl w-40 h-10 flex items-center justify-center text-white' onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
            </button>
        </div>
    </div>
    );
};

export default ItemCount;
