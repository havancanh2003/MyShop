import React from "react";
import classNames from "classnames/bind";
import style from "./BlogItem.module.scss";
// import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const BlogItem = (props) => {
  //   console.log(props);
  const { title, src, link, date } = props.blog;
  return (
    <div className={cx("boxItem")}>
      <a href={link}>
        <img src={src} alt="" />
        <h3>{title}</h3>
        <span style={{ textDecoration: "none" }}>{date}</span>
      </a>
    </div>
  );
};

export default BlogItem;
