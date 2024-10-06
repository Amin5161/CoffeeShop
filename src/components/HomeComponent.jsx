import { useContext, useEffect, useState } from "react";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { UserContext } from "./Context/UserContext";

function HomeComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const handleCartClick = () => {
    console.log("تغییر وضعیت سبد خرید");
    setIsMobileCartOpen(!isMobileCartOpen);
  };

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // کاربر وارد شده است
        setUser(user);
      } else {
        // کاربر وارد نشده است
        setUser(null);
      }
    });

    // پاکسازی listener
    return () => unsubscribe();
  }, [setUser]);

  return (
    <div className="font-vazir bg-slate-50 dark:bg-zinc-800 flex flex-col min-h-screen">
      <div className="flex-1">
        <header className="max-w-7xl mx-auto flex justify-center">
          <Header
            toggleSidebar={toggleSidebar}
            handleCartClick={handleCartClick}
          />
          <Sidebar />
          <MobileCart
            isMobileCartOpen={isMobileCartOpen}
            handleCartClick={handleCartClick}
          />
        </header>

        <main className="mt-12 sm:mt-0 z-50 ">
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
