import React from "react";
import { SortBy } from "./components/filter-options/sort-by";
import { Category } from "./components/filter-options/category";
import { Color } from "./components/filter-options/color";
import { Size } from "./components/filter-options/size";
import { Price } from "./components/filter-options/price";
import { Ratings } from "./components/filter-options/ratings";
import { Availability } from "./components/filter-options/availability";
import { Brands } from "./components/filter-options/brands";

export default function Home() {
  return (
    <div
      className="bg-white rounded-xl w-full h-screen max-h-[100vh] overflow-hidden flex"
      style={{
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
      }}
    >
      {/* Filter Section (Left) */}
      <div className="w-[380px] border-r border-gray-100 flex flex-col">
        {/* Filter Header */}
        <div className="flex justify-between items-center px-6 h-[65px] border-b border-gray-100">
          <h2 className="text-xl font-bold">Filter</h2>
          <button className="p-1 rounded-full h-8 w-8 flex items-center justify-center transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Filter Options */}
        <div className="overflow-y-auto flex-grow scrollbar-hide">
          <div className="px-6">
            {/* Sort by */}
            <SortBy />
            {/* Category */}
            <Category />
            {/* Color */}
            <Color />
            {/* Size */}
            <Size />
            {/* Price Range */}
            <Price />
            {/* Ratings */}
            <Ratings />
            {/* Availability */}
            <Availability />
            {/* Brands */}
            <Brands />
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex px-6 py-5 space-x-4 border-t border-gray-100">
          <button className="flex-1 py-2.5 border border-gray-300 rounded-lg text-black text-sm font-medium transition-colors">
            Reset
          </button>
          <button className="flex-1 py-2.5 bg-black rounded-lg text-white text-sm font-medium transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
      {/* Preview Section (Right) */}
      <div className="flex-1 flex flex-col">
        {/* Preview Content */}
        <div className="overflow-y-auto flex-grow p-8 grid grid-cols-2 gap-6">
          {/* Skeleton Loader Cards */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden animate-pulse h-[300px] flex flex-col"
            >
              <div className="h-48 bg-gray-200" />
              <div className="py-4 flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <div
                      className={`h-5 ${
                        i % 2 === 0 ? "w-28" : "w-24"
                      } bg-gray-200 rounded mb-2`}
                    />
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                  </div>
                  <div className="h-5 w-12 bg-gray-200 rounded" />
                </div>
                <div className="flex mt-2">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
