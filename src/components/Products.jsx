import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import BasicRating from "./BasicRating";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products);
    });
  }, []);

  return (
    <section className="pt-20 md:pt-40 ">
      <div className="container sm:w-3/4 mx-auto ">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-vazirBold text-base md:text-xl pb-2 dark:text-white">
              جدید ترین محصولات
            </h3>
            <p className="text-xs md:text-base dark:text-white">
              فراوری شده از دانه قهوه
            </p>
          </div>
          <span className="text-orange-400 text-xs  xs:text-sm ">
            <Link>مشاهده همه محصولات</Link>
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 gap-4 pt-4 md:pt-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col justify-between w-full h-72 sm:h-80  md:w-50 shadow-personal rounded-md overflow-hidden"
              >
                <img
                  className="w-full h-1/2 xs:h-[60%]  object-fill"
                  src={product.image}
                  alt=""
                />
                <div className="p-2 dark:bg-zinc-600">
                  <p className="text-sm sm:text-base dark:text-white">
                    {product.name}
                  </p>
                  <span className="text-green-500 pt-2 text-sm">
                    {product.price}
                  </span>
                  <div className="flex justify-between items-center pt-2 ">
                    <IoCartOutline />
                    <GoArrowSwitch />
                    <BasicRating />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
