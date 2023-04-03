import Filter from "./Filter";

const AllCategories = () => {
    return (
    <div > 
    <h1> Perfume Brands </h1>
    {['CHANEL', 'GUCCI', 'YSL', 'DIOR', 'ALL']
    .map(category => <Filter category ={category}/>
    )}
    </div>)
}

export default AllCategories;