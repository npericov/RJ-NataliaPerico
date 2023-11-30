
const NavLink = ({href, text}) => {

    return (
        <a 
        className="text-tecnica hover:text-gray-800 text-lg font-semibold" 
        href={href}>{text}</a>
        );
};

export default NavLink;