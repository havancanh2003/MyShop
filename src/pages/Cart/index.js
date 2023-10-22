import React from "react";
import classNames from "classnames/bind";
import style from "./Cart.module.scss";
const cx = classNames.bind(style);

const Cart = () => {
  return (
    <div className={cx("container_cart")}>
      <h2>/ Your Order</h2>
      <div className={cx("productsList")}>
        <div className={cx("detail_pro")}>
          <div className={cx("left")}>
            <div className={cx("img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/462/540/products/img-4779.jpg"
                alt=""
              />
            </div>
            <div className={cx("title")}>
              <h3>Mini Bag</h3>
              <span>This is minibag</span>
            </div>
          </div>
          <div className={cx("center")}>
            <i className="fa-solid fa-plus"></i>
            <span>1</span>
            <i className="fa-solid fa-minus"></i>
          </div>
          <div className={cx("right")}>
            <i className="fa-solid fa-xmark"></i>
            <span>355$</span>
          </div>
        </div>
        {/*  */}
        <div className={cx("detail_pro")}>
          <div className={cx("left")}>
            <div className={cx("img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/462/540/products/img-4779.jpg"
                alt=""
              />
            </div>
            <div className={cx("title")}>
              <h3>Mini Bag</h3>
              <span>This is minibag</span>
            </div>
          </div>
          <div className={cx("center")}>
            <i className="fa-solid fa-plus"></i>
            <span>1</span>
            <i className="fa-solid fa-minus"></i>
          </div>
          <div className={cx("right")}>
            <i className="fa-solid fa-xmark"></i>
            <span>355$</span>
          </div>
        </div>
        {/*  */}
        <div className={cx("detail_pro")}>
          <div className={cx("left")}>
            <div className={cx("img")}>
              <img
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/462/540/products/img-4779.jpg"
                alt=""
              />
            </div>
            <div className={cx("title")}>
              <h3>Mini Bag</h3>
              <span>This is minibag</span>
            </div>
          </div>
          <div className={cx("center")}>
            <i className="fa-solid fa-plus"></i>
            <span>1</span>
            <i className="fa-solid fa-minus"></i>
          </div>
          <div className={cx("right")}>
            <i className="fa-solid fa-xmark"></i>
            <span>355$</span>
          </div>
        </div>
      </div>

      <div className={cx("total")}>
        <span>Subtotal: 1000$</span>
        <button>PurChase</button>
      </div>
    </div>
  );
};

export default Cart;
