import dataPerfumes from "../../data/dataPerfumes";
import Perfume from "./Perfume";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/perfumesSlice";

const Perfumes = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
{dataPerfumes
.filter (perfume => {
    if (selectedCategory === 'ALL') return true;
    return selectedCategory === perfume.category;
}
)
.map(perfume => <Perfume perfume={perfume}/>)}
</div>)
}

export default Perfumes;