import { Header } from "../../components/Header";
import { CatagorySection } from "../../components/CatagorySection";
import { Slider } from "../../components/Slider";
import { Promotion } from "../../components/Promotion";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <CatagorySection></CatagorySection>
      <Promotion></Promotion>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
};
