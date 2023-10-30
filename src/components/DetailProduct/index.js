import React, { useState } from "react";
import { useParams } from "react-router";
import { products } from "../../data";

import classNames from "classnames/bind";
import style from "./DetailProduct.module.scss";
import { Carts } from "../../Context";
import { useContext } from "react";
const cx = classNames.bind(style);
//add to cart

// main
const DetaiProduct = () => {
  const { cart, setCarts, setTotal } = useContext(Carts);
  const [showDone, setShowDone] = useState(false);
  //const [overlay, setOverlay] = useState(false);
  const params = useParams();
  // console.log(params);
  const resultFind = products.find((pro) => pro.id === params.id);
  const headleAddtoCart = () => {
    const temp_pro = {
      name: resultFind.name,
      id: resultFind.id,
      price: resultFind.price,
      src: resultFind.src,
      quantity: 1,
    };
    const temp = cart.find((pro) => pro.id === temp_pro.id);
    if (temp) {
      let array2 = [...cart];
      array2.find((a) => a.id === temp.id).quantity += temp_pro.quantity;
      setCarts(array2);
    } else {
      setCarts((item) => [...item, temp_pro]);
    }

    setTotal((total) => total + parseInt(temp_pro.price) * temp_pro.quantity);
    setShowDone(true);
  };
  return (
    <>
      <div className={cx("contain_pro")}>
        <div className={cx("img_pro")}>
          <img src={resultFind.src} alt="" />
        </div>
        <div className={cx("about_pro")}>
          <h1>{resultFind.name}</h1>
          <h2>{resultFind.price}$</h2>
          <span>this is {resultFind.name}</span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <div className={cx("btn")}>
            <button>Buy Now</button>
            <button onClick={headleAddtoCart}>Add to cart</button>
          </div>
          {/* {overlay ? <div className={cx("overlay")}></div> : <></>} */}
          {showDone ? (
            <div className={cx("showDone")}>
              <h2>Add To Cart</h2>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default DetaiProduct;
