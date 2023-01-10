import "./index.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Quantity } from "../Quantity";
import { Order, ContextInterface } from "../../assests/types";
import { TotalSection } from "../TotalSection";

export const Cart = () => {
  const { removeFromCart, updateTotalPrice, cartState } =
    useContext(CartContext) || ({} as ContextInterface);

  return cartState.length === 0 ? (
    <div className="empty_cart">
      <p>
        your cart is currently <span>Empty!</span>
      </p>
      <Link to="/" className="back_to_home_btn">
        back to home
      </Link>
    </div>
  ) : (
    <>
      <table>
        <tr className="table_header">
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>

        {cartState.map(({ id, title, price, url, quantity }: Order) => {
          return (
            <tr>
              <td>
                <div className="img_title_wrapper">
                  <img src={url}></img>
                  <p className="title">{title}</p>
                </div>
              </td>
              <td>
                <Quantity id={id} quantity={quantity}></Quantity>
              </td>
              <td>${price}</td>
              <td>
                <div className="subtotal_delete_wrapper">
                  <p className="subtotal">${quantity! * price!}</p>
                  <p
                    className="delete"
                    onClick={() => {
                      removeFromCart(id as number);
                      updateTotalPrice();
                    }}
                  >
                    X
                  </p>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <TotalSection></TotalSection>
    </>
  );
};
