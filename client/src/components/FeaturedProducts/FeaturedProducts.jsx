import React, { useEffect } from 'react'
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import axios from "axios";

const FeaturedProducts = ({ type }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    import.meta.env.VITE_APP_API_URL + "/products?populate=*",
                    {
                        headers: { Authorization: "Bearer " + import.meta.env.VITE_APP_API_TOKEN }
                    }
                );
                setData(res.data.data)
                console.log(res.data.data)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Discover our hand-picked collection of fashion pieces designed to elevate your everyday style.
                    From timeless essentials to trend-forward favorites, each item is selected with care and passion.
                    Find the look that speaks to you and makes you feel confident, every day.
                </p>
            </div>

            <div className="bottom">
                {data.map(item =>
                    <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts