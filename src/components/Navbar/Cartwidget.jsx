

import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CardContext'

const CartWidget = () => {
    const { itemsInCart } = useContext(CartContext)
    return (
        <Link to="/cart" className='flex items-center gap-1 cursor-pointer'>
            <img src={cartIcon} alt=" Cart Icon" className='w-8' />
            <span className= {`${itemsInCart() === 0 ? 'invisible opacity-0' : 'visible opacity-100'} transition-all text-white text-l bg-tecnica rounded-full w-5 h-5 flex items-center justify-center`}>{ itemsInCart () }</span>
        </Link>
    )
}

export default CartWidget