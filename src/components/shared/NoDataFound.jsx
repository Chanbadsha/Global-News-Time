"use client";
import { useApp } from "@/provider/AppProvider";
import Link from "next/link";
import React from "react";

const NoDataFound = () => {
  const { setCategoryId } = useApp();

  return (
    <div className="bg-white flex flex-1  flex-col items-center justify-center rounded-xl shadow-md border border-gray-100 p-10 text-center">
      <div className="text-5xl mb-4">📰</div>

      <h2 className="text-xl font-semibold text-gray-800">No News Available</h2>

      <p className="text-gray-500 mt-2 max-w-md">
        We couldn’t find any news articles at the moment. Please check back
        later or try refreshing the page.
      </p>

      <Link
        href="/"
        onClick={() => setCategoryId("01")}
        className="mt-5 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Refresh
      </Link>
    </div>
  );
};

export default NoDataFound;
