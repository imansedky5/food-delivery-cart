import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Props, ContextInterface } from "../../assests/types";

export const AddToCartBtn = ({ order }: Props) => {
  const { addToCart, updateTotalPrice } =
    useContext(CartContext) || ({} as ContextInterface);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    addToCart(order);
    setIsClicked(true);
    updateTotalPrice();
  };

  return (
    <button className="card_btn" onClick={handleClick}>
      <span className="card_cart_icon">
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
      </span>
      {isClicked ? "View cart" : "Add to cart"}
    </button>
  );
};
