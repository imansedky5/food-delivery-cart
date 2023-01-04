import { Cart } from "../../components/Cart";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner";

export const CartPage = () => {
  return (
    <>
      <Navbar className="transparent_nav"></Navbar>
      <Banner page="Cart"></Banner>
      <Cart></Cart>
    </>
  );
};
