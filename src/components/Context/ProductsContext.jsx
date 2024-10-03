import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../../firebase/FirebaseConfig";
import PropTypes from "prop-types";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // گرفتن لیست محصولات از دیتابیس
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

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, isLoading, setIsLoading }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
