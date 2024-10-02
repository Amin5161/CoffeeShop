import React from "react";

export default function CoffeeClub() {
  return (
    <section className="my-20">
      <div className="container sm:w-3/4 ">
        <div className=" flex flex-wrap gap-y-8 items-center lg:flex-nowrap  lg:flex-row  justify-between lg:h-36 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 gap-x-2 md:p-3 xl:px-11 p-4">
          <div className="flex items-center w-full gap-x-4">
            <img
              className="w-16 md:w-16 sm:w-20 lg:w-24 lg:h-24 xl:h-28 xl:w-28"
              src="images/—Pngtree—orange diamond decoration illustration_4736309 (1).png"
              alt=""
            />
            <div className="w-full">
              <h3 className="text-2xl  lg:text-3xl text-white ">کافی کلاب</h3>
              <p className="text-white opacity-80 text-sm sm:text-base lg:text-lg">
                میدونستی با امتیازهات میتونی قهوه بگیری؟
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-around w-full gap-y-4 gap-x-2 items-center sm:flex-nowrap md:gap-x-5 lg:gap-x-10">
            <div className="flex w-full gap-x-4 justify-between sm:w-2/3 ">
              <div className="flex items-center justify-center flex-col h-16 min-w-16  bg-white sm:h-20 sm:w-20 md:w-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24  rounded-xl xl:gap-4">
                <img
                  src="images/64_CoffeeClub-2/Discovery.svg"
                  alt=""
                  className="w-8 lg:w-10"
                />
                <p className="text-green-400 text-[10px] lg:text-base">
                  چرخ و بخت
                </p>
              </div>
              <div className="flex items-center justify-center flex-col h-16 min-w-16  bg-white sm:h-20 sm:w-20 md:w-24 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl xl:gap-4">
                <img
                  src="images/64_CoffeeClub-2/Activity.svg"
                  alt=""
                  className="w-8 lg:w-10"
                />
                <p className="text-green-400 text-[10px] lg:text-base">
                  چرخ و بخت
                </p>
              </div>
              <div className="flex items-center justify-center flex-col h-16 min-w-16 bg-white sm:h-20 sm:w-20 md:w-24 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-xl xl:gap-4">
                <img
                  src="images/64_CoffeeClub-2/Ticket Star.svg"
                  alt=""
                  className="w-8 lg:w-10"
                />
                <p className="text-green-400 text-[10px] lg:text-base">
                  چرخ و بخت
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-y-1 md:gap-y-2 justify-between flex-col">
              <p className="text-white md:text-sm text-lg lg:text-lg">542</p>
              <span className="text-xs sm:text-sm lg:text-sm text-gray-400">
                امتیاز شما
              </span>
              <button className="text-xs bg-orange-400 text-white text-[10px] sm:text-base sm:w-28 md:min-w-16 md:text-sm lg:text-base lg:min-w-28 py-1 px-2 rounded-full hover">
                دریافت جایزه
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
