//import './Navbar.scss'//
import logo from '../../assets/logo.png'
import CartWidget from '../Navbar/Cartwidget.jsx'
import { Link, NavLink } from 'react-router-dom'


const links = [
    {
        label: "INICIO",
        href: "/",
    },
    {
        label: "POLERAS",
        href: "/productos/poleras",
    },
    {
        label: "POLERONES",
        href: "/productos/polerones",
    },
    {
        label: "BOLSOS",
        href: "/productos/bolsos",
    }

    ];



const Navbar = () => {

    return (
        <header className="bg-gray-200">
            <div className="container m-auto py-5 px-10 flex justify-between items-center">
            <Link to={"/"}>
                <img src={logo} alt="logo" className='w-28' />
            </Link>
                

                <nav className="flex gap-7">
                    {links.map((link) => (



                        <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                        isActive
                        ? "text-tecnica text-lg  font-bold"
                        : "text-gray-500 text-lg font-semibold" 
                    }
                    >
                        {link.label}
                    
                    </NavLink>


                    ))}

                <div>
                <CartWidget />
                </div>
                </nav>
            </div>
        </header>
    )    
}

export default Navbar


/*<Link to={"/"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Inicio</Link>
                    <Link to={"/productos/poleras"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Poleras</Link>
                    <Link to={"/productos/polerones"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Polerones</Link>
                    <Link to={"/productos/bolsos"} className="text-tecnica hover:text-gray-600 text-lg font-semibold" >Bolsos</Link>*/
