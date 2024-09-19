import React from "react";
import { useCart } from "../components/Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

export default function Cart() {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="pt-20 md:pt-32 pb-40 dark:bg-zinc-700">
      <div className="container">
        <h1 className="pb-10 text-3xl">سبد خرید</h1>
        {cart.length == 0 ? (
          <p className="pt-20">سبد خرید شما خالی است</p>
        ) : (
          <div className="flex flex-col sm:flex-row justify-between gap-4 dark:text-white">
            <ul className="md:w-2/3 gap-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between dark:bg-zinc-600  border border-gray-300 p-4 mb-4 shadow-personal rounded-md"
                >
                  <div className="flex gap-x-2">
                    <img
                      src={item.image}
                      alt=""
                      className="w-20 h-20 object-contain"
                    />
                    <div className="flex flex-col justify-between">
                      <h2 className="pb-4 font-vazirMedium">{item.name}</h2>
                      <p className="font-vazirMedium">
                        قیمت: {item.price}{" "}
                        <span className="text-xs">تومان</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex items-center justify-between px-2 gap-x-2 bg-slate-300 dark:bg-zinc-600 py-2 rounded-sm">
                      <div className="flex  gap-x-2">
                        <button
                          className="px-3 text-lg bg-white dark:bg-slate-400 rounded-md"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                        <p className="px-2 py-1 bg-white dark:bg-slate-400 rounded-md">
                          {item.quantity}
                        </p>
                        <button
                          className="px-3 text-xl bg-white dark:bg-slate-400 rounded-md"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <MdDeleteOutline
                        className="text-xl cursor-pointer text-red-600"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* مجموع خرید  */}
            <div className="flex flex-col justify-between  border border-gray-300 dark:bg-zinc-600 p-4 mb-4 sm:w-1/3  h-64 shadow-personal rounded-md">
              <div>
                <h2 className="text-xl font-vazirMedium pb-4">
                  مجموع کل سبد خرید
                </h2>
                <div className="flex justify-around">
                  <p>کد تخفیف</p>
                  <p></p>
                </div>
                <div className="flex justify-around pt-4">
                  <p className="font-vazirBold">قیمت کل:</p>
                  <p> {totalPrice} تومان</p>
                </div>
              </div>

              <button className="bg-orange-400 py-2  rounded-md text-lg">
                پرداخت
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
