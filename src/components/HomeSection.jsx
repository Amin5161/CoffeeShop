import React from "react";
import { IoChevronDown } from "react-icons/io5";

export default function HomeSection() {
  return (
    <section className="bg-[url('/public/images/headerBgDesktop.png')] relative h-28 xs:h-40 sm:h-64 md:h-screen  bg-no-repeat bg-cover bg-center flex justify-center  ">
      <div className="container relative overflow-y-hidden">
        <div className=" flex w-full h-full  items-center justify-end md:pl-20 ">
          <div className="w-[12rem] sm:w-[24rem]  text-white ">
            <h2 className="font-vazirBold text-base  xs:text-xl sm:text-5xl">
              قهوه عربیکا تانزانیا
            </h2>
            <p className="text-sm xs:text-lg sm:text-2xl sm:pt-2 md:text-3xl md:pt-2 pb-2 border-b-2 border-orange-300">
              یک فنجان بالانس
            </p>
            <p className="flex flex-wrap pt-2 text-[10px] xs:text-[12px] md:text-lg">
              قطعا نام عربیکا را شنیده اید عزبیکا یکی از گونه های قهوه است که در
              نواحی مختلف کمربند قهوه کست میشود
            </p>
          </div>
        </div>

        {/* circle */}

        <div className="absolute bottom-0 left-0 right-0 hidden md:flex items-center justify-center mx-auto w-40 h-40 border border-white/25 rounded-full translate-y-2/4">
          <div className="flex items-center justify-center mx-auto w-32 h-32 border  border-white/50 rounded-full">
            <div className="mx-auto w-24 h-24 border  border-white/75 rounded-full"></div>
          </div>
        </div>
      </div>

      {/*curve  */}
      <img
        src="/public/images/curve.svg"
        className="hidden md:inline-block w-24 h-6 absolute bottom-0 right-0 left-0 mx-auto"
        alt=""
      />

      {/* arrow circle */}

      <div className="hidden md:flex items-center justify-center absolute bottom-0 right-0 left-0 mx-auto w-8 h-8 rounded-full border-2 border-orange-400 translate-y-4">
        <IoChevronDown className="w-10 h-16" />
      </div>
    </section>
  );
}
