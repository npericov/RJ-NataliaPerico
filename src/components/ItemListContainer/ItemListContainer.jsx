import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect (() => {
        setLoading(true)


        pedirDatos() // <=promise
        .then((data) => {
            setProductos (data)
            setLoading ( false )
        })
    }, [] )

    return (
        <>
            {  loading
                ? <h2 className="text-center text-4lx mt-8 ">Cargando...</h2>
                : <ItemList productos={productos}/>  
            }
        </>   
    )
};

export default ItemListContainer;
