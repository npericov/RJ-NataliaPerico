import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {
    return (
        <section className="container m-auto ">
        { /*catalogo de productos */}
        <h2 className=" flex  justify-center text-3xl font-bold text-gray-500 py-10">Productos</h2>
        <hr/>

        <div className="flex flex-wrap justify-center gap-10 items-center">
        {productos.map((item) => (
        <ItemCard key={item.id} item={item} />
        ))}
        </div>
    </section>
    );
};

export default ItemList;