import React from "react";

function ProjectTaskB() {
  return (
    <div>
      {/* Projects list - now in 2 columns with larger cards */}
      <div className="w-full max-w-2xl bg-white rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Personal project */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-[#ee6c4d] mr-3"></div>
                <span className="text-xl font-medium">Personal</span>
              </div>
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

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-2">
                12 tasks · 3 completed
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-[#ee6c4d] h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">
                Recent Tasks:
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-[#ee6c4d] mr-2"></div>
                <span>Update personal budget spreadsheet</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-[#ee6c4d] mr-2"></div>
                <span>Schedule dentist appointment</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-[#ee6c4d] mr-2"></div>
                <span>Order birthday gift for mom</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-xs text-gray-500">Last updated: Today</div>
              <button className="text-sm text-[#ee6c4d] font-medium">
                View All Tasks
              </button>
            </div>
          </div>

          {/* Work project */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-xl font-medium">Work</span>
              </div>
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

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-2">
                24 tasks · 18 completed
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">
                Recent Tasks:
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>Prepare quarterly report presentation</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>Review team performance metrics</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>Schedule client follow-up meeting</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Last updated: Yesterday
              </div>
              <button className="text-sm text-blue-500 font-medium">
                View All Tasks
              </button>
            </div>
          </div>

          {/* Health project */}
          <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <span className="text-xl font-medium">Health</span>
              </div>
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

            <div className="mb-5">
              <div className="text-sm text-gray-500 mb-2">
                8 tasks · 2 completed
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">
                Recent Tasks:
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>Track daily water intake</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>Schedule annual physical checkup</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>Research meditation techniques</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                Last updated: 2 days ago
              </div>
              <button className="text-sm text-green-500 font-medium">
                View All Tasks
              </button>
            </div>
          </div>

          {/* Add new project card */}
          <div className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-50 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
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
            <span className="text-gray-500 font-medium mb-1">
              Add New Project
            </span>
            <p className="text-xs text-gray-400 text-center">
              Create a new project to organize your tasks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTaskB;
