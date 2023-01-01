import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "./cartReducer";
import { Order, State, ContextInterface } from "../assests/types";

type CartProviderProps = {
  children?: React.ReactNode;
};

const CartContext = createContext<ContextInterface | null>(null);

const CartProvider = ({ children }: CartProviderProps) => {
  const initialState: State = {
    cart:
      localStorage.getItem("cart") == null
        ? []
        : JSON.parse(localStorage.getItem("cart")!),
    total: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (order: Order) => {
    return dispatch({ type: "ADD_TO_CART", payload: order });
  };

  const removeFromCart = (orderId: number) => {
    return dispatch({ type: "REMOVE_FROM_CART", payload: orderId });
  };

  const increaseQuantity = (orderId: number) => {
    return dispatch({ type: "INCREASE_QUANTITY", payload: orderId });
  };
  const decreaseQuantity = (orderId: number) => {
    return dispatch({ type: "DECREASE_QUANTITY", payload: orderId });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartState: state.cart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
