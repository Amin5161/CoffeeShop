import React, { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowUp, IoMdClose } from "react-icons/io";
import {
  IoCartOutline,
  IoChatboxEllipsesOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { VscCallOutgoing } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="pt-28">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-1/4 sm:w-1/4 h-screen bg-white dark:bg-zinc-700  p-4 shadow-personal   translate-x-0 ">
            {/* منو */}

            <ul
              className="child-hover:bg-orange-50  flex flex-col justify-between
       gap-x-4 lg:gap-x-6 tracking-tighter lg:tracking-normal md:text-white py-2 cursor-pointer "
            >
              <li className="flex gap-x-2 mb-4  hover:p-1 hover:rounded-md">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#ecc378" : "",
                    };
                  }}
                  to="/"
                >
                  حساب کاربری
                </NavLink>
              </li>
              <li className="relative group mb-4 hover:p-1 hover:rounded-md">
                <div className="flex gap-x-2 justify-between">
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
                      پیشخوان
                    </NavLink>
                  </div>
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
                  سفارش ها
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
                  حساب کاربری
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
                  اطلاع رسانی ها
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
                  خروج
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
                  </div>
                </div>
              </div>

              {/* دارک مود */}

              <div className="cursor-pointer"></div>

              {/* ورود و ثبت نام  */}
              <div className=" items-center flex gap-x-4 "></div>
            </div>
          </div>
          <div className="w-3/4 bg-blue-500">

          </div>
        </div>
      </div>
    </div>
  );
}
