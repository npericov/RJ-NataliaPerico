//import './Navbar.scss'//
import logo from '../../assets/logo.png'
import CartWidget from '../Cartwidget/Cartwidget'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <header className="bg-gray-200">
            <div className="container m-auto py-5 px-10 flex justify-between items-center">
                <img src={logo} alt="logo" className='w-28' />

                <nav className="flex gap-7">
                    <Link to={"/"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Inicio</Link>
                    <Link to={"/productos/poleras"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Poleras</Link>
                    <Link to={"/productos/polerones"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Polerones</Link>
                    <Link to={"/productos/bolsos"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Bolsos</Link>

                </nav>
                <div>
                <CartWidget />
                </div>
            </div>
        </header>
    )    
}

export default Navbar