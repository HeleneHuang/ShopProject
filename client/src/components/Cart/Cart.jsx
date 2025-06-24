import "./Cart.scss";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            // simplify the data, only keep the id and quantity 
            const minimalProducts = products.map(p => ({
                id: p.id,
                quantity: p.quantity || 1,  // fallback
            }));
            console.log("Sending products to backend:", minimalProducts);

            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.error("Stripe Error:", err.response?.data || err.message);
        }
    };

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
                        onClick={() => dispatch(removeItem(item.id))}
                    />
                </div>
            ))}

            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>

            <div className="foot">
                <span className="reset" onClick={() => dispatch(resetCart())}>
                    Reset Cart
                </span>
                <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            </div>
        </div >
    )
}

export default Cart