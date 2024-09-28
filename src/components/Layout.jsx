import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MobileCart from "./MobileCart";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-full ">
      <Sidebar />
      <MobileCart/>
      <header className="max-w-7xl mx-auto flex justify-center">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
