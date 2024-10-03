import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
