import classNames from "classnames/bind";
import style from "./Logo.module.scss";

const cx = classNames.bind(style);
const Logo = () => {
  return <span className={cx("logo")}>A L P I N E</span>;
};

export default Logo;
