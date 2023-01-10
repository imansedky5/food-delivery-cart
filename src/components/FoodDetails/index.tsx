import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { AddToCartBtn } from "../../components/AddToCartBtn";
import { AiTwotoneStar } from "react-icons/ai";

export const FoodDetails = () => {
  const location = useLocation();
  const { order } = location.state;

  return (
    <div className="food_details_wrapper">
      <div className="food_details_img">
        <img src={order.url}></img>
      </div>
      <div className="food_details_section">
        <div className="rating_stars_title_wrapper">
          <h2 className="title"> {order.title}</h2>
          <p className="card_rating_stars">
            <AiTwotoneStar></AiTwotoneStar>
            <AiTwotoneStar></AiTwotoneStar>
            <AiTwotoneStar></AiTwotoneStar>
            <AiTwotoneStar></AiTwotoneStar>
            <AiTwotoneStar></AiTwotoneStar>
          </p>
        </div>

        <p className="price">${order.price}</p>
        <p className="description">{order.details}</p>
        <div className="wrapper">
          <AddToCartBtn order={order}></AddToCartBtn>
          <Link to="/" className="back_to_home_btn">
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
