import { Navbar } from "../Navbar";
import './index.css'

export const Header = () => {

return <header>
    <Navbar></Navbar>
    <div className="wrapper">
        <div className="header_content">
            <h1>Super delicious food in town!</h1>
            <p>Curabitur imperdiet varius lacus, id placerat purus vulputate non. Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex, gravida vel porttitor et, pretium ac sapien.</p>
            <button className="book_table_btn">Book a Table</button>
        </div>
        <img className="pizza_img" alt="pizza" src="./images/special-pro_1_bg.png"></img>
    </div>
</header>

}