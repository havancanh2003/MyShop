import React from "react";
import { products } from "../../data";
import Product from "../../components/Product";
import classNames from "classnames/bind";
import styles from "./ProductList.modelu.scss";
// import Product from './../../components/Product/index';
const cx = classNames.bind(styles);

const ProductList = () => {
  return (
    <>
      <h2>All Products</h2>
      <div className={cx("listProducts")}>
        {products.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
