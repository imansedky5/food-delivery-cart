import "./index.css";
import { useState, useEffect } from "react";
import { SliderMenu } from "./SliderMenu";
import { fastFoodData } from "../../assests/data";
import { FoodCatagories } from "../FoodCatagories";
import { Title } from "../Title";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

export const Slider = () => {
  const [activeCardsId, setActiveCardsId] = useState(0);
  const [catagoryId, setCatagoryId] = useState(0);
  const [foodData, setFoodData] = useState(fastFoodData);

  useEffect(() => {
    let FoodCatagoryData = fastFoodData.filter(({ type }) => {
      switch (catagoryId) {
        case 1:
          return type === "pizza";

        case 2:
          return type === "asian food";

        case 3:
          return type === "burger";
        default:
          return fastFoodData;
      }
    });

    setFoodData(FoodCatagoryData);
  }, [catagoryId]);

  const showNextItems = () => {
    if (activeCardsId + 3 >= foodData.length - 1) {
      setActiveCardsId(0);
    } else {
      setActiveCardsId(activeCardsId + 3);
    }
  };
  const showPrevItems = () => {
    if (activeCardsId !== 0) {
      setActiveCardsId(activeCardsId - 3);
    }
  };

  return (
    <section className="slider_section">
      <Title
        text="Quick Pick"
        title="We Offer People Best Way
To Eat Food"
      ></Title>
      <FoodCatagories setCatagoryId={setCatagoryId}></FoodCatagories>
      <div className="slider">
        <div className="slider_prev_arrow" onClick={showPrevItems}>
          <span className="icon">
            <MdArrowBackIos></MdArrowBackIos>
          </span>
        </div>

        <SliderMenu
          activeCardsId={activeCardsId}
          foodData={foodData}
        ></SliderMenu>
        <div className="slider_next_arrow" onClick={showNextItems}>
          <span className="icon">
            <MdArrowForwardIos></MdArrowForwardIos>
          </span>
        </div>
      </div>
    </section>
  );
};