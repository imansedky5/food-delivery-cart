import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Slider } from "./components/Slider";
import { FoodDetailsPage } from "./pages/FoodDetails";
import { Home } from "./pages/Home";
import { About } from "./components/About";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/foodDetails" element={<FoodDetailsPage />}></Route>
          <Route path="/menu" element={<Slider />}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
