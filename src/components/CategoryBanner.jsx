import React from "react";

export default function CategoryBanner() {
  return (
    <section className="mt-4 md:mt-12">
      <div className="container sm:w-3/4 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <div
            className="bg-[url('public/images/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.avif')]
                 h-52 shadow-personal object-contain bg-center rounded-md overflow-hidden p-8 text-white flex flex-col justify-center"
          >
            <h3 className="text-2xl pb-4">انواع قهوه</h3>
            <p className="opacity-80">ترکیبی و تک خواستگاه</p>
          </div>
          <div
            className=" h-52 bg-[url('/public/images/intro-1710351053.jpg')] object-contain bg-center rounded-md overflow-hidden
              p-8 text-white shadow-personal flex flex-col justify-center"
          >
            <h3 className="text-2xl pb-4"> پودر های فوری</h3>
            <p className="opacity-80"> نسکافه ,هات چاکلت , ماسالا </p>
          </div>
        </div>
      </div>
    </section>
  );
}
