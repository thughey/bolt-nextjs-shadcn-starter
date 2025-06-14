"use client";
import React from "react";

export function Price() {
  return (
    <div className="py-4 border-b border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-medium">Price</span>
        <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg">
          $0 - $300
        </span>
      </div>
      <div className="relative h-2 bg-gray-200 rounded-full mt-4">
        <div className="absolute left-0 right-1/2 h-2 bg-black rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer" />
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-black rounded-full cursor-pointer" />
      </div>
    </div>
  );
}
