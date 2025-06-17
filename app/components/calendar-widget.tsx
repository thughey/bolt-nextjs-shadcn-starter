"use client";

import React from "react";
import { motion } from "framer-motion";

export function CalendarWidget() {
  return (
    <div className="lg:col-span-5 max-w-[600px] overflow-scroll h-full bg-white rounded-2xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-900 text-lg font-medium">June 2023</h2>
        <div className="flex space-x-2">
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <button className="bg-gray-50 text-gray-700 p-2 rounded-full border border-gray-200">
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
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <button className="bg-gray-50 text-gray-700 p-2 rounded-full border border-gray-200">
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
          </motion.div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Days of week header */}
        <div className="grid grid-cols-7 mb-3 text-center text-xs text-gray-500">
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
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm border border-gray-200 cursor-pointer">
              28
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm border border-gray-200 cursor-pointer">
              29
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm border border-gray-200 cursor-pointer">
              30
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-400 text-sm border border-gray-200 cursor-pointer">
              31
            </div>
          </motion.div>

          {/* Current month days */}
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex flex-col items-center justify-center relative group border border-gray-200 cursor-pointer">
              <span className="text-gray-700 text-sm">1</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full absolute bottom-3" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              2
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              3
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              4
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              5
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              6
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              7
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              8
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              9
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              10
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              11
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              12
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              13
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex flex-col items-center justify-center relative border border-gray-200 cursor-pointer">
              <span className="text-gray-700 text-sm">14</span>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute bottom-3" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              15
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              16
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              17
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              18
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              19
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              20
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              21
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex flex-col items-center justify-center relative border border-gray-200 cursor-pointer">
              <span className="text-gray-700 text-sm">22</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full absolute bottom-3" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              23
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              24
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              25
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              26
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              27
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              28
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-700 text-sm border border-gray-200 cursor-pointer">
              29
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex flex-col items-center justify-center relative border border-gray-200 cursor-pointer">
              <span className="text-gray-700 text-sm">30</span>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute bottom-3" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square rounded-full bg-gray-50 flex items-center justify-center text-gray-500 text-sm border border-gray-200 cursor-pointer">
              1
            </div>
          </motion.div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-500 text-sm font-medium">
          Today&apos;s Schedule (June 16)
        </h3>
        <motion.div
          whileHover={{
            scale: 1.05,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          whileTap={{
            scale: 0.95,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 17,
            },
          }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <button className="bg-gray-50 text-gray-700 py-1 px-3 rounded-full text-xs flex items-center border border-gray-200">
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
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-700 text-sm">Team Standup</span>
            </div>
            <span className="text-gray-500 text-xs">9:00 - 9:30 AM</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Daily progress update
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-gray-700 text-sm">Client Meeting</span>
            </div>
            <span className="text-gray-500 text-xs">11:00 - 12:00 PM</span>
          </div>
          <div className="mt-1 text-xs text-gray-500">Project review</div>
        </div>
      </div>
    </div>
  );
}
