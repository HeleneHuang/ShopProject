import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">

            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Welcome to Helene's Shop, your go-to destination for stylish and unique fashion finds!<br />
                        <br />This is a demo e-commerce website showcasing all the trendy clothes Helene loves.
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        We'd love to hear from you!<br />
                        <br />Email: support@heleneshop.com
                        <br />Location: Stockholm, Sweden
                        <br />Instagram: @helenes.fashion
                        <br />Business Hours: Mon–Fri, 9:00 AM – 6:00 PM (CET)
                    </span>
                </div>
            </div>

            <div className="bottom">
                <div className="left">
                    <span className="logo">Helene's Shop</span>
                    <img src='/assets/img/logo.png' />
                    <span className="copyright">
                        © Copyright 2025. All Rights Reserved
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;