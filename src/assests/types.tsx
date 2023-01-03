interface Order {
  id?: number;
  title?: string;
  url?: string;
  price?: number;
  quantity?: number;
  type?: string;
  description?: string;
}

type Props = {
  order: Order;
};

interface State {
  cart: Order[];
  total: number;
}

interface ContextInterface {
  addToCart: (order: Order, state?: State) => void;
  removeFromCart: (orderId: number) => void;
  increaseQuantity: (orderId: number) => void;
  decreaseQuantity: (orderId: number) => void;
  updateTotalPrice: () => void;
  cartState: Order[];
  total: number;
}

export type { Order, State, ContextInterface, Props };
