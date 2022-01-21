import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
