import React, { useState } from "react";
import { useParams } from "react-router";
import { products } from "../../data";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./DetailProduct.module.scss";
import { Carts } from "../../Context";
import { useContext } from "react";
// import BuyNow from './../../pages/BuyNow/index';
const cx = classNames.bind(style);
//add to cart

// main
const DetaiProduct = () => {
  const { cart, setCarts, setTotal, setCartNumber } = useContext(Carts);
  // const [showDone, setShowDone] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const params = useParams();
  const resultFind = products.find((pro) => pro.id === params.id);
  const temp_pro = {
    name: resultFind.name,
    id: resultFind.id,
    price: resultFind.price,
    src: resultFind.src,
    quantity: 1,
  };
  const headleAddtoCart = () => {
    const temp = cart.find((pro) => pro.id === temp_pro.id);
    if (temp) {
      let array2 = [...cart];
      array2.find((a) => a.id === temp.id).quantity += temp_pro.quantity;
      setCarts(array2);
    } else {
      setCarts((item) => [...item, temp_pro]);
    }
    setOverlay(true);
    setTotal((total) => total + parseInt(temp_pro.price) * temp_pro.quantity);
    setTimeout(() => {
      setOverlay(false);
    }, 1000);
  };
  const headleBuyNow = () => {
    headleAddtoCart();
  };
  setCartNumber(cart.length);
  return (
    <>
      {overlay ? (
        <div className={cx("overlay")}>
          <h1>Add To Cart</h1>
        </div>
      ) : (
        <></>
      )}
      <div className={cx("contain_pro")}>
        <div className={cx("img_pro")}>
          <img src={resultFind.src} alt="" />
        </div>
        <div className={cx("about_pro")}>
          <h1>{resultFind.name}</h1>
          <h3>This is {resultFind.name}</h3>
          <h2 className={cx("price")}>{resultFind.price}$</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
          <div className={cx("btn")}>
            <Link to={"/buynow/" + temp_pro.id}>
              <button onClick={headleBuyNow}>Buy Now</button>
            </Link>
            <button
              id={cx("addcart")}
              className={cx("addtocart")}
              onClick={headleAddtoCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetaiProduct;
