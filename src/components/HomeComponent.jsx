import React, { useContext, useState } from "react";
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
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <MobileCart
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
        </header>

        <main className="mt-20 md:mt-0 z-50 ">
          <HomeSection />

          <Products />

          <CategoryBanner />

          <ProductsCategory />

          <Slider />

          <CoffeeClub />

          <RedingMaterial />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default HomeComponent;
