import debounce from "lodash.debounce";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./Context/SearchContext";
import { ProductsContext } from "./Context/ProductsContext";

export default function SearchBar() {
  const { products } = useContext(ProductsContext);
  const { searchTerm, setSearchTerm, filteredProducts, setFilteredProducts } =
    useContext(SearchContext);
  const navigate = useNavigate();

  console.log(products);
  useEffect(() => {
    if (!Array.isArray(products)) return; // اگر products آرایه نباشد، کاری انجام نده

    const debouncedSearch = debounce(() => {
      const result = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(result);
    }, 300);

    if (searchTerm) {
      debouncedSearch();
    } else {
      setFilteredProducts([]);
    }
    console.log(products);

    // پاکسازی debouncedSearch در هنگام unmount کامپوننت
    return () => debouncedSearch.cancel();
  }, [searchTerm, products]);

  const handleChange = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".searchBar")) {
        setSearchTerm("");
        setFilteredProducts([]);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="relative flex flex-col items-start searchBar">
      <form onSubmit={handleChange} className="relative flex items-center ">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-8 md:w-24 text-sm lg:w-40 xl:w-72 pr-8 bg-transparent border border-white rounded-md text-white h-6"
          type="text"
          placeholder="جستجو..."
        />
        <button className="absolute right-2 flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      {filteredProducts.length > 0 && (
        <ul className="absolute top-7 bg-white text-black border border-gray-300 rounded-md mt-1 w-full z-10">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-200 cursor-pointer border-b text-sm"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
