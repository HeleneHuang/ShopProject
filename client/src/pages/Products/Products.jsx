import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import { makeRequest } from "../../makeRequest";

const Products = () => {
    const catId = parseInt(useParams().id);
    // console.log("catId: ", catId);

    const [maxPrice, setMaxPrice] = useState(500);
    const [sort, setSort] = useState("asc");
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][$eq]=${catId}`
    );
    // console.log(data)

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked
                ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };
    // console.log(selectedSubCats)

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input
                                type="checkbox"
                                id={item.id}
                                value={item.id}
                                onChange={handleChange}
                            />
                            <label htmlFor={item.id}>{item.title}</label>
                        </div>
                    ))}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={e => setMaxPrice(e.target.value)}
                        />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="asc"
                            value="asc"
                            name="price"
                            onChange={e => setSort("asc")}
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="desc"
                            value="desc"
                            name="price"
                            onChange={e => setSort("desc")}
                        />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img
                    className="catImg"
                    src="/assets/img/09.webp"
                />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div>
    );
};

export default Products;