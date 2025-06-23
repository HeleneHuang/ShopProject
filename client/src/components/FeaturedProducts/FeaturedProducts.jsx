import React from 'react'
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

    const data = [
        {
            id: 1,
            img: "/assets/img/01.webp",
            title: "dress",
            isNew: true,
            oldPrice: 16,
            price: 12
        },
        {
            id: 2,
            img: "/assets/img/02.webp",
            title: "hat",
            isNew: false,
            oldPrice: 26,
            price: 18
        },
        {
            id: 3,
            img: "/assets/img/03.webp",
            title: "coat",
            isNew: true,
            oldPrice: 54,
            price: 33
        },
        {
            id: 4,
            img: "/assets/img/04.webp",
            title: "jeans",
            isNew: false,
            oldPrice: 26,
            price: 20
        },
    ];

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