import "./index.css";
import { Order } from "../../assests/types";

export const CatagoryCard = ({ url, title }: Order) => {
  return (
    <div className="catagory_card">
      <div className="catagory_cart_img_holder">
        <img src={url}></img>
      </div>
      <p className="catagory_card_title">{title}</p>
    </div>
  );
};
