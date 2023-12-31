import Header from "./Header";
import Footer from "./Footer";
function DefaultLayout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
