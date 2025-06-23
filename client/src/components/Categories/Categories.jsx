import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="categories">

            <div className="col">
                <div className="row">
                    <img
                        src="assets/img/09.webp"
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="assets/img/06.webp"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <img
                        src="assets/img/03.webp"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>

            <div className="col col-l">
                {/* row 1 */}
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="assets/img/07.webp"
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img
                                src="assets/img/08.webp"
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <img
                        src="assets/img/05.webp"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Categories;