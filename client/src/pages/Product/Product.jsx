import React from "react";
import { useState } from "react";
import "./Product.scss";
// import BalanceIcon from "@mui/icons-material/Balance";
// import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("0");
    const [quantity, setQuantity] = useState(1);

    // const dispatch = useDispatch();
    // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

    const images = [
        "/assets/img/hat01.webp",
        "/assets/img/hat02.webp",
    ]

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img
                        src={
                            images[0]
                        }
                        alt=""
                        onClick={e => setSelectedImg("0")}
                    />
                    <img
                        src={
                            images[1]
                        }
                        alt=""
                        onClick={e => setSelectedImg("1")}
                    />
                </div>

                <div className="mainImg">
                    <img
                        src={
                            images[selectedImg]
                        }
                        alt="" />
                </div>
            </div>

            <div className="right">
                <h1>test title</h1>
                <span className="price">test price</span>
                <p>test sort</p>
                <div className="quantity">
                    <button
                        onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                    >

                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <img src="/assets/img/cart0.png" className="icon" /> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <img src="/assets/img/like.png" className="icon" /> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <img src="/assets/img/compare.png" className="icon" /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
};

export default Product;