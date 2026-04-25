"use client";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  // category
  const [categoryId, setCategoryId] = useState("01");

  const value = { categoryId, setCategoryId };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
export const useApp = () => useContext(AppContext);
