

const Boton = ({ children, className = "", onClick, disabled = false }) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-tecnica rounded-xl flex items-center justify-center py-2 px-4 text-center text-white font-semibold my-4 ${className}`}
        >
        {children}
        </button>
    );
};

export default Boton;