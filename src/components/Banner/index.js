import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import banner from "./banner.jpg";
const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner")}>
      <div className={cx("about")}>
        <h2>/ Sunglasses</h2>
        <span>
          French know how with hight-techchology lensess in order to never be
          taken bu surprise when there is a sharp bright sunny turn in the road
        </span>
        <button>Buy 115$</button>
      </div>
      <div className={cx("img")}>
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
