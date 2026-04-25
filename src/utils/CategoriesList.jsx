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
    flex items-center justify-between px-4 py-2.5 rounded-lg
    text-sm font-medium transition-all duration-200
    ${
      isActive
        ? "bg-black text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100"
    }
  `}
    >
      <span>{children}</span>

      {/* Active indicator */}
      {isActive && <span className="w-2 h-2 bg-white rounded-full"></span>}
    </Link>
  );
};

export default CategoriesList;
