import React from "react";
import { useContext } from "react";
import { Carts } from "../../Context";
import { Link } from "react-router-dom";
import Product from "../../components/Product";
import classNames from "classnames/bind";
import styles from "./ProductList.modelu.scss";
const cx = classNames.bind(styles);

const ProductList = () => {
  const { listProducts } = useContext(Carts);
  return (
    <>
      <h2 className={cx("h2")}>All Products</h2>
      <div className={cx("listProducts")}>
        {listProducts.map((item) => (
          <Link style={{ textDecoration: "none" }} to={"detail/" + item.id}>
            <Product key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
