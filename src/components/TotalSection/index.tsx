import "./index.css";
import { useContext } from "react";
import { ContextInterface } from "../../assests/types";
import { CartContext } from "../../context/CartContext";

export const TotalSection = () => {
  const { total } = useContext(CartContext) || ({} as ContextInterface);

  return (
    <section className="total_section">
      <div>
        <p>SubTotal:</p>
        <p>${total}</p>
      </div>
      <div>
        <p>Shipping:</p>
        <p>$20</p>
      </div>
      <div>
        <p>Total:</p>
        <p>${20 + total}</p>
      </div>
      <button>Checkout</button>
    </section>
  );
};
