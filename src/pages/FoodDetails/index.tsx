import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner";
import { FoodDetails } from "../../components/FoodDetails";

export const FoodDetailsPage = () => {
  return (
    <>
      <Navbar className="transparent_nav"></Navbar>
      <Banner
        page="Food Details"
      ></Banner>
      <FoodDetails></FoodDetails>
    </>
  );
};
