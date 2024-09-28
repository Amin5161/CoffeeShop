import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MobileCartContext = createContext();

export const MobileCartProvider = ({ children }) => {
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  return (
    <MobileCartContext.Provider
      value={{ isMobileCartOpen, setIsMobileCartOpen }}
    >
      {children}
    </MobileCartContext.Provider>
  );
};

MobileCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
