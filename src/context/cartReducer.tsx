// import useLocalStorage from "../hooks/UseLocalStorage";
import { Order, State } from "../assests/types";

type addAction = { type: string; payload: Order };
type updateAction = { type: string; payload: number };

type cartAction = addAction | updateAction;

// type cartAction =
//   | { type: "ADD_TO_CART"; payload: Order }
//   | { type: "REMOVE_FROM_CART"; payload: number }
//   | { type: "INCREASE_QUANTITY"; payload: number }
//   | { type: "DECREASE_QUANTITY"; payload: number };

const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

//usememe rerendering and strict mode local storage slider
// const initialState = {
//     cart: [],
//     total: 0,
//   };

const addToCart = (state: State, order: Order) => {
  let isOrderExist = state.cart?.find((el: Order) => el.id === order.id);

  if (isOrderExist) {
    //increase order quantity & return the cart as it is
    order.quantity! += 1;
    return [...state.cart];
  } else {
    order.quantity = 1;
    return [...state.cart, order];
  }
};

const removeFromCart = (orderId: number, state: State) => {
  let filteredOrders = state.cart?.filter(
    (order: Order) => order.id !== orderId
  );

  return filteredOrders;
};

const increaseOrderQuantity = (orderId: number, state: State) => {
  return state.cart?.map((order: Order) => {
    if (order.id == orderId) {
      order.quantity! += 1;
    }
    return order;
  });
};
const decreaseQuantity = (orderId: number, state: State) => {
  return state.cart?.map((order: Order) => {
    if (order.id == orderId && order.quantity !== 0) {
      order.quantity! -= 1;
    }
    return order;
  });
};

export const cartReducer = (state: State, action: cartAction): State => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_TO_CART:
      addToCart(state, payload as Order);
      return { ...state, cart: addToCart(state, payload as Order) };

    case actions.REMOVE_FROM_CART:
      return { ...state, cart: removeFromCart(payload as number, state) };

    case actions.INCREASE_QUANTITY:
      return { cart: increaseOrderQuantity(payload as number, state) };

    case actions.DECREASE_QUANTITY:
      return { cart: decreaseQuantity(payload as number, state) };

    default:
      return state;
  }
};
