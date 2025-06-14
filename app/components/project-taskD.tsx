import React from "react";

// TailwindCSS is assumed to be imported globally in your app (e.g., in _app.tsx or index.tsx)

interface ProjectTaskDProps {}

export function ProjectTaskD({}: ProjectTaskDProps) {
  return (
    <div className="w-full h-full h-screen flex flex-col items-center justify-center bg-[#222]">
      <div className="w-full max-w-3xl bg-white rounded-2xl px-6 py-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <button className="text-gray-400 mr-4 border border-gray-300 rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <span className="text-black text-2xl font-normal">Projects</span>
          </div>
          <div className="flex items-center">
            <button className="flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Filter
            </button>
            <button className="bg-[#ee6c4d] text-white rounded-xl px-4 py-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              New Project
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-3">
          <div className="flex space-x-3">
            <button className="flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 text-gray-600 bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Projects
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50">
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
                ></path>
              </svg>
              Timers
            </button>
            <button className="flex items-center justify-center border border-gray-300 rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50">
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
                ></path>
              </svg>
              Calendar
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="border border-gray-300 rounded-xl px-4 py-2 pl-10 focus:outline-none focus:border-[#ee6c4d] w-64"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full max-w-3xl bg-white rounded-2xl p-6">
        <div className="space-y-4">
          {/* Personal project */}
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/4">
                <div className="w-4 h-4 rounded-full bg-[#ee6c4d]"></div>
                <span className="text-lg font-medium">Personal</span>
              </div>
              <div className="flex-grow px-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-500">
                    12 tasks · 3 completed
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: Today
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#ee6c4d] h-2.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-1/4 justify-end">
                <button className="text-sm text-[#ee6c4d] font-medium">
                  View All Tasks
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Work project */}
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/4">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span className="text-lg font-medium">Work</span>
              </div>
              <div className="flex-grow px-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-500">
                    24 tasks · 18 completed
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: Yesterday
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-1/4 justify-end">
                <button className="text-sm text-blue-500 font-medium">
                  View All Tasks
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Health project */}
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/4">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-lg font-medium">Health</span>
              </div>
              <div className="flex-grow px-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-500">
                    8 tasks · 2 completed
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: Today
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-1/4 justify-end">
                <button className="text-sm text-green-500 font-medium">
                  View All Tasks
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Study project */}
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/4">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span className="text-lg font-medium">Study</span>
              </div>
              <div className="flex-grow px-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-500">
                    15 tasks · 10 completed
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: Yesterday
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-500 h-2.5 rounded-full"
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-1/4 justify-end">
                <button className="text-sm text-purple-500 font-medium">
                  View All Tasks
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Travel project */}
          <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 w-1/4">
                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                <span className="text-lg font-medium">Travel</span>
              </div>
              <div className="flex-grow px-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-500">
                    5 tasks · 0 completed
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: 1 week ago
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-1/4 justify-end">
                <button className="text-sm text-yellow-500 font-medium">
                  View All Tasks
                </button>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Add new project row */}
          <div className="border border-dashed border-gray-300 rounded-xl p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-gray-500 font-medium">Add New Project</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
