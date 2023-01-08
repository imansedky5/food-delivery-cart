import './index.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-agency-section">
          <h2 className="footer-agency-name">Pizza</h2>
          <p>
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
          </p>
          <div className="social-links">
            <div>
              <FaFacebook></FaFacebook>
            </div>
            <div>
              <FaInstagram></FaInstagram>
            </div>
            <div>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
        <div>
          <h4>Our Links</h4>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Features</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li>
              <a>Asian Food</a>
            </li>
            <li>
              <a>Burger</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </div>
        <div className="communication-links">
          <h4>Contact Us</h4>
          <div>
            <div className="communication-icon">
              <FaVoicemail />
            </div>

            <p>Pizzasfries@gmail.com</p>
          </div>
          <div>
            <div className="communication-icon">
              <FaPhone />
            </div>
            <p>+592 975365233</p>
          </div>
        </div>
      </div>
      <div className="footer-tail">
      © 2022 Iman Sedky. All Rights Reserved
      </div>
    </footer>
  );
};