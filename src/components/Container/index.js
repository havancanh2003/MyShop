import { products } from "../../data";
import Product from "../Product";
import classNames from "classnames/bind";
import styles from "./Container.module.scss";
const cx = classNames.bind(styles);
function Container() {
  return (
    <div className={cx("listProducts")}>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Container;
