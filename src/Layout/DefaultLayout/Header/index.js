import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <i classNmme="fa-solid fa-bars"></i>
    </header>
  );
}

export default Header;
