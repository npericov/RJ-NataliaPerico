import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId} = useParams()
    console.log (categoryId)


    useEffect (() => {
        setLoading(true)


        pedirDatos() // <=promise
        .then((data) => {
            const items = categoryId
                            ? data.filter(prod => prod.category === categoryId)
                            : data

            setProductos (items)           
        })
        .finally (() => setLoading ( false ))
    }, [categoryId])

    return (
        <>
            {  loading
                ? <h2 className="text-center text-4-lx mt-8 ">Cargando...</h2>
                : <ItemList productos={productos}/>  
            }
        </>   
    )
};

export default ItemListContainer;
