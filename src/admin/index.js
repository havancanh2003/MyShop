import * as React from "react";
import classNames from "classnames/bind";
import style from "./admin.module.scss";
import { useContext, useState } from "react";
import { Carts } from "../Context";
const cx = classNames.bind(style);
function Admin() {
  //const [updateProduct, setUpdateProduct] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const [overlay, setOverlay] = useState(false);
  const { listProducts, setListProducts } = useContext(Carts);
  const hanleRemoveProduct = (id) => {
    const templeListProducts = [...listProducts];
    const removeIndex = templeListProducts.findIndex((item) => item.id === id);
    templeListProducts.splice(removeIndex, 1);
    setListProducts(templeListProducts);
  };

  const hanleUpdateProduct = (id) => {
    setOverlay(true);
    const list = [...listProducts];
    const nextShapes = list.map((shape) => {
      if (shape.id === id) {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          name: (shape.name = { name }),
        };
      }
    });

    setListProducts(nextShapes);
  };
  const submit = () => {};

  return (
    <>
      {overlay ? (
        <div className={cx("overlay")}>
          <div className={cx("boxUpdatepro")}>
            <div className={cx("inputChange")}>
              <input
                style={{ padding: "0" }}
                type="file"
                placeholder="image"
                onChange={(e) => {
                  // console.log(URL.createObjectURL(e.target.files[0]));
                  setImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="number"
                min="1"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className={cx("showChange")}>
              <div className={cx("image")}>
                <img src={image} alt="" />
              </div>
              <h3>{name}</h3>
              {name ? <span>this is {name}</span> : <></>}
              {price ? <span>${price}</span> : <></>}
            </div>
            <button onClick={submit}>Update</button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <table className={cx("styled-table")}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>IMAGE</th>
            <th style={{ textAlign: "center" }}>FIX</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    src={row.src}
                    alt=""
                  />
                </td>
                <td className={cx("btn_admin")}>
                  <button onClick={(e) => hanleRemoveProduct(row.id)}>
                    Delete
                  </button>
                  <button onClick={(e) => hanleUpdateProduct(row.id)}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
