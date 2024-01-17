

import { Link } from 'react-router-dom'
import cartIcon from '../../assets/cart.svg'

const Cartwidget = () => {
    return (
        <Link to="/cart" className='flex items-center gap-1 cursor-pointer'>
            <img src={cartIcon} alt=" Cart Icon" className='w-8' />
            <span className='text-#808080 font-xl'>0</span>
        </Link>
    )
}

export default Cartwidget