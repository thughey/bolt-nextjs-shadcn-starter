import React from "react";

function CalendarTasker() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Calendar view panel */}
      <div className="w-full max-w-2xl bg-white rounded-2xl p-6">
        {/* Calendar header */}
        <div className="flex items-center justify-between mb-4 w-full">
          <div className="flex items-center">
            <h2 className="text-2xl font-medium text-gray-800">
              September 10–16, 2023
            </h2>
          </div>

          <div
            className="flex hidden"
            role="group"
            aria-label="Calendar view switcher"
          >
            <button
              className="flex items-center justify-center border border-gray-300 rounded-l-xl px-4 py-2 text-gray-600 focus:z-10"
              aria-pressed="false"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Month
            </button>
            <button
              className="flex items-center justify-center border border-gray-300 border-l-0 bg-gray-200 text-gray-800 rounded-none px-4 py-2 font-semibold focus:z-10"
              aria-pressed="true"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Week
            </button>
            <button
              className="flex items-center justify-center border border-gray-300 border-l-0 rounded-r-xl px-4 py-2 text-gray-600 focus:z-10"
              aria-pressed="false"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Day
            </button>
          </div>

          <div className="flex ml-4">
            <button className="p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
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
        </div>

        {/* Calendar grid */}
        <div className="border rounded-xl overflow-hidden">
          {/* Days of week header */}
          <div className="grid grid-cols-7 bg-gray-50 border-b">
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Sun
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Mon
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Tue
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Wed
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Thu
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Fri
            </div>
            <div className="py-2 text-center text-sm font-medium text-gray-500">
              Sat
            </div>
          </div>

          {/* Calendar days - two weeks */}
          <div className="grid grid-cols-7">
            {/* First week: 10–16 */}
            <div className="calendar-day p-2 border-r border-b aspect-square">
              <div className="text-sm">10</div>
            </div>
            <div className="calendar-day p-2 border-r border-b aspect-square">
              <div className="text-sm">11</div>
            </div>
            <div className="calendar-day p-2 border-r border-b aspect-square">
              <div className="text-sm">12</div>
            </div>
            <div className="calendar-day p-2 border-r border-b aspect-square bg-gray-50">
              <div className="text-sm font-medium">13</div>
            </div>
            <div className="calendar-day p-2 border-r border-b aspect-square">
              <div className="text-sm">14</div>
            </div>
            <div className="calendar-day p-2 border-r border-b aspect-square">
              <div className="text-sm">15</div>
            </div>
            <div className="calendar-day p-2 border-b aspect-square">
              <div className="text-sm">16</div>
            </div>
            {/* Second week: 17–23, no border-b */}
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">17</div>
            </div>
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">18</div>
            </div>
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">19</div>
            </div>
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">20</div>
            </div>
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">21</div>
            </div>
            <div className="calendar-day p-2 border-r aspect-square">
              <div className="text-sm">22</div>
            </div>
            <div className="calendar-day p-2 aspect-square">
              <div className="text-sm">23</div>
            </div>
          </div>
        </div>

        {/* Quick task panel */}
        <div className="mt-4 hidden flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#ee6c4d] mr-2" />
            <span className="text-sm text-gray-600">High Priority</span>
            <div className="w-3 h-3 rounded-full bg-blue-500 mx-4 mr-2" />
            <span className="text-sm text-gray-600">Medium Priority</span>
            <div className="w-3 h-3 rounded-full bg-green-500 mx-4 mr-2" />
            <span className="text-sm text-gray-600">Low Priority</span>
          </div>

          <div className="flex items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default CalendarTasker;
