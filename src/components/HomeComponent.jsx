import React, { useContext,useState } from "react";
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
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
          <Sidebar
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <MobileCart
            isMobileCartOpen={isMobileCartOpen}
            setIsMobileCartOpen={setIsMobileCartOpen}
          />
        </header>
        <main className="flex-1 mt-20 md:mt-0 z-50 ">
          <HomeSection />

          <Products />

          <CategoryBanner />

          <ProductsCategory />

          <Slider />

          <CoffeeClub />

          <RedingMaterial />
        </main>

        <Footer />
      </div>
  );
}

export default HomeComponent;
