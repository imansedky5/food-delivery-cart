import { Order, State } from "../assests/types";
import { Quantity } from "../components/Quantity";

type addAction = { type: string; payload: Order };
type updateAction = { type: string; payload: number };

type cartAction = addAction | updateAction;

const actions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
};

const addToCart = (state: State, order: Order) => {
  let isOrderExist = state.cart.find((el) => el.id === order.id);

  if (isOrderExist) {
    order.quantity! += 1;
    return [...state.cart];
  } else {
    order.quantity = 1;
    return [...state.cart, order];
  }
};

const removeFromCart = (state: State, orderId: number) => {
  let filteredOrders = state.cart.filter((order) => order.id !== orderId);

  return filteredOrders;
};

const increaseOrderQuantity = (state: State, orderId: number) => {
  return state.cart.map((order) => {
    if (order.id == orderId) {
      return { ...order, quantity: order.quantity! + 1 };
    } else {
      return order;
    }
  });
};

const decreaseQuantity = (state: State, orderId: number) => {
  return state.cart.map((order) => {
    if (order.id == orderId && order.quantity !== 0) {
      return { ...order, quantity: order.quantity! - 1 };
    } else {
      return order;
    }
  });
};

export const cartReducer = (state: State, action: cartAction) => {
  const { type, payload } = action;

  switch (type) {
    case actions.ADD_TO_CART:
      console.log(action.type);
      addToCart(state, payload as Order);
      return { ...state, cart: addToCart(state, payload as Order) };

    case actions.REMOVE_FROM_CART:
      return { ...state, cart: removeFromCart(state, payload as number) };

    case actions.INCREASE_QUANTITY:
      return { cart: increaseOrderQuantity(state, payload as number) };

    case actions.DECREASE_QUANTITY:
      return { cart: decreaseQuantity(state, payload as number) };

    default:
      return state;
  }
};
