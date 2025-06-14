"use client";

import React from "react";

export function CalendarWidget() {
  return (
    <div className="lg:col-span-5 max-w-[600px] overflow-scroll h-full bg-[#1a1a1a] rounded-2xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-medium">June 2023</h2>
        <div className="flex space-x-2">
          <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 p-2 rounded-full">
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
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 p-2 rounded-full">
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
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Days of week header */}
        <div className="grid grid-cols-7 mb-3 text-center text-xs text-gray-400">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {/* Previous month days (greyed out) */}
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-sm">
            28
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-sm">
            29
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-sm">
            30
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-sm">
            31
          </div>

          {/* Current month days */}
          <div className="aspect-square rounded-full bg-[#222] flex flex-col items-center justify-center relative group">
            <span className="text-gray-300 text-sm">1</span>
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute bottom-3" />
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            2
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            3
          </div>

          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            4
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            5
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            6
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            7
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            8
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            9
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            10
          </div>

          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            11
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            12
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            13
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex flex-col items-center justify-center relative">
            <span className="text-gray-300 text-sm">14</span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute bottom-3" />
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            15
          </div>
          <div className="aspect-square rounded-full bg-[#282828] flex items-center justify-center text-white text-sm font-medium border-2 border-[#434343]">
            16
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            17
          </div>

          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            18
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            19
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            20
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            21
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex flex-col items-center justify-center relative">
            <span className="text-gray-300 text-sm">22</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full absolute bottom-3" />
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            23
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            24
          </div>

          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            25
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            26
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            27
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            28
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-300 text-sm">
            29
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex flex-col items-center justify-center relative">
            <span className="text-gray-300 text-sm">30</span>
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute bottom-3" />
          </div>
          <div className="aspect-square rounded-full bg-[#222] flex items-center justify-center text-gray-500 text-sm">
            1
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-400 text-sm font-medium">
          Today&apos;s Schedule (June 16)
        </h3>
        <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 py-1 px-3 rounded-full text-xs flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Add Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-[#222] rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-300 text-sm">Team Standup</span>
            </div>
            <span className="text-gray-400 text-xs">9:00 - 9:30 AM</span>
          </div>
          <div className="mt-1 text-xs text-gray-400">
            Daily progress update
          </div>
        </div>

        <div className="bg-[#222] rounded-xl p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-300 text-sm">Client Meeting</span>
            </div>
            <span className="text-gray-400 text-xs">11:00 - 12:00 PM</span>
          </div>
          <div className="mt-1 text-xs text-gray-400">Project review</div>
        </div>
      </div>
    </div>
  );
}
