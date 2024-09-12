import React from "react";
import { Link } from "react-router-dom";

export default function RedingMaterial() {
  return (
    <section className="my-10 md:mt-40">
      <div className="container sm:w-3/4 mx-auto ">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-vazirBold text-base md:text-xl pb-2 dark:text-white">
              مطالب خواندنی
            </h3>
          </div>
          <span className="text-orange-400 text-xs  xs:text-sm ">
            <Link>مشاهده همه مطالب</Link>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 md:pt-8 ">
          <div className="flex flex-col justify-between w-full h-56  md:w-50 shadow-personal rounded-md overflow-hidden p-2 dark:bg-zinc-600">
            <img
              className="w-full h-2/3 object-cover rounded-2xl rounded-bl-[40px] overflow-hidden"
              src="/public/images/مطالب خواندنی/cfa19d876ff29e3aacb29a9d644018b9.jpg"
              alt=""
            />
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base dark:text-white">
                قهوه ترک بنمانو 250گرم بنگلادش اورجینال
              </p>
              <span className="text-green-500 pt-2 text-sm">21 مرداد 1402</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-56  md:w-50 shadow-personal rounded-md overflow-hidden p-2 dark:bg-zinc-600">
            <img
              className="w-full h-2/3 object-fill rounded-2xl rounded-bl-[40px] overflow-hidden"
              src="/public/images/مطالب خواندنی/Coffee-Jelly-4800-I-1.jpg"
              alt=""
            />
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base dark:text-white">
                قهوه ترک بنمانو 250گرم بنگلادش اورجینال
              </p>
              <span className="text-green-500 pt-2 text-sm">21 مرداد 1402</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-56  md:w-50 shadow-personal rounded-md overflow-hidden p-2 dark:bg-zinc-600">
            <img
              className="w-full h-2/3  object-fill rounded-2xl rounded-bl-[40px] overflow-hidden"
              src="/public/images/مطالب خواندنی/green-coffee.jpg"
              alt=""
            />
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base dark:text-white">
                قهوه ترک بنمانو 250گرم بنگلادش اورجینال
              </p>
              <span className="text-green-500 pt-2 text-sm">21 مرداد 1402</span>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-56  md:w-50 shadow-personal rounded-md overflow-hidden p-2 dark:bg-zinc-600">
            <img
              className="w-full h-2/3 object-fill rounded-2xl rounded-bl-[40px] overflow-hidden"
              src="/public/images/مطالب خواندنی/diffrent-coffee-beans.webp"
              alt=""
            />
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base dark:text-white">
                قهوه ترک بنمانو 250گرم بنگلادش اورجینال
              </p>
              <span className="text-green-500 pt-2 text-sm">21 مرداد 1402</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
