<<<<<<< HEAD
import React, { useContext, useState } from "react";
=======
import React, { useContext,useState } from "react";
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileCart from "./MobileCart";
import Footer from "./Footer";
import Products from "./Products";
import CategoryBanner from "./CategoryBanner";
import ProductsCategory from "./ProductsCategory";
import CoffeeClub from "./CoffeeClub";
import RedingMaterial from "./RedingMaterial";
import HomeSection from "./HomeSection";
import Slider from "./Slider";
<<<<<<< HEAD

function HomeComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  return (
    <div className="font-vazir bg-slate-50 dark:bg-zinc-800 flex flex-col min-h-screen">
      <div className="flex-1">
        <header className="max-w-7xl mx-auto flex justify-center">
          <Header
            toggleSidebar={toggleSidebar}
=======
import { DarkModeContext, DarkModeProvider } from "./Context/DarkModeContext";

function HomeComponent() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  return (
      <div className="font-vazir bg-slate-50 dark:bg-zinc-800 min-h-screen">
        <header className="max-w-7xl mx-auto flex justify-center">
          <Header
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
          <Sidebar
<<<<<<< HEAD
=======
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <MobileCart
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
        </header>
<<<<<<< HEAD

        <main className="mt-20 md:mt-0 z-50 ">
=======
        <main className="flex-1 mt-20 md:mt-0 z-50 ">
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
          <HomeSection />

          <Products />

          <CategoryBanner />

          <ProductsCategory />

          <Slider />

          <CoffeeClub />

          <RedingMaterial />
        </main>
<<<<<<< HEAD
      </div>

      <Footer />
    </div>
=======

        <Footer />
      </div>
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
  );
}

export default HomeComponent;
