import "./index.css";
import { FoodCard } from "../FoodCard";
import { Order } from "../../assests/types";

type SliderMenuProps = {
  activeCardsId: number;
  foodData: Order[];
};

export const SliderMenu = ({ activeCardsId, foodData }: SliderMenuProps) => {
  return (
    <div className="slider_menu">
      {foodData.slice(activeCardsId, activeCardsId + 3).map((order, index) => {
        return <FoodCard order={order}></FoodCard>;
      })}
    </div>
  );
};
