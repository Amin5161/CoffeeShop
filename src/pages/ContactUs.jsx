import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

export default function ContactUs() {
  return (
    <div className="bg-slate-300 dark:bg-zinc-800 h-screen flex items-start justify-center">
      <div className="container">
        <div className="mt-40 bg-white dark:bg-zinc-600 dark:text-white flex  gap-x-4 w-full p-4 shadow-personal rounded-md">
          <div>
            <h2 className="font-vazirMedium text-2xl pb-4">تماس با ما</h2>
            <div className="flex flex-col gap-y-4">
              <div className="flex items-start gap-x-2">
                <CiLocationOn />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
              </div>
              <div className="flex items-start gap-x-2">
                <CiPhone />
                <p>0935 245 2132</p>
              </div>
              <div className="flex items-start gap-x-2">
                <CiMail />
                <p>info@aminCoffee.com</p>
              </div>
            </div>
          </div>
          <form className="w-1/2 ">
            <div className="flex flex-col w-full">
              <label htmlFor="">نام و نام خانوادگی</label>
              <input type="text" className="border w-full rounded-md p-2 dark:bg-zinc-500 outline-none" />
              <label htmlFor="" className="pt-4">
                شماره موبایل
              </label>
              <input type="number" className="border w-full rounded-md p-2 dark:bg-zinc-500 outline-none" />
              <label htmlFor="" className="pt-4">
                پیام
              </label>
              <textarea
                type="text"
                rows={5}
                className="border w-full rounded-md dark:bg-zinc-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-400 mt-8 py-2 px-12 rounded-md"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
