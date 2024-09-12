import React from "react";

export default function About() {
  return (
    <div className="bg-slate-300 h-screen flex items-center justify-center relative">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0  bg-[url('/public/images/about-main-1536x595.webp')] bg-cover bg-center"></div>
      <div className="bg-white dark:bg-zinc-600 dark:text-white p-4 shadow-personal rounded-md max-w-3xl mx-4 relative z-10">
        <div className="text-center px-6">
          <h3 className="font-vazirMedium text-2xl pb-4">
            داستان ما از کجا شروع شد؟
          </h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
            دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد
          </p>
        </div>
      </div>
    </div>
  );
}
