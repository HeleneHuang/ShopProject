import React from "react";
import "./Cart.scss";
// import { useSelector } from "react-redux";
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { useDispatch } from "react-redux";
// import { makeRequest } from "../../makeRequest";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "/assets/img/01.webp",
            desc: "test desc",
            title: "dress",
            isNew: true,
            oldPrice: 16,
            price: 12
        },
        {
            id: 2,
            img: "/assets/img/02.webp",
            title: "hat",
            desc: "test desc",
            isNew: false,
            oldPrice: 26,
            price: 18
        },]
    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data.map((item) => (
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