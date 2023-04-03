import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
const cartItems = useSelector (getCartItems);
const totalPrice = useSelector(getTotalPrice);

    return (<div> 

    <img className="cartIcon" src="https://images.emojiterra.com/twitter/v13.1/512px/1f6d2.png" alt="img"/>
    <h3>TOTAL: $ {totalPrice} </h3>
    {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
   
    </div>)
}

export default Cart;