import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import DetaiProduct from "../components/DetailProduct";
import ProductList from "../pages/ProductList";
import Blog from "../pages/Blog";
import CollectionList from "../components/CollectionList";
import BuyNow from "../pages/BuyNow";
import Admin from "../admin";
import Puchase from "./../pages/Purchase";

export const publicRouters = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/collection/:id/", component: CollectionList },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/blog", component: Blog },
  { path: "/puchase", component: Puchase },
  { path: "/buynow/:pro", component: BuyNow },
  { path: "/productList", component: ProductList },
  { path: "/productList/detail/:id/", component: DetaiProduct },
];
