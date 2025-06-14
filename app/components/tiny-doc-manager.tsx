"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface TinyDocManagerProps {
  onDocSelect: (doc: { title: string; description: string }) => void;
}

const TinyDocManager: FC<TinyDocManagerProps> = ({ onDocSelect }) => {
  return (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col overflow-hidden">
      {/* Main Content Area with Document Library */}
      <div className="flex-1 bg-[#1a1a1a] rounded-2xl m-0 mx-0 flex flex-col min-h-0">
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto mb-[-100px] pb-[100px] min-h-0">
          {/* Search and Actions Bar */}
          <div className="p-5">
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-white text-lg font-medium">Documents</h2>
              <div className="flex items-center space-x-2">
                <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 p-2 rounded-full flex items-center">
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
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                    />
                  </svg>
                </button>
                <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 p-2 rounded-full flex items-center">
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
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button className="bg-[#222] hover:bg-[#2a2a2a] text-gray-300 p-2 rounded-full flex items-center">
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Document Cards */}
              {[
                {
                  title: "Timeline & Milestones",
                  description:
                    "Project planning document with key deliverables",
                  timeAgo: "2h ago",
                  category: "Planning",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  title: "Q4 Analytics Report",
                  description: "Performance metrics and insights",
                  timeAgo: "yesterday",
                  category: "Analytics",
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                },
                {
                  title: "Product Roadmap",
                  description: "Feature planning and release schedule",
                  timeAgo: "3d ago",
                  category: "Product",
                  icon: "M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2",
                },
                {
                  title: "Meeting Notes",
                  description: "Weekly team sync discussion points",
                  timeAgo: "5d ago",
                  category: "Team",
                  icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                },
                {
                  title: "UI Design System",
                  description: "Component library and guidelines",
                  timeAgo: "1w ago",
                  category: "Design",
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
                },
                {
                  title: "Budget Proposal",
                  description: "Financial planning for next quarter",
                  timeAgo: "2w ago",
                  category: "Finance",
                  icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
                },
              ].map((doc, index) => (
                <div
                  key={index}
                  onClick={() => onDocSelect(doc)}
                  className="document-card bg-[#222] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#333] cursor-pointer transition-all duration-200 hover:bg-[#2a2a2a]"
                >
                  <div className="p-4 border-b border-[#2a2a2a]">
                    <div className="flex justify-between items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d={doc.icon}
                        />
                      </svg>
                      <button className="text-gray-400 hover:text-white">
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
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-300 text-sm font-medium mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-4">
                      {doc.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-400 text-xs">
                        Edited {doc.timeAgo}
                      </span>
                      <span className="bg-[#2a2a2a] text-xs text-gray-400 px-2 py-1 rounded-md">
                        {doc.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 11,
            stiffness: 100,
            mass: 0.5,
            delay: 0.2,
          }}
          className="bg-[#222] border-t border-[#2a2a2a] p-3 flex justify-between items-center sticky bottom-0"
        >
          <div className="flex items-center text-gray-400 text-xs">
            <span>6 documents</span>
            <span className="mx-2">•</span>
            <span>Last updated: Today, 2:45 PM</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-[#2a2a2a] hover:bg-[#333] text-gray-300 p-2 rounded-full">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button className="bg-[#2a2a2a] hover:bg-[#333] text-gray-300 p-2 rounded-full">
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
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TinyDocManager;
