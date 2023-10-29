import { collections } from "../../data";
import CollectionItem from "../CollectionItem";
import classNames from "classnames/bind";
import styles from "./Container.module.scss";

const cx = classNames.bind(styles);
function Container() {
  return (
    <div>
      <div className={cx("title")}>
        <span>FASHION</span>
        <span>TRAVEL</span>
        <span>EVERY DAY</span>
      </div>
      <div className={cx("listCollection")}>
        {collections.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Container;
