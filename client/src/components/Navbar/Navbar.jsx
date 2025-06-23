import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import useFetch from "../../hooks/useFetch";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    // const products = useSelector((state) => state.cart.products);

    const { data: categories } = useFetch('/categories');

    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="left">
                    <div className="item">
                        <img src="/assets/img/en.png" />
                        <img src="/assets/img/down.png" />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <img src="/assets/img/down.png" />
                    </div>

                    <div className="cat">
                        {categories?.map(cat => (
                            <Link className="link" to={`/products/${cat.id}`} key={cat.id}>
                                {cat.title.charAt(0).toUpperCase() + cat.title.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="center">
                    <Link className="link" to="/">Helene's Shop</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <img src="/assets/img/search.png" />
                        <img src="/assets/img/person.png" />
                        <img src="/assets/img/like.png" />

                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <img src="/assets/img/cart.png" />
                            <span>0</span>
                        </div>

                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
};

export default Navbar;
