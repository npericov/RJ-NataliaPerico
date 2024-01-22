import { Link } from "react-router-dom";
import Boton from "../Renderprops/Boton";



const EmtpyCart = () => {

    return (
        <section className="container mt-10 max-w-screen-md mx-auto bg-white rounded-md shadow-lg hover:shadow-2xl overflow-visible p-4">
        <h2 className="text-2xl font-semibold text-gray-500">Tu carrito está vacío</h2>
        <hr />
        <p className="text-tecnica">Puedes agregar otros productos a tu carrito</p>
        <Boton>
            <Link to={"/"}>Volver</Link>
        </Boton>
        </section>
    )
}

export default EmtpyCart