import "./index.css";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

interface BannerProps {
  page: string;
}
export const Banner = ({ page }: BannerProps) => {
  return (
    <div className="banner">
      <div className="path">
        <Link to="/" className="link">
          <span className="banner_home_link">Home</span>
        </Link>
        <span className="banner_arrow">
          <MdArrowForwardIos></MdArrowForwardIos>
        </span>
        <Link to="/page" className="link">
          <span>{page}</span>
        </Link>
      </div>
    </div>
  );
};
