import "./index.css";
import { Navbar } from "../Navbar";

export const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="about_section">
        <div className="about_section_info">
          <div className="about_section_title_text_wrapper">
            <span> WE PUT 100% OF LOVE AND DEDICATION</span>
            <h1>Sushi, Burger, And Best Pizza In Town</h1>
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="about_section_images">
          <img src="./images/image.jpg"></img>
          <img src="./images/image.jpg"></img>
          <img src="./images/rest_01.jpg"></img>
        </div>
      </div>
    </>
  );
};

// .title_text_wrapper h1{
//     color: #252525;
//     font-size: 2.5rem;
//     /* width: 50%;
//     margin: auto; */
//     /* padding:  30px; */
//     /* padding-top: 15px; */
//     font-weight: 790;

// }
