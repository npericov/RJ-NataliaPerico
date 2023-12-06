

import cart from './assets/cart.svg'

const Cartwidget = () => {
    return (
        <button className='border-tecnica border-2 rounded-xl w-20 h-12 flex items-center justify-center'>
            <img src={cart} alt="cart-widget" className=' h-6 mr-2 '/>
            <span className="ml-1 bg-gray-200 ">0</span>
        </button>
    )
}

export default Cartwidget