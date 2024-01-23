import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
    setLoading(true);

    //1.- armar a la referencia

    const docRef = doc(db, 'productos', itemId)

    //2.llamar a la referencia

    getDoc( docRef )
    .then(( docSnapshot) => {
        const doc = {
            ...docSnapshot.data(),
            id: docSnapshot.id
        }

        setItem(doc)
    })
    .finally(()=> setLoading (false))


    }, []);

    return (
    <>
        {loading ? (
        <Loader/>
        ) : (
        <ItemDetail item={item}/>
        )}
    </>
    );
};

export default ItemDetailContainer;