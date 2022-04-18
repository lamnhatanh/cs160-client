import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

function Cart() {
    const { myCart, total, addToCart, setTotal } = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
    };

    const handleHome = () => {
        navigate("/");
    };
    return (
        <section className="cart-container">
            <div className="cart-header">Checkout:</div>
            <div className="cart-items">
                {myCart.slice(1).map((item, i) => {
                    
                    return (
                        <div className="cart-item" key={i}>
                            <img
                                src={item.image}
                                alt="error"
                                className="cart-item-img"
                            />
                            {item.name} : ${item.price}
                        </div>
                    );
                })}
                <div className="cart-total">Total: ${total}</div>
            </div>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
                DONE
            </button>
            <button className="cart-gohome-btn" onClick={handleHome}>
                RETURN HOME
            </button>
        </section>
    );
}

export default Cart;
