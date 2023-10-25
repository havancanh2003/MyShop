import classNames from "classnames/bind";
import style from "./Contact.module.scss";
import { Link } from "react-router-dom";
// import Contact from './index';
import map from "./map.jpg";

const cx = classNames.bind(style);

function Contact() {
  return (
    <div className={cx("contact_container")}>
      <div className={cx("form_contact")}>
        <form method="post" action="">
          <h2>Contact Us</h2>

          <div className={cx("input")}>
            <label>FULL NAME</label>

            <input type="text" name="name" id="name" placeholder="Name" />
          </div>

          <div className={cx("input")}>
            <label for="email">EMAIL ADDRESS</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className={cx("input")}>
            <label for="subject">SUBJECT</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>

          <div className={cx("input")}>
            <label for="#">MESSAGE</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" value="Send Message" className="">
            Send Message
          </button>
        </form>

        <div className={cx("img")}>
          <img src={map} alt="" />
        </div>
      </div>

      <div className={cx("contact_us")}>
        <div className={cx("adress")}>
          <i
            style={{ width: "76px", height: "76px" }}
            className="fa-solid fa-location-pin"
          ></i>
          <span>Address: 198 West 21th Street</span>
        </div>

        {/*  */}
        <div className={cx("adress")}>
          <i class="fa-solid fa-phone"></i>
          <span>
            Phone <Link to="">+ 088889999</Link>
          </span>
        </div>

        <div className={cx("adress")}>
          <i class="fa-solid fa-paper-plane"></i>
          <span>
            Email: <Link to="">info@yoursite.com</Link>
          </span>
        </div>

        <div className={cx("adress")}>
          <i class="fa-solid fa-earth-europe"></i>
          <span>
            Website <Link to="">yoursite.com</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
