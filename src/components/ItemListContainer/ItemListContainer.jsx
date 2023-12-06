
const ItemListContainer = ({greeting}) => {

    return (

    <div className="flex items-center justify-center p-4">
        <div className="text-center text-gray-400 text-lg font-semibold uppercase">
            <h1>{greeting}</h1>
        </div>
    </div>
    )


};

export default ItemListContainer;
