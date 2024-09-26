import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
    children: PropTypes.node.isRequired
  };