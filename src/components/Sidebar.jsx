import React, { useContext, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import { PiBagFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { DarkModeContext } from "./Context/DarkModeContext";
import { SidebarContext } from "./Context/SidebarContext";

export default function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  console.log(setIsSidebarOpen, isSidebarOpen);
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-white dark:bg-zinc-700 z-50 p-4 shadow-personal transition-transform duration-300 ease-in-out transform ${
        isSidebarOpen ? "translate-x-0 w-3/4 sm:w-1/2" : "translate-x-full"
      } md:w-0 md:h-0 md:overflow-hidden`}
    >
      {/* هدر */}

      <div className="flex items-center justify-between border-b pb-4">
        <img
          src="/public/images/app-logo.png"
          alt="app logo"
          className="w-8 xs:w-16"
        />
        <img
          src="/public/images/app-logo-type.svg"
          alt="logo type"
          className="w-16 xs:w-24"
        />
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={() => {
            console.log("Sidebar Open Status Before:", isSidebarOpen);
            setIsSidebarOpen(!isSidebarOpen);
            console.log("Sidebar Open Status After:", !isSidebarOpen);
          }}
        />
      </div>

      {/* منو */}

      <ul
        className="child-hover:bg-orange-50  flex flex-col justify-between
       gap-x-4 lg:gap-x-6 tracking-tighter lg:tracking-normal md:text-white py-2 cursor-pointer "
      >
        <li className="flex gap-x-2 mb-4  hover:p-1 hover:rounded-md">
          <IoHomeOutline />
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
        <li className="relative group mb-4 hover:p-1 hover:rounded-md">
          <div
            className="flex gap-x-2 justify-between"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            <div className="flex gap-x-2">
              <BsHandbag />
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#ecc378" : "",
                  };
                }}
                to="/shop"
                className="group-hover:text-orange-400 "
              >
                فروشگاه
              </NavLink>
            </div>

            <IoIosArrowUp
              className={`transition delay-200 ${
                isSubMenuOpen ? "transform rotate-180 text-orange-400" : ""
              }`}
            />
          </div>

          {/* زیر منو فروشگاه */}

          <div
            id="store__subMenu"
            className={`transition-all delay-75 ${
              isSubMenuOpen ? "flex items-center justify-between" : "hidden"
            }`}
          >
            <ul
              className="space-y-3 pt-2  w-[10rem] text-gray-700 pr-6 dark:text-black 
             child-hover:text-orange-500 text-sm cursor-pointer child:inline-block  "
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
          </div>
        </li>
        <li className="flex gap-x-2 mb-4 hover:p-1 hover:rounded-md">
          <IoChatboxEllipsesOutline />
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#ecc378" : "",
              };
            }}
            to="/dictionary"
          >
            دیکشنری
          </NavLink>
        </li>
        <li className="flex gap-x-2 mb-4 hover:p-1 hover:rounded-md">
          <IoDocumentTextOutline />
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
        <li className="flex gap-x-2 mb-4 hover:p-1 hover:rounded-md">
          <PiBagFill />
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
        <li className="flex gap-x-2 mb-4 hover:p-1 hover:rounded-md ">
          <VscCallOutgoing />
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

      <div className="flex flex-col gap-4 border-t-2 pt-4">
        {/* سبد خرید */}

        <div className="relative group" aria-label="Shopping Cart">
          <div className="flex items-center gap-x-2">
            <IoCartOutline className="text-3xl text-orange-400 cursor-pointer " />
            <span className="text-orange-400">سبد خرید</span>
          </div>
          <div
            className="absolute left-0 opacity-0 invisible  group-hover:opacity-100 group-hover:visible space-y-3 shadow-personal  w-[20rem] text-gray-700 bg-slate-50 p-4 dark:bg-gray-700 dark:text-white rounded-xl
              border-t-4 child:inline-block border-orange-300 transition-all delay-75"
          >
            <div className="flex items-center justify-center  w-full ">
              <div className="flex items-center justify-between ">
                <span className="text-[14px]">1مورد</span>
                <div className="flex items-center gap-x-2 text-orange-300">
                  <Link className="tracking-tighter text-[14px]">
                    مشاهده سبد خرید
                  </Link>
                  <IoIosArrowBack />
                </div>
              </div>
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
              <div className="flex items-center justify-between mt-2 border-t border-gray-200 dark:border-gray-600 pt-2 ">
                <div>
                  <span className="opacity-50 text-[10px]">
                    مبلغ قابل پرداخت
                  </span>
                  <p className="font-semibold text-sm tracking-wider">
                    350000 تومان
                  </p>
                </div>
                <button className="bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700">
                  ثبت سفارش
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* دارک مود */}

        <div className="cursor-pointer" onClick={() => toggleDarkMode()}>
          {darkMode !== undefined && darkMode ? (
            <div className="flex items-center gap-x-4">
              <CiLight className="text-2xl text-orange-400" />
              <span className="text-orange-400">تم لایت</span>
            </div>
          ) : (
            <div className="flex items-center gap-x-4">
              <CiDark className="text-2xl text-orange-400" />
              <span className="text-orange-400">تم دارک</span>
            </div>
          )}
        </div>

        {/* ورود و ثبت نام  */}
        <div className=" items-center flex gap-x-4 ">
          <span aria-label="Login">
            <HiArrowRightOnRectangle className="text-2xl text-orange-400" />
          </span>
          <Link to="/login" className="text-orange-400 flex">
            ورود | ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}
