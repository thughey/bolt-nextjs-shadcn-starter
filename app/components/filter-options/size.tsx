import React from "react";

export function Size() {
  return (
    <div className="flex flex-col py-4 border-b border-gray-100">
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-medium">Size</span>
        <div className="flex items-center">
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
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["6", "6.5", "7", "8", "8.5", "9", "10", "10.5", "11"].map(
          (size, idx) => (
            <div
              key={size}
              className={`w-full h-9 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                size === "8"
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {size}
            </div>
          )
        )}
      </div>
    </div>
  );
}
