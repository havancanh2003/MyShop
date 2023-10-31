import React, { useState } from "react";
import { Carts } from "../../Context";
import { useContext } from "react";
import classNames from "classnames/bind";
import style from "./Cart.module.scss";

const cx = classNames.bind(style);

const Cart = () => {
  const { cart, total, setTotal, setCarts } = useContext(Carts);
  const [done, setDone] = useState(false);
  console.log(cart);
  const purChase = () => {
    setTotal(0);
    setCarts([]);
    setDone(true);
  };

  const headlePlus = (id) => {
    // let temp_cart = [...cart];
    const resultFind = cart.find((pro) => pro.id === id);
    if (resultFind) {
      let array2 = [...cart];
      array2.find((a) => a.id === resultFind.id).quantity += 1;
      setTotal((total) => total + parseInt(resultFind.price));
      setCarts(array2);
    }
  };

  const headleMinus = (id) => {
    const resultFind = cart.find((pro) => pro.id === id);
    if (resultFind && resultFind.quantity > 1) {
      let array2 = [...cart];
      array2.find((a) => a.id === resultFind.id).quantity -= 1;
      setCarts(array2);
      setTotal((total) => total - parseInt(resultFind.price));
    }
  };

  const headleRemove = (id) => {
    let temp_cart = [...cart];
    const resultFind = temp_cart.find((pro) => pro.id === id);
    console.log(resultFind);
    setTotal(
      (total) => total - parseInt(resultFind.price) * resultFind.quantity
    );
    const removeIndex = temp_cart.findIndex((item) => item.id === id);
    temp_cart.splice(removeIndex, 1);
    setCarts(temp_cart);
  };

  return (
    <div className={cx("container_cart")}>
      <h2>/ Your Order</h2>

      <div className={cx("productsList")}>
        {cart.map((products) => (
          <div key={products.id} className={cx("detail_pro")}>
            <div className={cx("left")}>
              <div className={cx("img")}>
                <img src={products.src} alt="" />
              </div>
              <div className={cx("title")}>
                <h3>{products.name}</h3>
                <span>This is {products.name}</span>
              </div>
            </div>
            <div className={cx("center")}>
              <i
                onClick={(e) => headlePlus(products.id)}
                className="fa-solid fa-plus"
              ></i>
              <span>{products.quantity}</span>
              <i
                onClick={(e) => headleMinus(products.id)}
                className="fa-solid fa-minus"
              ></i>
            </div>
            <div className={cx("right")}>
              <span>{products.price}$</span>
              <i
                className="fa-solid fa-xmark"
                onClick={(e) => headleRemove(products.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
      {done ? (
        <div className={cx("done")}>
          <h1>Thank You</h1>
        </div>
      ) : (
        <></>
      )}
      <div className={cx("total")}>
        <span>Subtotal: {total}$</span>
        <button onClick={purChase}>PurChase</button>
      </div>
    </div>
  );
};

export default Cart;
