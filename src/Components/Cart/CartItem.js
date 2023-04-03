import dataPerfumes from "../../data/dataPerfumes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const perfumes = dataPerfumes.find(item => item.id === cartItem.perfumeId);
    const dispatch = useDispatch();


    return (<div> 
        <p>{perfumes.name}</p>
    <p> {cartItem.quantity} perfume(s)</p>
    <p> Price: $ {perfumes.price * cartItem.quantity}</p>
    <span onClick ={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
    <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
    </span>
    </div>)
}

export default CartItem;