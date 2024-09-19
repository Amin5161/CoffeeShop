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

export default function Sidebar({ setIsSidebarOpen, isSidebarOpen }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
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
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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

        <Link to="/cart" className="flex items-center gap-x-2">
          <IoCartOutline className="text-3xl text-orange-400 cursor-pointer " />
          <span className="text-orange-400">سبد خرید</span>
        </Link>

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
