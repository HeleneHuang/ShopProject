import React, { useState } from "react";
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "assets/img/slider01.webp",
        "assets/img/slider02.webp",
        "assets/img/slider03.webp",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <img src="assets/img/left.png" />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <img src="assets/img/right.png" />
                </div>
            </div>
        </div>
    );
};

export default Slider;