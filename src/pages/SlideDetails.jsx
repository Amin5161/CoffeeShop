import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function SlideDetails() {
  const { id } = useParams();
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/slider/${id}`);
        setSlide(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error fetching slide details", error);
      }
    };
    fetchDetail();
  }, [id]);

  if (!slide) {
    return <div>Loding...</div>;
  }
  return (
    <div className="bg-slate-300 dark:bg-zinc-800  flex items-start justify-center">
      <div className="container pt-32 pb-20">
        <div className="bg-white dark:bg-zinc-600 dark:text-white w-full p-4 shadow-personal  rounded-mda">
          <div className="grid grid-cols-12  ">
            <div className="grid col-span-6">
              <img src={slide.image} alt={slide.name} />
            </div>
            <div className="bg-[#f5f5f5]  p-4 grid col-span-6">
              <h1 className="border-b-2 font-vazirBold text-xl">
                {slide.name}
              </h1>
              <p className="pt-4 font-vazirBold text-lg">{slide.price} تومان</p>
              <div className="pt-12 ">
                <div className="flex items-start gap-x-2 ">
                  <FaHourglassEnd/>
                  <p className="text-sm">{slide.send}</p>
                </div>
                <div className="flex items-start gap-x-2 pt-4">
                  <IoCartOutline/>
                  <p className="text-sm">{slide.howtobuy}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 p-4 bg-white dark:bg-zinc-600 dark:text-white  ">
            <h2 className="font-vazirBold text-lg">توضیحات محصول</h2>
            <p className="pt-2">{slide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
