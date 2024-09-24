<<<<<<< HEAD
import React, { useContext, useEffect, useMemo } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
=======
import React, { useContext, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { CiDark } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { CiLight } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { UserContext } from "./Context/UserContext";
<<<<<<< HEAD
import { DarkModeContext } from "./Context/DarkModeContext";
import { useCart } from "./Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import logo from "/public/images/app-logo-type.svg";

export default function Header({
  isMobileCartOpen,
  setIsMobileCartOpen,
  toggleSidebar,
}) {
  const { user } = useContext(UserContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const { cart, totalPrice, addToCart, decreaseQuantity, removeFromCart } =
    useCart();
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  console.log(cart);
  console.log({
    isMobileCartOpen,
    setIsMobileCartOpen,
  });
=======
import {DarkModeContext} from "./Context/DarkModeContext";
export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  isMobileCartOpen,
  setIsMobileCartOpen,
}) {
  const { user } = useContext(UserContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
  return (
    <div className="flex items-center justify-between w-full mx-auto md:w-[90%] px-6 py-2 md:rounded-2xl md:top-4 fixed bg-white md:bg-zinc-950/60 dark:bg-zinc-950/60 backdrop-blur-sm z-50">
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
              to="/aboutus"
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
              to="/contactus"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* هدر دسکتاپ چپ*/}

      <div className="hidden md:flex items-center gap-x-4">
        <div className="flex items-center gap-x-2  ">
          <div className="relative group " aria-label="Shopping Cart">
<<<<<<< HEAD
            <div className="relative">
              <IoCartOutline
                className="text-3xl text-[#ecc378] cursor-pointer "
                onClick={() => navigate("/cart")}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -left-2 bg-red-500 rounded-full px-2 text-white text-sm">
                  {totalItems}
                </span>
              )}
            </div>
            <div
              className="absolute left-0 opacity-0 invisible  group-hover:opacity-100 group-hover:visible space-y-3 shadow-personal mt-4 w-[20rem] text-gray-700 bg-slate-50 p-4 dark:bg-gray-700 dark:text-white rounded-xl
            border-t-4 child:inline-block border-orange-300 transition-all delay-75"
            >
              <div className="flex items-center justify-center  w-full ">
                <div className="flex items-center justify-between ">
                  <div className="flex text-left gap-x-2 text-orange-300">
=======
            <IoCartOutline className="text-3xl text-[#ecc378] cursor-pointer " />
            <div
              className="absolute left-0 opacity-0 invisible  group-hover:opacity-100 group-hover:visible space-y-3 shadow-personal mt-4 w-[20rem] text-gray-700 bg-slate-50 p-4 dark:bg-gray-700 dark:text-white rounded-xl
              border-t-4 child:inline-block border-orange-300 transition-all delay-75"
            >
              <div className="flex items-center justify-center  w-full ">
                <div className="flex items-center justify-between ">
                  <span className="text-[14px]">1مورد</span>
                  <div className="flex items-center gap-x-2 text-orange-300">
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
                    <Link className="tracking-tighter text-[14px]">
                      مشاهده سبد خرید
                    </Link>
                    <IoIosArrowBack />
                  </div>
                </div>
<<<<<<< HEAD

                <ul className="overflow-y-scroll max-h-80 px-2">
                  {cart.map((item) => (
                    <li key={item.id} className=" mt-4 pb-2 border-b-2">
                      <div className="flex gap-x-2">
                        <img
                          src={item.image}
                          alt=""
                          className="w-20 h-20 object-contain rounded-md"
                        />
                        <h2 className="font-vazir ">{item.name}</h2>
                        <div className="flex flex-col gap-y-1">
                          <button
                            className="text-white  text-lg bg-slate-400 rounded-md"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </button>
                          <p className="px-2  text-white  bg-slate-400 rounded-md">
                            {item.quantity}
                          </p>
                          <button
                            className="px-2 text-white text-xl bg-slate-400 rounded-md"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                      <div className="w-full flex items-center pt-4">
                        <div className="flex gap-x-2">
                          <p className="font-vazirMedium"> {item.price}</p>
                          <span className="text-xs">تومان</span>
                        </div>
                        <div className="w-full flex justify-end">
                          <MdDeleteOutline
                            className="text-xl cursor-pointer text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
=======
                <div className="flex mt-4 ">
                  <img
                    className="w-24 h-30  "
                    src="/public/images/پودر-قهوه-آماده-2-1-سوکافه.jpg"
                    alt=""
                  />
                  <div className="flex flex-col mr-4 max-w-44">
                    <h4 className=" font-vazirBold dark:text-gray-100 mb-6 text-base tracking-wider line-clamp-2  ">
                      قهوه اسپرسو بن مانو 250 گرمی
                    </h4>
                    <div>
                      <p className="text-green-400 text-[10px] tracking-wider">
                        17500 تومان تخفیف
                      </p>
                      <div className="mt-2 ">
                        <span className="font-semibold text-[14px] tracking-wider">
                          196000
                        </span>
                        تومان
                      </div>
                    </div>
                  </div>
                </div>
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
                <div className="flex items-center justify-between mt-2 border-t border-gray-200 dark:border-gray-600 pt-2 ">
                  <div>
                    <span className="opacity-50 text-[10px]">
                      مبلغ قابل پرداخت
                    </span>
                    <p className="font-semibold text-sm tracking-wider">
<<<<<<< HEAD
                      {totalPrice} تومان
                    </p>
                  </div>
                  <Link
                    to="/cart"
                    className="bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700"
                  >
                    ثبت سفارش
                  </Link>
=======
                      350000 تومان
                    </p>
                  </div>
                  <button className="bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700">
                    ثبت سفارش
                  </button>
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
            {darkMode !== undefined && darkMode ? (
              <span>
                <CiLight className="text-2xl text-[#ecc378]" />
              </span>
            ) : (
              <span aria-label="Toggle Dark Mode">
<<<<<<< HEAD
                <CiDark
                  aria-label="تغییر تم به دارک"
                  className="text-2xl text-[#ecc378]"
                />
=======
                <CiDark className="text-2xl text-[#ecc378]" />
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
              </span>
            )}
          </div>
        </div>
        <div className=" items-center flex gap-x-2  border-r pr-3">
          <span aria-label="Login">
            <HiArrowRightOnRectangle className="text-2xl text-[#ecc378]" />
          </span>
          {user ? (
            <p className="text-white">{user.name}</p>
          ) : (
            <Link to="/login" className="text-[#ecc378] hidden lg:flex">
              ورود | ثبت نام
            </Link>
          )}
        </div>
      </div>

      {/* منو همبرگر موبایل */}

      <div className="flex md:hidden  h-8 items-center">
        <RxHamburgerMenu
          className="text-3xl text-zinc-700 dark:text-white cursor-pointer "
<<<<<<< HEAD
          onClick={toggleSidebar}
=======
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
        />
      </div>

      {/* لگو */}

      <div className="md:hidden h-8 w-[100px]">
<<<<<<< HEAD
        <img src={logo} alt="logo type" className="h-full w-full" />
=======
        <img
          src="/public/images/app-logo-type.svg"
          alt="logo type"
          className="h-full w-full"
        />
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
      </div>

      {/* سبد خرید موبایل */}

      <div className="relative group md:hidden h-8" aria-label="Shopping Cart">
        <IoCartOutline
<<<<<<< HEAD
          onClick={() => navigate("/cart")}
          className="md:hidden text-3xl text-zinc-700 dark:text-white md:text-[#ecc378] cursor-pointer"
        />
        {totalItems > 0 && (
          <span className="absolute -top-2 -left-2 bg-red-500 rounded-full px-2 text-white text-sm">
            {totalItems}
          </span>
        )}
=======
          className="md:hidden text-3xl text-zinc-700 dark:text-white md:text-[#ecc378] cursor-pointer"
          onClick={() => setIsMobileCartOpen(!isMobileCartOpen)}
        />
>>>>>>> 61573aeb594630db55b9a0520e56d0962ac9b03a
      </div>
    </div>
  );
}
