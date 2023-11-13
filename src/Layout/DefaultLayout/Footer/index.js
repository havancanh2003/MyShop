import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

function Footer() {
  return (
    <footer>
      <span>
        En <i className="fa-solid fa-caret-down"></i>
      </span>
      <div className={cx("nav")}>
        <Link to="/contact">CONTACT /</Link>
        <Link to="/blog"> BLOG /</Link>
        <Link to="/productList"> PRODUCTS /</Link>
        <Link to="/"> HOME</Link>
      </div>
      <div>
        {/* <span>Fb </span>
        <span>TW </span>
        <span>Yt </span>
        <span>Ln </span>
        <span>Ly</span> */}
        © 2023, ALPINE AUTHENTIC
      </div>
    </footer>
  );
}

export default Footer;
