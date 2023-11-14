import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Carts } from "../../../Context";
const cx = classNames.bind(styles);

function Header() {
  const { cartNumber } = useContext(Carts);
  return (
    <header className={cx("header")}>
      <div className={cx("bar")}>
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
      <div className={cx("logo")}>
        <Link
          to="/"
          style={{
            transform: "translateX(48.5px)",
            textDecoration: "none",
            color: "#333",
          }}
          className={cx("logo")}
        >
          <Logo />
        </Link>
      </div>
      <div className={cx("nav_right")}>
        <Link to="/cart" style={{ textDecoration: "none", color: "#333" }}>
          <i style={{ position: "relative" }} className="fa-solid fa-cart-plus">
            {cartNumber ? (
              <span
                style={{
                  color: "#fff",
                  padding: "5px",
                  backgroundColor: "red",
                  fontSize: ".8rem",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "-10px",
                }}
              >
                {cartNumber}
              </span>
            ) : (
              <></>
            )}
          </i>
        </Link>
        <span className={cx("language")} style={{ lineHeight: "1" }}>
          En <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
