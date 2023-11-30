import React from "react";
import { BsCart3 } from "react-icons/bs";


const CartIcon = () => {
    return(

        <div className="flex item-center justify-center justify-items-center">
        <p className="text-gray-500 text-base text-center">Tu Carrito</p>
        <BsCart3 size={25} color="gray" className="item-center"/>
        
        </div>
    )
}

export default CartIcon