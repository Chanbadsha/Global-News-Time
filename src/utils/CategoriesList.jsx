"use client";

import { useApp } from "@/provider/AppProvider";
import { useState } from "react";

const CategoriesList = ({ categoryId, children }) => {
  const { categoryId: activeId, setCategoryId } = useApp();
  let isActive;
  const handleClick = (e) => {
    e.preventDefault();
    setCategoryId(categoryId);
  };
  isActive = activeId === categoryId;
  return (
    <li
      onClick={handleClick}
      className={`${isActive ? " bg-gray-500 py-2 text-white " : "bg-white"} hover:bg-gray-300 hover:py-2 py-2 mt-2 text-gray-700 mx-auto  font-semibold w-9/12  text-center`}
    >
      {children}
    </li>
  );
};

export default CategoriesList;
