import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Order, ContextInterface } from "../../assests/types";

export const Quantity = ({ id, quantity }: Order) => {
  const { increaseQuantity, decreaseQuantity } =
    useContext(CartContext) || ({} as ContextInterface);
  return (
    <div className="quantity_container">
      <span onClick={() => decreaseQuantity(id as number)}>-</span>
      <p>{quantity}</p>
      <span onClick={() => increaseQuantity(id as number)}>+</span>
    </div>
  );
};
