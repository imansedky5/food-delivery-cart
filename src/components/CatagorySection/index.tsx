import "./index.css";
import { CatagoryCard } from "../CatagoryCard";

export const CatagorySection = () => {
  return (
    <section className="catagory_section">
      <CatagoryCard url="./images/barger.png" title="burger"></CatagoryCard>
      <CatagoryCard url="./images/ice.png" title="soft drinks"></CatagoryCard>
      <CatagoryCard
        url="./images/french.png"
        title="french fries"
      ></CatagoryCard>
    </section>
  );
};
