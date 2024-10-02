import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHourglassEnd } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../components/Context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // به دست آوردن مرجع سند مورد نظر
        const coffeeRef = doc(db, "coffee", "yStyU3KCLycS0v0rp0Nc"); // شناسه سند را در اینجا قرار دهید
        const coffeeSnap = await getDoc(coffeeRef); // استفاده از getDoc برای یک سند

        if (coffeeSnap.exists()) {
          const coffeeData = coffeeSnap.data();
          // جستجوی محصول بر اساس id
          const foundProduct = coffeeData.products.find(
            (product) => product.id === id
          );

          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            console.log("Product not found");
          }
        } else {
          console.log("No such document");
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [id]);

  console.log(product);

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
                src={`/${product.image}`}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            <div className="bg-[#ebeaea] dark:bg-zinc-600  p-4 grid col-span-8">
              <h1 className="border-b-2 font-vazirBold text-xl">
                {product.name}
              </h1>
              <p className="pt-4 font-vazirBold text-lg">
                {product.price} تومان
              </p>
              <div className="pt-12 ">
                <div className="flex items-start gap-x-2 ">
                  <FaHourglassEnd />
                  <p className="text-sm">ارسال مرسوله های بالاتر از 500 هزار تومان فقط در شهر تهران رایگان خواهد بود</p>
                </div>
                <div className="flex items-start gap-x-2 pt-4">
                  <IoCartOutline />
                  <p className="text-sm"> خرید آنلاین با استفاده از درگاه های امن</p>
                </div>
              </div>
              <div className="pt-4 flex items-center  gap-x-4">
                <div className="flex items-center gap-x-2">
                  <p className="p-4  bg-zinc-600  text-white rounded-r-lg dark:bg-white dark:text-black">
                    {count}
                  </p>
                  <div className="flex flex-col gap-1">
                    <button
                      className="px-1 text-lg bg-zinc-600 text-white dark:bg-white dark:text-black rounded-t-md"
                      onClick={() => setCount(count + 1)}
                    >
                      +
                    </button>
                    <button
                      className="px-1 text-xl bg-zinc-600 text-white rounded-b-md dark:bg-white dark:text-black"
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
            <p className="pt-2 col-span-12"> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
