import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MobileCart from "./MobileCart";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-full ">
      <MobileCart />
      <header className="max-w-7xl mx-auto flex justify-center">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
        <Sidebar/>
      </main>
      <Footer />
    </div>
  );
}
