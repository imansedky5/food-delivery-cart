import "./index.css";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AddToCartBtn } from "../AddToCartBtn";
import { Props } from "../../assests/types";

export const FoodCard = ({ order }: Props) => {
  const { title, url, description, price } = order;

  return (
    <div className="dish_card">
      <Link className="link" to="/foodDetails" state={{ order }}>
        <img className="card_image" alt="fish" src={url}></img>
      </Link>
      <p className="card_rating_stars">
        <AiTwotoneStar></AiTwotoneStar>
        <AiTwotoneStar></AiTwotoneStar>
        <AiTwotoneStar></AiTwotoneStar>
        <AiTwotoneStar></AiTwotoneStar>
        <AiTwotoneStar></AiTwotoneStar>
      </p>
      <h2>{title}</h2>

      <p>{description}</p>
      <p className="price">${price}</p>
      <AddToCartBtn order={order}></AddToCartBtn>
    </div>
  );
};
