
const NavLink = ({href, text}) => {

    return (
        <a 
        className="text-tecnica hover:text-gray-600 text-lg font-semibold" 
        href={href}>{text}</a>
        );
};

export default NavLink;