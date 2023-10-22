import React from "react";
import { useParams } from "react-router";
import { products } from "../../data";

import classNames from "classnames/bind";
import style from "./DetailProduct.module.scss";
const cx = classNames.bind(style);

//add to cart
const headleAddtoCart = () => {};

// main
const DetaiProduct = () => {
  const params = useParams();
  const resultFind = products.find((pro) => pro.id === params.id);
  console.log(resultFind);
  return (
    <div className={cx("contain_pro")}>
      <div className={cx("img_pro")}>
        <img src={resultFind.src} alt="" />
      </div>
      <div className={cx("about_pro")}>
        <h1>{resultFind.name}</h1>
        <h2>{resultFind.price}</h2>
        <span>this is {resultFind.name}</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className={cx("btn")}>
          <button>Buy Now</button>
          <button onClick={headleAddtoCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetaiProduct;
