import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Logo from "../../../components/Logo";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <i className="fa-solid fa-bars-staggered"></i>
      <Logo />
      <div className={cx("nav_right")}>
        <i className="fa-solid fa-cart-plus"></i>
        <span style={{ lineHeight: "1" }}>
          En <i className="fa-solid fa-caret-down"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
