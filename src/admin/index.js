import * as React from "react";
import { products } from "../data";
import classNames from "classnames/bind";
import style from "./admin.module.scss";
const cx = classNames.bind(style);
function Admin() {
  return (
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
        {products.map((row) => {
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
                <button>Delete</button>
                <button>Update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Admin;
