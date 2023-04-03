import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const Perfume =({perfume}) => {
    const [quantity, setQuantity ] = useState (1);
    const dispatch  = useDispatch ()


    return (<div>
<img src={`./${perfume.img}.jpg`} alt="img" width="450px"/>
<h2>{Perfume.name}</h2>
<p>$ {perfume.price}</p>

<ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
<button onClick={() => {dispatch(addItemToCart({perfume, quantity}));
}} > Add to cart</button>
</div>)
}

export default Perfume;