import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { IoCartOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import BasicRating from "./BasicRating";
import { Link } from "react-router-dom";
import { useCart } from "./Context/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, "coffee");
    getDocs(ref)
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
        } else {
          const productsArray = snapshot.docs.map((doc) => doc.data().products);

          setProducts(productsArray.flat());
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
        setIsLoading(false); // اگر خطایی رخ دهد لودینگ غیر فعال شود
      });
  }, []);
  console.log(products);

  const { cart, addToCart } = useCart();
  useEffect(() => {
    console.log("Updated cart:", cart);
  }, [cart]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
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
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col  w-full h-auto md:w-50 shadow-personal rounded-md overflow-hidden mt-10">
                  <Link to={`/product/${product.id}`}>
                    <img
                      className="w-full h-40 md:h-48 object-fill"
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>
                  <div className="p-2 h-1/2 dark:bg-zinc-600 ">
                    <p className="text-xs sm:text-base font-vazirBold  dark:text-white">
                      {product.name}
                    </p>
                    <span className="text-green-500 pt-2 text-xs sm:text-sm">
                      {product.price} تومان
                    </span>
                    <div className="flex justify-between items-center pt-2 ">
                      <IoCartOutline className="cursor-pointer" onClick={() => addToCart(product)} />
                      <GoArrowSwitch />
                      <BasicRating  />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
