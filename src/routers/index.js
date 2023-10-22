import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import DetaiProduct from "../components/DetailProduct";

export const publicRouters = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/detail/:id/", component: DetaiProduct },
];
