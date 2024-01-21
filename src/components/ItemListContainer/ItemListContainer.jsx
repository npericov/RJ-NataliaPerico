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
        {loading ? (
        <div className="flex items-center justify-center flex-col gap-8 mt-20">
            <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-tecnica"></div>
            <p className="text-center text-3xl mt-8 font-semibold text-tecnica">Cargando...</p>
        </div>
        ) : (
        <ItemList productos={productos} />
        )}
    </>
    )
};

export default ItemListContainer;



/*<>
{  loading
    ? <h2 className="text-center text-4-lx mt-8 ">Cargando...</h2>
    : <ItemList productos={productos}/>  
}
</>  */ 
