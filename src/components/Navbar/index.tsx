import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ContextInterface } from "../../assests/types";
import { Order } from "../../assests/types";
import { CartPopup } from "../CartPopup";
import { UseIsMobile } from "../../hooks/useIsMobile";
import { MobileMenu } from "./MobileMenu";

interface navbarProps {
  className?: string;
}

export const Navbar = ({ className }: navbarProps) => {
  const { cartState } = useContext(CartContext) || ({} as ContextInterface);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const isMobile = UseIsMobile();

  let numberOfOrders = cartState.reduce((totalOrders, order: Order) => {
    return order["quantity"]! + totalOrders;
  }, 0);

  return (
    <>
      <nav className={className}>
        <img alt="logo" src="./images/logo.png" />
        {!isMobile && (
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
                onClick={() => setIsCartClicked(!isCartClicked)}
              >
                <CiShoppingCart></CiShoppingCart>
                <div className="cart_quantity">{numberOfOrders}</div>
              </span>
              <div>{isCartClicked && <CartPopup></CartPopup>}</div>
            </div>
          </div>
        )}
        {isMobile && (
          <div onClick={() => setIsMenuClicked(!isMenuClicked)}>
            <GiHamburgerMenu></GiHamburgerMenu>
          </div>
        )}
      </nav>
      {isMenuClicked && <MobileMenu></MobileMenu>}
    </>
  );
};
