"use client";

import React, { useState } from "react";
import { CalendarWidget } from "../components/calendar-widget";
import TinyDocManager from "../components/tiny-doc-manager";
import { TinyDocEditor } from "../components/tiny-doc-editor";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationRound() {
  const [activeWidget, setActiveWidget] = useState<"calendar" | "document">(
    "document"
  );
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleIconHover = (element: HTMLElement) => {
    element.style.transform = "scale(1.05)";
  };

  const handleIconLeave = (element: HTMLElement) => {
    element.style.transform = "scale(1)";
  };

  const handleIconClick = (element: HTMLElement) => {
    element.style.transform = "scale(0.95)";
    setTimeout(() => {
      element.style.transform = "scale(1)";
    }, 100);
  };

  const handleDocSelect = (doc: { title: string; description: string }) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="w-full min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 bg-[#0a0a0a] flex justify-start items-start">
      <div className="flex flex-row justify-start items-start w-full">
        <div className="w-14 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex flex-col items-center py-2 m-2 h-fit">
          {/* Primary Navigation (Top) */}
          <div className="w-full flex flex-col items-center">
            {/* Calendar Icon */}
            <div
              className="w-full flex justify-center pb-0.5 cursor-pointer"
              onClick={() => setActiveWidget("calendar")}
              onMouseEnter={(e) => handleIconHover(e.currentTarget)}
              onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
              onMouseDown={(e) => handleIconClick(e.currentTarget)}
            >
              <div
                className={`${
                  activeWidget === "calendar"
                    ? "bg-[#2b2b2b]"
                    : "hover:bg-[#2a2a2a]"
                } w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    activeWidget === "calendar"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </div>
            </div>

            {/* Document Icon */}
            <div
              className="w-full flex justify-center py-0.5 cursor-pointer"
              onClick={() => setActiveWidget("document")}
              onMouseEnter={(e) => handleIconHover(e.currentTarget)}
              onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
              onMouseDown={(e) => handleIconClick(e.currentTarget)}
            >
              <div
                className={`${
                  activeWidget === "document"
                    ? "bg-[#2b2b2b]"
                    : "hover:bg-[#2a2a2a]"
                } w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    activeWidget === "document"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
            </div>

            {/* User Profile Icon */}
            <div
              className="w-full flex justify-center py-0.5 cursor-pointer"
              onMouseEnter={(e) => handleIconHover(e.currentTarget)}
              onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
              onMouseDown={(e) => handleIconClick(e.currentTarget)}
            >
              <div className="hover:bg-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Secondary Actions (Bottom) */}
          <div className="w-full flex flex-col items-center">
            {/* Divider */}
            <div className="w-8 border-t border-[#2a2a2a] my-3" />

            {/* Light Bulb Icon */}
            <div
              className="w-full flex justify-center py-0.5 cursor-pointer"
              onMouseEnter={(e) => handleIconHover(e.currentTarget)}
              onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
              onMouseDown={(e) => handleIconClick(e.currentTarget)}
            >
              <div className="hover:bg-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Search Icon */}
            <div
              className="w-full flex justify-center pt-0.5 cursor-pointer"
              onMouseEnter={(e) => handleIconHover(e.currentTarget)}
              onMouseLeave={(e) => handleIconLeave(e.currentTarget)}
              onMouseDown={(e) => handleIconClick(e.currentTarget)}
            >
              <div className="hover:bg-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Grid Layout */}
        <motion.div
          initial={{ width: "300px", height: "400px" }}
          animate={{
            width:
              activeWidget === "document"
                ? selectedDoc
                  ? "550px"
                  : "700px"
                : "550px",
            height:
              activeWidget === "document"
                ? selectedDoc
                  ? "650px"
                  : "700px"
                : "620px",
          }}
          exit={{ width: "100%", height: "800px" }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
            mass: 0.1,
            duration: 0.3,
          }}
          className="inline-block overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] rounded-3xl mt-2 p-6 relative"
        >
          <div className="w-full h-full border border-[#2a2a2a] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              {activeWidget === "calendar" ? (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.1,
                    duration: 0.5,
                    exit: { duration: 0.3 },
                  }}
                  className="w-[498px]"
                >
                  <CalendarWidget />
                </motion.div>
              ) : selectedDoc ? (
                <motion.div
                  key="editor"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.1,
                    duration: 0.5,
                    exit: { duration: 0.3 },
                  }}
                  className="w-full h-full"
                >
                  <TinyDocEditor onBack={() => setSelectedDoc(null)} />
                </motion.div>
              ) : (
                <motion.div
                  key="document"
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.1,
                    duration: 0.5,
                    exit: { duration: 0.3 },
                  }}
                  className="w-full h-full"
                >
                  <TinyDocManager onDocSelect={handleDocSelect} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
