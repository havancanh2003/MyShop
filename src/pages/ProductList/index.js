import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data";
import Product from "../../components/Product";
import classNames from "classnames/bind";
import styles from "./ProductList.modelu.scss";
// import Product from './../../components/Product/index';
const cx = classNames.bind(styles);

const ProductList = () => {
  return (
    <>
      <h2 className={cx("h2")}>All Products</h2>
      <div className={cx("listProducts")}>
        {products.map((item) => (
          <Link style={{ textDecoration: "none" }} to={"detail/" + item.id}>
            <Product key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
