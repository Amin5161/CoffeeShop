import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductsCategory() {
  return (
    <section className="mt-12">
          <div className="container flex items-center justify-center md:justify-between flex-wrap gap-4 sm:w-3/4 mx-auto dark:text-white">
            <Link className="w-28 flex flex-col  items-center  ">
              <img src="/public/images/esperso.jfif" alt="" />
              <span className="pt-4">قهوه اسپرسو</span>
            </Link>
            <Link className="w-28 flex flex-col items-center  ">
              <img src="/public/images/تست.jpg" alt="" />
              <span className="pt-4">پک تستر قهوه</span>
            </Link>
            <Link className="w-28 flex flex-col items-center  ">
              <img src="/public/images/موکاپات.jpg" alt="" />
              <span className="pt-4">لوازم جانبی و تجهیزات</span>
            </Link>
            <Link className="w-28 flex flex-col items-center  ">
              <img src="/public/images/قهوه ساز.jpg" alt="" />
              <span className="pt-4">قهوه ساز</span>
            </Link>
            <Link className="w-28 flex flex-col items-center  ">
              <img src="/public/images/ترک.jpg" alt="" />
              <span>قهوه ترک</span>
            </Link>
          </div>
        </section>
  )
}
