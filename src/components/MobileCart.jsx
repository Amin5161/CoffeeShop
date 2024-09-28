import React, { useContext, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useCart } from "./Context/CartContext";
import { MdDeleteOutline } from "react-icons/md";
import { MobileCartContext } from "./Context/MobileCartContext";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "./Context/SidebarContext";

export default function MobileCart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice } =
    useCart();
  const { isMobileCartOpen, setIsMobileCartOpen } =
    useContext(MobileCartContext);

  const { isSidebarOpen } = useContext(SidebarContext);

  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    setIsMobileCartOpen(false);
  }, [pathname, setIsMobileCartOpen]);
  return (
    
    <div
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-zinc-700 z-[1000] p-4 shadow-personal transition-transform duration-300 ease-in-out transform ${
        isMobileCartOpen ? "translate-x-0 w-3/4 sm:w-1/2 " : "-translate-x-full"
      } md:w-0 md:h-0 md:overflow-hidden`}
    >
      <div className="flex  items-center justify-between  dark:text-white border-b pb-4">
        <IoMdClose
          className="cursor-pointer"
          onClick={() => setIsMobileCartOpen(false)}
        />
        <h3 className="text-lg font-vazirBold">سبد خرید</h3>
      </div>
      <div className="flex flex-col  w-full ">
        <div className="overflow-y-scroll h-[33rem] pl-2">
          {cart.map((item) => (
            <div
              className="flex gap-x-2 dark:bg-zinc-500 mb-4 rounded-md overflow-hidden border-b-2"
              key={item.id}
            >
              <div className="w-40 h-auto">
                <img className="w-full h-full" src={item.image} />
              </div>
              <div className="flex flex-col gap-y-2 p-2">
                <h3>{item.name}</h3>

                <p className="pb-2 text-green-400">
                  {item.price}
                  <span className="text-s pr-1">تومان</span>
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 ">
                    <button
                      onClick={() => addToCart(item)}
                      className="flex items-center justify-center text-lg bg-slate-300 text-black px-3 rounded-md"
                    >
                      +
                    </button>
                    <p className="flex items-center justify-center bg-slate-300 text-black px-3 rounded-md ">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex items-center justify-center text-lg bg-slate-300 text-black px-3 rounded-md"
                    >
                      -
                    </button>
                  </div>
                  <MdDeleteOutline
                    className="text-red-500 text-lg cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between py-4 border-t-4">
          <div className="flex items-center gap-x-1 text-lg">
            <p>قیمت کل : </p>
            <p>
              {totalPrice}
              <span className="text-sm text-green-400">تومان</span>{" "}
            </p>
          </div>
          <button className="bg-orange-400 py-2 px-6 rounded-md text-lg">
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}
