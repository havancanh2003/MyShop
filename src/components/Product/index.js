import classNames from "classnames/bind";
import styles from "./Product.module.scss";
const cx = classNames.bind(styles);

function Product(props) {
  const { src, name, price } = props.item;
  console.log(props.item);
  return (
    <div className={cx("product")}>
      <img src={src} alt="" />
      <div styles={{ display: "flex", justifyContent: "space-between" }}>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Product;
