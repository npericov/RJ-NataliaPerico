

import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CardContext'

const Cartwidget = () => {
    const { itemsInCart } = useContext(CartContext)
    return (
        <Link to="/cart" className='flex items-center gap-1 cursor-pointer'>
            <img src={cartIcon} alt=" Cart Icon" className='w-8' />
            <span className='text-#808080 text-xl'>{ itemsInCart() }</span>
        </Link>
    )
}

export default Cartwidget