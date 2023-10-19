import classNames from "classnames/bind";
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);

function Product(props) {
  const { src, name, price } = props.item;
  console.log(props.item);
  return (
    <div className={cx("product")}>
      <img src={src} alt="" />
      <div className={cx("about_product")}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <span className={cx("des")}>This is the {name}</span>
    </div>
  );
}

export default Product;
