import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters } from "./routers";
import DefaultLayout from "./Layout/DefaultLayout";
import { Carts } from "./Context";
import { useState } from "react";
import { products } from "./data";
function App() {
  const [cart, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [listProducts, setListProducts] = useState(products);
  const [cartNumber, setCartNumber] = useState("");
  console.log(listProducts);
  return (
    <Carts.Provider
      value={{
        listProducts,
        setListProducts,
        cart,
        setCarts,
        total,
        setTotal,
        cartNumber,
        setCartNumber,
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            {publicRouters.map((route, index) => {
              const Layout = route.layout || DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </Carts.Provider>
  );
}

export default App;
