import "./index.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Quantity } from "../Quantity";
import { Order, ContextInterface } from "../../assests/types";

export const Cart = () => {
  const { removeFromCart, updateTotalPrice, cartState } =
    useContext(CartContext) || ({} as ContextInterface);

  return (
    <table>
      <tr className="table_header">
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Subtotal</th>
      </tr>

      {cartState.length === 0 ? (
        <div>your cart is empty hhhhhhh</div>
      ) : (
        cartState.map(({ id, title, price, url, quantity }: Order) => {
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
        })
      )}
    </table>
  );
};
