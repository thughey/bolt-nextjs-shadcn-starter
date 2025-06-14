"use client";
import React, { useState, useEffect } from "react";
import { TaskCreationPanel } from "./components/task-creation-panel/task-creation-panel";
import CalendarTasker from "./components/calendar-tasker";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectTaskA } from "./components/project-task-a.1";
import { ProjectTaskC } from "./components/project-taskC.1";
// Tailwind CSS should be imported globally in your app (e.g., in _app.tsx or index.tsx)
// The font-family is handled by Tailwind's font-sans class by default

export function Tasker() {
  const [visiblePanel, setVisiblePanel] = useState<
    "projects" | "calendar" | "timers" | null
  >(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(function () {
    const interval = setInterval(function () {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return function () {
      clearInterval(interval);
      setElapsedSeconds(0);
    };
  }, []);

  function formatTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return [hours, minutes, seconds]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  }

  return (
    <div className="w-full h-full h-screen bg-[#f1f1f1] flex flex-col p-24 items-center justify-start">
      {/* Timer bar with expanded toolbar */}
      <div className="w-full max-w-2xl bg-white rounded-2xl py-4 mb-4">
        {/* Top row with main actions */}
        <div className="flex items-center px-6 justify-between mb-3">
          <div className="flex items-center">
            <button className="text-gray-400 mr-3 border rounded-xl p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <span className="text-black text-2xl font-normal">Close Task</span>
          </div>
          <div className="flex items-center ">
            <span
              className="text-black text-2xl font-light mr-6 font-mono min-w-[7ch] text-center tracking-tighter"
              style={{ fontFamily: "Azeret Mono, monospace" }}
            >
              {formatTime(elapsedSeconds)}
            </span>
            <button className="bg-[#fa4822] text-white rounded-full w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            </button>
          </div>
        </div>
        {/* New toolbar with quick action buttons */}
        <div className="flex items-center justify-between px-6 border-t border-gray-200 pt-5 pb-1">
          <div className="flex space-x-3">
            <button
              className={`flex items-center justify-center border rounded-xl px-4 py-2 text-gray-600${
                visiblePanel === "projects"
                  ? " bg-gray-100"
                  : " hover:bg-gray-50"
              }`}
              onClick={() =>
                setVisiblePanel(visiblePanel === "projects" ? null : "projects")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Projects
            </button>
            <button
              className={`flex items-center justify-center border rounded-xl px-4 py-2 text-gray-600${
                visiblePanel === "calendar"
                  ? " bg-gray-100"
                  : " hover:bg-gray-50"
              }`}
              onClick={() =>
                setVisiblePanel(visiblePanel === "calendar" ? null : "calendar")
              }
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
              Calendar
            </button>
            <button
              className={`flex items-center justify-center border rounded-xl px-4 py-2 text-gray-600${
                visiblePanel === "timers" ? " bg-gray-100" : " hover:bg-gray-50"
              }`}
              onClick={() =>
                setVisiblePanel(visiblePanel === "timers" ? null : "timers")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 00-1 1v3a1 1 0 00.293.707l2 2a1 1 0 001.414-1.414L11 9.586V7a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Timers
            </button>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center justify-center border rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Settings
            </button>
          </div>
        </div>
      </div>
      {/* Show ProjectTaskB and CalendarTasker in a styled container */}
      <div className="w-full max-w-2xl bg-white rounded-2xl overflow-clip">
        <AnimatePresence initial={false}>
          {visiblePanel === "projects" && (
            <motion.div
              key="project-taskb"
              initial={{ opacity: 0, y: -24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -24, height: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 180 }}
              layout
              style={{ overflow: "hidden" }}
            >
              <ProjectTaskC />
            </motion.div>
          )}
          {visiblePanel === "calendar" && (
            <motion.div
              key="calendar-tasker"
              initial={{ opacity: 0, y: -24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -24, height: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 180 }}
              layout
              style={{ overflow: "hidden" }}
            >
              <CalendarTasker />
            </motion.div>
          )}
          {visiblePanel === "timers" && (
            <motion.div
              key="timers-panel"
              initial={{ opacity: 0, y: -24, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -24, height: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 180 }}
              layout
              style={{ overflow: "hidden" }}
            >
              <div className="p-8 text-center text-gray-500">
                Timers panel coming soon…
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <TaskCreationPanel /> */}
    </div>
  );
}

export default Tasker;
