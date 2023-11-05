import React from "react";
import { blogData } from "../../data";
import BlogItem from "../../components/BlogItem";
import classNames from "classnames/bind";
import style from "./Blog.module.scss";

const cx = classNames.bind(style);
const Blog = () => {
  return (
    <div className={cx("contain")}>
      <h1 className={cx("h1")}>BLOG</h1>
      <div className={cx("blog")}>
        {blogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
