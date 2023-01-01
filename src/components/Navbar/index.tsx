import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ContextInterface } from "../../assests/types";
import { Order } from "../../assests/types";

export const Navbar = () => {
  const { cartState } = useContext(CartContext) || ({} as ContextInterface);

  let numberOfOrders = cartState.reduce((acc, order: Order) => {
    return order["quantity"]! + acc;
  }, 0);

  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <nav>
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
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* <CiShoppingCart className="cart_icon"></CiShoppingCart> */}
              <CiShoppingCart></CiShoppingCart>
              <div className="cart_quantity">{numberOfOrders}</div>
            </span>
            <button className="order_now_btn">order online</button>
          </div>
        </div>
      </nav>
      {/* {isHovering && <CartPopup></CartPopup>} */}
    </>
  );
};
