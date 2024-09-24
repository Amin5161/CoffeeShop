import React from "react";

import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import { Outlet, Route, Routes } from "react-router-dom";

import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import UserProvider from "./components/Context/UserContext";
import Layout from "./components/Layout";
import HomeComponent from "./components/HomeComponent";
import { DarkModeProvider } from "./components/Context/DarkModeContext";
import Registration from "./pages/Registration";
<<<<<<< HEAD
import ProductDetail from './pages/ProductDetail'
import Slider from "./components/Slider";
import Cart from "./pages/Cart";
import { CartProvider } from "./components/Context/CartContext";
import SlideDetail from "./pages/SlideDetail";

export default function App() {
  return (
    <CartProvider>
      <UserProvider>
        <DarkModeProvider>
=======
import SlideDetails from "./pages/SlideDetails";
import Slider from "./components/Slider";

export default function App() {
  return (
    <UserProvider>
      <DarkModeProvider>
        <div className="dark:bg-zinc-800">
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
          <Routes>
            <Route index element={<HomeComponent />} />
            <Route path="/" element={<Layout />}>
              <Route path="contactus" element={<ContactUs />} />
              <Route path="aboutus" element={<About />} />
              <Route path="blog" element={<Blog />} />
              <Route path="shop" element={<Shop />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
              <Route path="/" element={<Slider />} />
<<<<<<< HEAD
              <Route path="/slide/:id" element={<SlideDetail />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </DarkModeProvider>
      </UserProvider>
    </CartProvider>
=======
              <Route path="/slide/:id" element={<SlideDetails />} />
            </Route>
          </Routes>
        </div>
      </DarkModeProvider>
    </UserProvider>
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
  );
}
