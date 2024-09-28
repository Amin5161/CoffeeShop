import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import BasicRating from "./BasicRating";
import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";

export default function Slider() {
  const [images, setImages] = useState([]);

  const { addToCart } = useCart();
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await axios.get("http://localhost:3000/slider");
        console.log(photos.data);
        setImages(photos.data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchPhotos();
  }, []);

  return (
    <>
      <div className="container sm:w-3/4 mx-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={14}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          style={{ padding: "1rem" }}
        >
          {images.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col justify-between w-full h-72 sm:h-80 md:w-50 shadow-personal rounded-md overflow-hidden mt-10">
                  <Link to={`/slide/${product.id}`}>
                      <img
                        className="w-full h-40 md:h-48 object-fill"
                        src={product.image}
                        alt={product.name}
                      />
                  </Link>
                  <div className="p-2 h-1/2 dark:bg-zinc-600 ">
                    <p className="text-sm sm:text-base dark:text-white">
                      {product.name}
                    </p>
                    <span className="text-green-500 pt-2 text-sm">
                      {product.price} تومان
                    </span>
                    <div className="flex justify-between items-center pt-2 ">
                      <IoCartOutline onClick={() => addToCart(product)} />
                      <GoArrowSwitch />
                      <BasicRating />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
