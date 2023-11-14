import Banner from "../../components/Banner";
import Container from "../../components/Container";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("container")}>
      <div>
        <Banner />
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
};

export default Home;
