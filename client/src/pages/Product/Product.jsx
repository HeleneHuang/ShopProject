import { useState } from "react";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
    const id = useParams().id;
    // console.log("id= " + id)

    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const { data, loading, error } = useFetch(`/products?filters[id][$eq]=${id}&populate=*`);
    // console.log(data?.[0]?.img?.url)
    // console.log(data)
    const product = data?.[0];

    console.log("🧩 当前 URL 中的 id:", id);
    console.log("📦 查到的商品数据:", product);

    const dispatch = useDispatch();

    return (
        <div className="product">
            {loading ? "loading" : (<><div className="left">
                <div className="images">
                    <img
                        src={
                            product?.img?.url
                                ? import.meta.env.VITE_APP_UPLOAD_URL + product.img.url
                                : "/assets/img/err.png"
                        }
                        onClick={e => setSelectedImg("img")}
                    />
                    <img
                        src={
                            product?.img2?.url
                                ? import.meta.env.VITE_APP_UPLOAD_URL + product.img2.url
                                : "/assets/img/err.png"
                        }

                        onClick={e => setSelectedImg("img2")}
                    />
                </div>

                <div className="mainImg">
                    <img
                        src={
                            product?.[selectedImg]?.url
                                ? import.meta.env.VITE_APP_UPLOAD_URL + product[selectedImg].url
                                : "/assets/img/err.png"
                        } />
                </div>
            </div>

                <div className="right">
                    <h1>{product?.title}</h1>
                    <span className="price">${product?.price}</span>
                    <p>{product?.desc}</p>
                    <div className="quantity">
                        <button
                            onClick={() =>
                                setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                            }>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>

                    <button className="add" onClick={() => dispatch(addToCart({
                        id: product.id,
                        title: product.title,
                        desc: product.desc,
                        price: product.price,
                        img: import.meta.env.VITE_APP_UPLOAD_URL + product.img.url,
                        quantity
                    }))}>
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
                    <div className="infoTop">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-Shirt</span>
                        <span>Tag: T-Shirt, Women, Top</span>
                    </div>
                    <hr />
                    <div className="infoBottom">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div></>)
            }
        </div >
    )
};

export default Product;