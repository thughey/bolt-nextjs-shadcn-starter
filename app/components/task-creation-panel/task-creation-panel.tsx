import React from "react";

export function TaskCreationPanel() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl p-6">
      <div className="flex flex-col">
        {/* Task name input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Task name"
            className="w-full text-2xl font-medium border-b-2 border-gray-200 pb-2 focus:outline-none focus:border-[#fa4822]"
          />
        </div>
        {/* Task options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project selection */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm mb-2">Project</label>
            <div className="flex items-center justify-between border rounded-xl p-3">
              <span className="text-gray-800">Personal</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* Priority selection */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm mb-2">Priority</label>
            <div className="flex items-center justify-between border rounded-xl p-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#fa4822] mr-2" />
                <span className="text-gray-800">High</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {/* Due date selection */}
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm mb-2">Due date</label>
            <div className="flex items-center justify-between border rounded-xl p-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">Today</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Notes section */}
        <div className="mt-6">
          <label className="text-gray-500 text-sm mb-2 block">Notes</label>
          <textarea
            placeholder="Add notes here..."
            className="w-full h-32 border rounded-xl p-3 resize-none focus:outline-none focus:border-[#fa4822]"
          />
        </div>
        {/* Action buttons */}
        <div className="flex justify-end mt-6">
          <button className="border rounded-xl px-6 py-2 mr-3 hover:bg-gray-50">
            Cancel
          </button>
          <button className="bg-[#fa4822] text-white rounded-xl px-6 py-2 hover:bg-[#fa4822]">
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}
