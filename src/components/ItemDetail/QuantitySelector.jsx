
import Boton from "../Renderprops/Boton.jsx";

const QuantitySelector = ({cantidad, stock, setCantidad}) => {

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (
    <div className="flex gap-4 items-center">
      <Boton className={`${cantidad=== 1 ?  `bg-gray-400 ` :  `bg-tecnica `} `} onClick={handleRestar} disabled= {cantidad===1}>-</Boton>
      <span>{cantidad}</span>
      <Boton className={`${cantidad=== stock ?  `bg-gray-400 ` :  `bg-tecnica `} `}  onClick={handleSumar} disabled={cantidad===stock}>+</Boton>
    </div>
  );
};

export default QuantitySelector;