import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {
    return (
        <section className="container m-auto mt-8 ">
        { /*catalogo de productos */}
        <h2 className="text-3xl font-bold text-gray-500 py-10">Productos</h2>
        <hr/>

        <div className="flex flex-wrap justify-start gap-10 items-center">
        { productos.map( (item) => <ItemCard item={item}/>)}
        </div>
    </section>
    );
};

export default ItemList;