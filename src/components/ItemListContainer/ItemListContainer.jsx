import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()


    useEffect (() => {
        setLoading(true)

        // 1. Armar una referencia (sincronica)
        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
                        ? query(productosRef, where('category','==', categoryId) )
                        : productosRef

        // 2. Llamar a esa referencia (asincronica)
        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map( doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                console.log( docs)
                setProductos (docs)
            })

        .finally(() => setLoading(false))




    }, [categoryId])

    return (
        <>
        {loading ? (
        <Loader/>
        ): (
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




/*pedirDatos() // <=promise
.then((data) => {
    const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data

    setProductos (items)           
})
.finally (() => setLoading ( false ))*/