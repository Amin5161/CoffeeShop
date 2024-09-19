import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../components/Context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error fetching Product details", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!product) {
    return <div>Loding...</div>;
  }
  return (
    <div className="bg-slate-300 dark:bg-zinc-800  flex items-start justify-center">
      <div className="container pt-32 pb-20">
        <div className="bg-white dark:bg-zinc-600 dark:text-white w-full p-4 shadow-personal  rounded-mda">
          <div className="grid grid-cols-12 ">
            <div className="grid col-span-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            <div className="bg-[#ebeaea] dark:bg-zinc-600  p-4 grid col-span-8">
              <h1 className="border-b-2 font-vazirBold text-xl">
                {product.name}
              </h1>
              <p className="pt-4 font-vazirBold text-lg">{product.price} تومان</p>
              <div className="pt-12 ">
                <div className="flex items-start gap-x-2 ">
                  <FaHourglassEnd />
                  <p className="text-sm">{product.send}</p>
                </div>
                <div className="flex items-start gap-x-2 pt-4">
                  <IoCartOutline />
                  <p className="text-sm">{product.howtobuy}</p>
                </div>
              </div>
              <div className="pt-4 flex items-center  gap-x-4">
                <div className="flex items-center gap-x-2">
                  <p className="p-4  bg-zinc-600  text-white rounded-r-lg dark:bg-white dark:text-black">
                    {count}
                  </p>
                  <div className="flex flex-col gap-1">
                    <button
                      className="px-1 text-lg bg-zinc-600 text-white dark:bg-white dark:text-black"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                    <button
                      className="px-1 text-xl bg-zinc-600 text-white  dark:bg-white dark:text-black"
                      onClick={() => count > 1 && setCount(count - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <button
                  className="bg-[#2452b6] hover:bg-[#f
                5f5f5] text-white hover:bg-blue-400 px-4 py-2 rounded-md 
                "
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  p-4 bg-white dark:bg-zinc-600 dark:text-white ">
            <h2 className="font-vazirBold text-lg col-span-4">توضیحات محصول</h2>
            <p className="pt-2 col-span-12">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
