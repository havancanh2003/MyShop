import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./CollectionItem.module.scss";

const cx = classNames.bind(styles);

const CollectionItem = (props) => {
  const { id, src, name } = props.item;
  console.log(id);
  return (
    <Link to={"collection/" + id}>
      <div className={cx("collections")}>
        <img src={src} alt="" />
        <div className={cx("about_collection")}>
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default CollectionItem;
