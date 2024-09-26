import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {
  return (
    <section className="w-full h-[24rem] bg-zinc-600">
    
      <div className="container">
        <div className="py-12">
          <div className="w-full flex justify-between flex-wrap lg:flex-nowrap gap-y-8 gap-x-8 ">
            <div className="mt-[-15px] lg:w-1/3 ">
              <div className="flex items-center gap-x-4 pt-[-100px] pb-4">
                <img src="/public/images/app-logo.png" alt="" />
                <img src="/public/images/app-logo-type.svg" alt="" />
              </div>
              <p className="text-gray-300 h-auto md:text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className="md:flex-grow lg:flex-grow-0 ">
              <h4 className="text-white lg:text-xl pb-4">دسترسی سریع</h4>
              <div className="flex gap-x-14 md:text-sm pr-4 ">
                <ul className="text-gray-300 ">
                  <li className="blackLine relative  ">
                    <Link>حریم خصوصی </Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link> عودت کالا</Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link>شرایط استفاده </Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link>ثبت سفارش</Link>
                  </li>
                </ul>
                <ul className="text-gray-300">
                  <li className="blackLine relative  ">
                    <Link>پرسش های متداول </Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link>فرصت های شغلی</Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link>ضمانت نامه ها</Link>
                  </li>
                  <li className="blackLine relative  ">
                    <Link> ارتباط با ما</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:flex-grow lg:flex-grow-0 text-gray-300 md:text-sm ">
              <h4 className="pb-4 text-white lg:text-xl">در تماس باشیم</h4>
              <div className="flex gap-x-2">
                <CiLocationOn />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
              <div className="flex flex-col flex-wrap gap-x-4">
                <div className="flex items-center gap-x-2 pt-2 ">
                  <CiMail />
                  <p>info@aminCoffee.com</p>
                </div>
                <div className="flex items-center gap-x-2 pt-2">
                  <CiPhone />
                  <div className="flex items-center gap-x-4">
                    <p>0935 245 2132</p>
                    <p>051245135</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center flex-wrap gap-y-4 pt-8 gap-x-12">
                <div className="w-full justify-center text-lg xs:w-auto xs:text-base flex items-center gap-x-2 border rounded-lg py-1 px-4">
                  <FaInstagram />
                  <Link>amin-coffee@</Link>
                </div>
                <div className="w-full justify-center text-lg xs:w-auto xs:text-base flex items-center gap-x-2 border rounded-lg py-1 px-4 text-gray-700 bg-[#ecc378]">
                  <LiaTelegram />
                  <Link>amin-coffee@</Link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

    </section>
  );
}
