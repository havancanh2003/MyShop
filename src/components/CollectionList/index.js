import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Product from "./../Product";
import { products } from "../../data";
import classNames from "classnames/bind";
import styles from "./CollectionList.module.scss";
// import ProductList from './../../pages/ProductList/index';

const cx = classNames.bind(styles);

const CollectionList = () => {
  const params = useParams();
  console.log(params.id);
  const newArray = products.filter((object) => {
    return object.foreign_key === params.id;
  });
  console.log(newArray);
  return (
    <div className={cx("list")}>
      {newArray.map((product) => (
        <Link
          style={{ textDecoration: "none" }}
          to={"/productList/detail/" + product.id}
        >
          <Product key={product.id} item={product} />
        </Link>
      ))}
    </div>
  );
};

export default CollectionList;
