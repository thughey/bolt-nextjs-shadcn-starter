"use client";
import React from "react";

export function Category() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-100">
      <span className="text-base font-medium">Category</span>
      <button className="flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        <span className="text-sm mr-2">All Shoes</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
