import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ContextInterface } from "../../assests/types";
import { Order } from "../../assests/types";
import { CartPopup } from "../CartPopup";

interface navbarProps {
  className?: string;
}

export const Navbar = ({ className }: navbarProps) => {
  const { cartState } = useContext(CartContext) || ({} as ContextInterface);
  const [isClicked, setIsClicked] = useState(false);

  let numberOfOrders = cartState.reduce((totalOrders, order: Order) => {
    return order["quantity"]! + totalOrders;
  }, 0);

  return (
    <>
      <nav className={className}>
        <img alt="logo" src="./images/logo.png" />
        <div className="menu_wrapper">
          <ul>
            <Link className="link" to="/">
              <li>home</li>
            </Link>
            <Link className="link" to="/about">
              <li>about</li>
            </Link>
            <li>menu</li>
            <Link className="link" to="/cart">
              <li>cart</li>
            </Link>
          </ul>
          <div className="icon_btn_wrapper">
            <p className="hotline">
              <span>Hot line:</span> +970 59721212
            </p>
            <span
              className="cart_icon"
              onClick={() => setIsClicked(!isClicked)}
            >
              <CiShoppingCart></CiShoppingCart>
              <div className="cart_quantity">{numberOfOrders}</div>
            </span>
            <div>{isClicked && <CartPopup></CartPopup>}</div>
          </div>
        </div>
      </nav>
    </>
  );
};
