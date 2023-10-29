import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import DetaiProduct from "../components/DetailProduct";
import ProductList from "../pages/ProductList";
import Blog from "../pages/Blog";
import CollectionList from "../components/CollectionItem";
export const publicRouters = [
  { path: "/", component: Home },
  { path: "/collection/:id/", component: CollectionList },
  { path: "/contact", component: Contact },
  { path: "/cart", component: Cart },
  { path: "/blog", component: Blog },
  { path: "/productList", component: ProductList },
  { path: "/productList/detail/:id/", component: DetaiProduct },
];
