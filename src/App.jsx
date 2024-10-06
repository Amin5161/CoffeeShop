import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import { UserProvider } from "./components/Context/UserContext";
import Layout from "./components/Layout";
import HomeComponent from "./components/HomeComponent";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import Registration from "./pages/Registration";
import ProductDetail from "./pages/ProductDetail";
import Slider from "./components/Slider";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/Context/CartContext";
import SlideDetail from "./pages/SlideDetail";
import { SidebarProvider } from "./components/Context/SidebarContext";
import { MobileCartProvider } from "./components/Context/MobileCartContext";
import AdminPanel from "./pages/AdminPanel";
import { SearchProvider } from "./components/Context/SearchContext";
import { ProductsProvider } from "./components/Context/ProductsContext";

export default function App() {
  return (
    <UserProvider>
      <ProductsProvider>
        <SearchProvider>
          <MobileCartProvider>
            <CartProvider>
              <DarkModeProvider>
                <SidebarProvider>
                  <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="/" element={<Layout />}>
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="login" element={<Login />} />
                      <Route path="registration" element={<Registration />} />
                      <Route path="/" element={<Slider />} />
                      <Route path="/slide/:id" element={<SlideDetail />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="cart" element={<Cart />} />
                      <Route path="adminpanel" element={<AdminPanel />} />
                    </Route>
                  </Routes>
                </SidebarProvider>
              </DarkModeProvider>
            </CartProvider>
          </MobileCartProvider>
        </SearchProvider>
      </ProductsProvider>
    </UserProvider>
  );
}
