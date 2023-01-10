import "./index.css";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  return (
    <menu className="mobile_menu">
      <Link to="/" className="category_link">
        HOME
      </Link>
      <Link to="/cart" className="category_link">
        CART
      </Link>
      <Link to="/about" className="category_link">
        ABOUT
      </Link>
    </menu>
  );
};
