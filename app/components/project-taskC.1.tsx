import React from "react";

export function ProjectTaskC() {
  return (
    <div className="w-full max-w-3xl pt-4  bg-white rounded-2xl">
      {/* Projects list as table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left pb-3 pl-6 font-medium text-gray-600">
              Project
            </th>
            <th className="text-left pb-3 font-medium text-gray-600">
              Progress
            </th>
            <th className="text-left pb-3 font-medium text-gray-600">Tasks</th>
            <th className="text-right pb-3 pr-6 font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Personal project */}
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="py-4 pl-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#ee6c4d] mr-3" />
                <span className="font-medium">Personal</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-[#ee6c4d] h-2 rounded-full"
                    style={{ width: "25%" }}
                  />
                </div>
                <span className="text-sm text-gray-500">25%</span>
              </div>
            </td>
            <td className="py-4 text-sm text-gray-500">
              12 tasks · 3 completed
            </td>
            <td className="py-4 pr-6">
              <div className="flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          {/* Work project */}
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="py-4 pl-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3" />
                <span className="font-medium">Work</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
                <span className="text-sm text-gray-500">75%</span>
              </div>
            </td>
            <td className="py-4 text-sm text-gray-500">
              24 tasks · 18 completed
            </td>
            <td className="py-4 pr-6">
              <div className="flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          {/* Health project */}
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="py-4 pl-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3" />
                <span className="font-medium">Health</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "25%" }}
                  />
                </div>
                <span className="text-sm text-gray-500">25%</span>
              </div>
            </td>
            <td className="py-4 text-sm text-gray-500">
              8 tasks · 2 completed
            </td>
            <td className="py-4 pr-6">
              <div className="flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          {/* Study project */}
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="py-4 pl-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-3" />
                <span className="font-medium">Study</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "66%" }}
                  />
                </div>
                <span className="text-sm text-gray-500">66%</span>
              </div>
            </td>
            <td className="py-4 text-sm text-gray-500">
              15 tasks · 10 completed
            </td>
            <td className="py-4 pr-6">
              <div className="flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          {/* Travel project */}
          <tr className="hover:bg-gray-50">
            <td className="py-4 pl-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3" />
                <span className="font-medium">Travel</span>
              </div>
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "0%" }}
                  />
                </div>
                <span className="text-sm text-gray-500">0%</span>
              </div>
            </td>
            <td className="py-4 text-sm text-gray-500">
              5 tasks · 0 completed
            </td>
            <td className="py-4 pr-6">
              <div className="flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
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
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Add new project button */}
      <div className="mt-4 flex justify-center mx-6 mb-6">
        <button className="flex items-center justify-center border border-dashed border-gray-300 rounded-xl px-4 py-3 text-gray-500 hover:bg-gray-50 w-full">
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
            />
          </svg>
          Add New Project
        </button>
      </div>
    </div>
  );
}
