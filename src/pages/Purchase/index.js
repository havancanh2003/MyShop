import React from "react";
import { useContext } from "react";
import { Carts } from "../../Context";
import classNames from "classnames/bind";
import style from "./Puchase.module.scss";

const cx = classNames.bind(style);

const Puchase = () => {
  const { cart, total } = useContext(Carts);
  // const [done, showDone] = useState(false);
  console.log(cart);

  // const submit = () => {
  //   showDone(true);
  // };

  return (
    <>
      <div className={cx("row")}>
        <div className={cx("col-75")}>
          <div className={cx("container")}>
            <form>
              <div className={cx("row")}>
                <div className={cx("col-50")}>
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    {/* htmlFor="fname" */}
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    required
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                    required
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                  />

                  <div className={cx("row")}>
                    <div className={cx("col-50")}>
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                        required
                      />
                    </div>
                    <div className={cx("col-50")}>
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={cx("col-50")}>
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className={cx("icon-container")}>
                    <i
                      className="fa-brands fa-cc-visa"
                      style={{ color: "navy" }}
                    ></i>
                    <i
                      className="fa-brands fa-cc-amex"
                      style={{ color: "blue" }}
                    ></i>
                    <i
                      className="fa-brands fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                    required
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    required
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                    required
                  />

                  <div className={cx("row")}>
                    <div className={cx("col-50")}>
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                        required
                      />
                    </div>
                    <div className={cx("col-50")}>
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  onChange={() => {}}
                  type="checkbox"
                  checked="checked"
                  name="sameadr"
                />{" "}
                Shipping address same as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className={cx("btn")}
                // onClick={submit}
              />
            </form>

            <div className={cx("col-25")}>
              <div className={cx("container")}>
                <h4>
                  Cart
                  <span className={cx("price")} style={{ color: "black" }}>
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                </h4>
                {cart.map((resultFind) => (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0 1rem 0",
                      }}
                    >
                      <img
                        style={{
                          width: "60px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                        src={resultFind.src}
                        alt=""
                      />
                      <span style={{ marginLeft: "10px" }}>
                        {resultFind.name}
                      </span>{" "}
                    </div>
                    <div
                      style={{
                        width: "20%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span> {"[" + resultFind.quantity + "]"}</span>
                      <span>x</span>
                      <span className={cx("price")}>${resultFind.price}</span>
                    </div>
                  </p>
                ))}

                {/*  */}

                <hr />
                <p>
                  Total{" "}
                  <span className={cx("price")} style={{ color: "black" }}>
                    <b>{total}</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={cx("col-25")}>
          <div className={cx("container")}>
            <h4>
              Cart
              <span className={cx("price")} style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>
                <b>4</b>
              </span>
            </h4>
            <p>
              <a href="/#">Product 1</a>{" "}
              <span className={cx("price")}>$15</span>
            </p>
            <p>
              <a href="/#">Product 2</a> <span className={cx("price")}>$5</span>
            </p>
            <p>
              <a href="/#">Product 3</a> <span className={cx("price")}>$8</span>
            </p>
            <p>
              <a href="/#">Product 4</a> <span className={cx("price")}>$2</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className={cx("price")} style={{ color: "black" }}>
                <b>$30</b>
              </span>
            </p>
          </div>
        </div> */}
      </div>
      )
    </>
  );
};

export default Puchase;
