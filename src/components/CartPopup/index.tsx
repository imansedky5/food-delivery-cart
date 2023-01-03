import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Order, ContextInterface } from "../../assests/types";

export const CartPopup = () => {
  const { cartState, total } =
    useContext(CartContext) || ({} as ContextInterface);

  return (
    <div>
      {cartState.length === 0 ? (
        <p>your cart is empty</p>
      ) : (
        <div className="popup">
          {cartState.map(({ title, price, url, quantity }: Order) => {
            return (
              <>
                <div className="popup_row">
                  <img className="popup_row_img" src={url} alt="food"></img>
                  <div className="popup_row_title_wrapper">
                    <p className="popup_row_title">{title}</p>
                    <p className="popup_row_price">${price}</p>
                    <p className="popup_row_quantity">Qty : {quantity}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="cart_total_wrapper">
            <p>Cart Total: </p>
            <p className="popup_cart_total">${total}</p>
          </div>
          <Link to="/cart" className="popup_link">
            view cart
          </Link>
        </div>
      )}
    </div>
  );
};
