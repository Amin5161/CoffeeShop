import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/FirebaseConfig";

export default function ProductsCategory() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, "coffee");
    getDocs(ref).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No matching documents.");
      } else {
        const dataArray = snapshot.docs.map((doc) => {
          const accessories = doc.data().Accessories || [];
          return accessories.map((item) => ({
            id: doc.id, 
            ...item,
          }));
        });
        setData(dataArray.flat());
        setIsLoading(false);
      }
    });
  }, []);
  console.log(data);

  return (
    <section className="mt-12">
      {isLoading ? (
        <div className="w-full text-center mx-auto text-xl dark:text-white">
          Loading...
        </div>
      ) : (
        <div className="container flex items-center justify-center md:justify-between flex-wrap gap-4 sm:w-3/4 mx-auto dark:text-white">
          {data.map((item ,index) => (
            <Link key={`${item.id}-${index}`} className="w-28 flex flex-col  items-center  ">
              <img src={item.image} alt="" />
              <span className="pt-4"> {item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
