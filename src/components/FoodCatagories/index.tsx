import "./index.css";

type FoodCatagoriesProps = {
  setCatagoryId: (catagoryId: number) => void;
};

export const FoodCatagories = ({ setCatagoryId }: FoodCatagoriesProps) => {
  return (
    <div className="catagories_wrapper">
      <button onClick={() => setCatagoryId(1)}>pizza</button>
      <button onClick={() => setCatagoryId(2)}>asian food</button>
      <button onClick={() => setCatagoryId(3)}>burger</button>
    </div>
  );
};
