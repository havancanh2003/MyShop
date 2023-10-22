import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <i className="fa-solid fa-bars-staggered"></i>
      <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
        <Logo />
      </Link>
      <div className={cx("nav_right")}>
        <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>
          <i className="fa-solid fa-cart-plus"></i>
        </Link>
        <span style={{ lineHeight: "1" }}>
          En <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
