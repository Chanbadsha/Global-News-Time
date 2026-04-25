"use client";

import { useApp } from "@/provider/AppProvider";
import Link from "next/link";

const CategoriesList = ({ categoryId, children }) => {
  const { categoryId: activeId, setCategoryId } = useApp();

  const isActive = activeId === categoryId;

  const handleClick = () => {
    setCategoryId(categoryId);
  };

  return (
    <Link
      href={`/categories/${categoryId}`}
      onClick={handleClick}
      className={`
        w-9/12 mx-auto text-center font-semibold border cursor-pointer
        py-2 mt-2 transition-colors duration-200
        ${isActive ? "bg-gray-500 text-white" : "bg-white text-gray-700"}
        hover:bg-gray-300
      `}
    >
      {children}
    </Link>
  );
};

export default CategoriesList;
