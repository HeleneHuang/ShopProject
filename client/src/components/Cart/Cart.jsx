import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { useDispatch } from "react-redux";
// import { makeRequest } from "../../makeRequest";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    // const dispatch = useDispatch();

    // const totalPrice = () => {
    //     let total = 0;
    //     products.forEach((item) => {
    //         total += item.quantity * item.price;
    //     });
    //     return total.toFixed(2);
    // };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <img
                        src="/assets/img/delete.png"
                        className="delete"

                    />
                </div>
            ))}

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$test total price</span>
            </div>

            <div className="foot">
                <span className="reset">
                    Reset Cart
                </span>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div >
    )
}

export default Cart