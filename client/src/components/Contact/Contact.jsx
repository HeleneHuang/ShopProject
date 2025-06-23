import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>JOIN US</button>
                </div>

                <div className="icons">
                    <img src="assets/img/Facebook.png" />
                    <a href="https://github.com/HeleneHuang/ShopProject" target="_blank" rel="noopener noreferrer">
                        <img src="assets/img/github.png" alt="GitHub" />
                    </a>
                    <img src="assets/img/ins.png" />
                    <img src="assets/img/linkedin.png" />
                </div>

            </div>
        </div>
    );
};

export default Contact;