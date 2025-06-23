import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

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
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts