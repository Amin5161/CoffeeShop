import React, { useContext, useEffect, useMemo } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { CiLight } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "./Context/UserContext";
import { DarkModeContext } from "./Context/DarkModeContext";
import { useCart } from "./Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import logo from "/public/images/app-logo-type.svg";
import { SidebarContext } from "./Context/SidebarContext";
import { MobileCartContext } from "./Context/MobileCartContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const { cart, totalPrice, addToCart, decreaseQuantity, removeFromCart } =
    useCart();
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const { setIsSidebarOpen } = useContext(SidebarContext);
  const { setIsMobileCartOpen } = useContext(MobileCartContext);
  console.log(cart);

  return (
    <div className="flex items-center justify-between w-full mx-auto md:w-[90%] px-6 py-2 md:rounded-2xl md:top-4 fixed bg-white md:bg-zinc-950/60 dark:bg-zinc-950/60 backdrop-blur-sm z-40">
      {/* هدر دسکتاپ منو */}
      <nav className="hidden md:flex items-center gap-x-6">
        <div>
          <img src="/images/app-logo.png" alt="App Logo" />
        </div>
        <ul className="flex gap-x-4 lg:gap-x-6 tracking-tighter lg:tracking-normal md:text-white">
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ecc378" : "",
                };
              }}
              to="/"
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ecc378" : "",
                };
              }}
              to="/shop"
              className="group-hover:text-orange-500"
            >
              محصولات
            </NavLink>
            <ul
              className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-3 shadow-personal mt-4 w-[10rem] text-gray-700 bg-slate-50 p-4 dark:bg-gray-700 dark:text-white rounded-xl
             child-hover:text-orange-500 border-t-4 child:inline-block border-orange-300 transition-all delay-75"
            >
              <li>
                <Link>قهوه ویژه</Link>
              </li>
              <li>
                <Link>ویژه در سطح جهانی</Link>
              </li>
              <li>
                <Link>قهوه درجه یک</Link>
              </li>
              <li>
                <Link>ترکیبات تجاری</Link>
              </li>
              <li>
                <Link>کپیول قهوه</Link>
              </li>
              <li>
                <Link>قهوه زینو برزیلی</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ecc378" : "",
                };
              }}
              to="/blog"
            >
              بلاگ
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ecc378" : "",
                };
              }}
              to="/about"
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ecc378" : "",
                };
              }}
              to="/contact"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* هدر دسکتاپ چپ*/}
      <div className="hidden md:flex items-center gap-x-4">
        <div className="flex items-center gap-x-2  ">
          <div
            className="relative group flex items-center"
            aria-label="Shopping Cart"
          >
            {/* سبد خرید */}
            <div className="relative ">
              <IoCartOutline
                onClick={() => navigate("/cart")}
                className="text-3xl text-[#ecc378] cursor-pointer "
              />
              <div
                className="absolute left-0 opacity-0 invisible  group-hover:opacity-100 group-hover:visible space-y-3 shadow-personal mt-4 w-96 text-gray-700 bg-slate-50 p-4 dark:bg-gray-700 dark:text-white rounded-xl
              border-t-4 child:inline-block border-orange-300 transition-all delay-75"
              >
                <div className="flex items-center justify-center  w-full ">
                  <div className="flex items-start justify-between w-full pb-4">
                    <span className="text-[14px]">1مورد</span>
                    <div className="flex items-center gap-x-2 text-orange-300">
                      <Link className="tracking-tighter text-[14px]">
                        مشاهده سبد خرید
                      </Link>
                      <IoIosArrowBack />
                    </div>
                  </div>

                  <div className="overflow-y-scroll h-96 pl-2">
                    {cart.map((item) => (
                      <div
                        className="flex gap-x-2 dark:bg-zinc-500 mb-4 rounded-md overflow-hidden shadow-personal"
                        key={item.id}
                      >
                        <div className="w-40 h-auto">
                          <img className="w-full h-full" src={item.image} />
                        </div>
                        <div className="flex flex-col gap-y-2 p-2">
                          <h3>{item.name}</h3>

                          <p className="pb-2 text-green-400">
                            {item.price}
                            <span className="text-s pr-1">تومان</span>
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-x-2 ">
                              <button
                                onClick={() => addToCart(item)}
                                className="flex items-center justify-center text-lg bg-slate-300 text-black px-3 rounded-md"
                              >
                                +
                              </button>
                              <p className="flex items-center justify-center bg-slate-300 text-black px-3 rounded-md ">
                                {item.quantity}
                              </p>
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="flex items-center justify-center text-lg bg-slate-300 text-black px-3 rounded-md"
                              >
                                -
                              </button>
                            </div>
                            <MdDeleteOutline
                              className="text-red-500 text-lg cursor-pointer"
                              onClick={() => removeFromCart(item.id)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between p-2">
                    <div className="flex items-center gap-x-1 text-lg">
                      <p>قیمت کل : </p>
                      <p>
                        {" "}
                        {totalPrice}{" "}
                        <span className="text-sm text-green-400">تومان</span>{" "}
                      </p>
                    </div>
                    <button className="bg-orange-400 py-2 px-6 rounded-md text-lg">
                      پرداخت
                    </button>
                  </div>
                </div>
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-2 -left-2 bg-red-500 rounded-full px-2 text-white text-sm">
                  {totalItems}
                </span>
              )}
            </div>

            {/* دارک مود */}
            <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
              {darkMode !== undefined && darkMode ? (
                <span>
                  <CiLight className="text-2xl text-[#ecc378]" />
                </span>
              ) : (
                <span aria-label="Toggle Dark Mode">
                  <CiDark
                    aria-label="تغییر تم به دارک"
                    className="text-2xl text-[#ecc378]"
                  />
                </span>
              )}
            </div>
          </div>
          <div className=" items-center flex gap-x-2  border-r pr-3">
            <span aria-label="Login">
              <HiArrowRightOnRectangle className="text-2xl text-[#ecc378]" />
            </span>
            {user ? (
              <Link to='adminpanel'>
                <p className="text-white">{user.name}</p>
              </Link>
            ) : (
              <Link to="/login" className="text-[#ecc378] hidden lg:flex">
                ورود | ثبت نام
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* منو همبرگر موبایل */}
      <div className="flex md:hidden  h-8 items-center">
        <RxHamburgerMenu
          className="text-3xl text-zinc-700 dark:text-white cursor-pointer "
          onClick={() => {
            setIsSidebarOpen(true), setIsMobileCartOpen(false);
          }}
        />
      </div>

      {/* لگو */}
      <div className="md:hidden h-8 w-[100px]">
        <img src={logo} alt="logo type" className="h-full w-full" />
      </div>

      {/* سبد خرید موبایل */}
      <div className="relative group md:hidden h-8" aria-label="Shopping Cart">
        <IoCartOutline
          onClick={() => {
            setIsMobileCartOpen(true), setIsSidebarOpen(false);
          }}
          className="md:hidden text-3xl text-zinc-700 dark:text-white md:text-[#ecc378] cursor-pointer"
        />
        {totalItems > 0 && (
          <span className="absolute -top-2 -left-2 bg-red-500 rounded-full px-2 text-white text-sm">
            {totalItems}
          </span>
        )}
      </div>
    </div>
  );
}
