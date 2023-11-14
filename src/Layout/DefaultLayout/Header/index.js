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
      <i className="fa-solid fa-bars-staggered"></i>
      <Link
        to="/"
        style={{
          transform: "translateX(48.5px)",
          textDecoration: "none",
          color: "#333",
        }}
      >
        <Logo />
      </Link>
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
            {/* <span
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
            </span> */}
          </i>
        </Link>
        <span style={{ lineHeight: "1" }}>
          En <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
