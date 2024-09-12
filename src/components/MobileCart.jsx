import React from "react";
import { IoMdClose } from "react-icons/io";

export default function MobileCart({ isMobileCartOpen,setIsMobileCartOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-zinc-700 z-50 p-4 shadow-personal transition-transform duration-300 ease-in-out transform ${
        isMobileCartOpen ? "translate-x-0 w-3/4 sm:w-1/2" : "-translate-x-full"
      } md:w-0 md:h-0 md:overflow-hidden`}
    >
      <div className="flex  items-center justify-between  dark:text-white border-b pb-4">
        <IoMdClose className="cursor-pointer" onClick={()=>setIsMobileCartOpen(!isMobileCartOpen)}/>
        <span>سبد خرید</span>
      </div>
      <div className="flex mt-4 ">
        <img
          className="w-20 h-28  "
          src="/public/images/products/black-600.jpg"
          alt=""
        />
        <div className="flex flex-col mr-4 max-w-44">
          <h4 className=" font-vazir dark:text-gray-100 mb-6 text-base line-clamp-2  ">
            قهوه اسپرسو بن مانو 250 گرمی
          </h4>
          <div>
            <p className="text-green-400 text-[10px] tracking-wider">
              17500 تومان تخفیف
            </p>
            <div className="mt-2 dark:text-white ">
              <span className="font-semibold text-[14px] tracking-wider ">
                196000
              </span>
              <span className="pr-1">تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-0 w-full bottom-0 items-center justify-between mt-2 border-t border-gray-200 dark:border-gray-600 p-4 ">
        <div className="flex items-center justify-between dark:text-white">
          <div>
            <span className="opacity-50 text-[10px]">مبلغ قابل پرداخت</span>
            <p className="font-semibold text-sm tracking-wider">350000 تومان</p>
          </div>
          <button className="bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700">
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
