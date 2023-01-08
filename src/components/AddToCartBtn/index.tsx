import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Props, ContextInterface } from "../../assests/types";

export const AddToCartBtn = ({ order }: Props) => {
  const { cartState, addToCart, updateTotalPrice } =
    useContext(CartContext) || ({} as ContextInterface);

  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    let isOrderAddedToCart = cartState.find((item) => order.id === item.id);

    if (isOrderAddedToCart) {
      navigate("/cart");
    } else {
      addToCart(order);
      setIsClicked(true);
      updateTotalPrice();
    }
  };

  return (
    <button className="card_btn" onClick={handleClick}>
      <span className="card_cart_icon">
        <AiOutlineShoppingCart></AiOutlineShoppingCart>
      </span>
      {!isClicked ? "Add to cart" : "View cart"}
    </button>
  );
};
