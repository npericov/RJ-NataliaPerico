//import './Navbar.scss'//
import logo from '../../assets/logo.png'
import CartWidget from '../Cartwidget/Cartwidget'
import NavLink from './NavLink'


const Navbar = () => {

    return (
        <header className="bg-gray-200">
            <div className="container m-auto py-5 px-10 flex justify-between items-center">
                <img src={logo} alt="logo" className='w-28' />

                <nav className="flex gap-7">
                    <NavLink href={"#"} text={"Tienda"}/>
                    <NavLink href={"#"} text={"Estampados"}/>
                    <NavLink href={"#"} text={"Nosotros"}/>
                    <NavLink href={"#"} text={"Contacto"}/>
                </nav>
                <div>
                <CartWidget />
                </div>
            </div>
        </header>
    )    
}

export default Navbar