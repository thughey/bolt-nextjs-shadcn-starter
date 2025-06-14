"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./tiny-doc-editor.module.css";

interface ToolbarButtonProps {
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function ToolbarButton({ icon, isActive, onClick }: ToolbarButtonProps) {
  return (
    <button
      className={`text-gray-300 hover:text-white p-2 rounded-full ${
        isActive ? "bg-[#333]" : "hover:bg-[#333]"
      }`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

function EditorToolbar({
  onFormatChange,
  onBack,
}: {
  onFormatChange?: (format: string) => void;
  onBack?: () => void;
}) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        damping: 11,
        stiffness: 100,
        mass: 0.5,
        delay: 0.25,
      }}
      className="w-full bg-[#222] border-b border-[#2a2a2a] px-4 py-2"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* Back Button */}
          <ToolbarButton
            icon={
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            }
            onClick={onBack}
            isActive={true}
          />
          {/* Text Formatting Controls */}
          <div className="flex space-x-1 border-r border-[#2a2a2a] pr-4">
            <ToolbarButton
              icon={
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("align-left")}
            />
            <ToolbarButton
              icon={
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("align-center")}
            />
            <ToolbarButton
              icon={
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("align-right")}
            />
          </div>

          {/* Text Style Controls */}
          <div className="flex space-x-4 border-r border-[#2a2a2a] pr-4">
            <select
              className="bg-[#222] text-gray-300 rounded-md pl-2.5 pr-8 py-1 text-sm border border-[#2a2a2a] focus:outline-none focus:ring-1 focus:ring-[#444] appearance-none bg-no-repeat bg-[length:16px_16px] bg-[center_right_0.5rem] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20stroke%3D%22%239CA3AF%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
              onChange={(e) =>
                onFormatChange?.(`font-weight-${e.target.value}`)
              }
            >
              <option value="normal">Normal (400)</option>
              <option value="medium">Medium (500)</option>
              <option value="semibold">Semibold (600)</option>
              <option value="bold">Bold (700)</option>
            </select>
          </div>

          {/* Insert Controls */}
          <div className="flex space-x-1">
            <ToolbarButton
              icon={
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("image")}
            />
            <ToolbarButton
              icon={
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("link")}
            />
            <ToolbarButton
              icon={
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
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              }
              onClick={() => onFormatChange?.("attachment")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TinyDocEditor({ onBack }: { onBack?: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState<string>(`
    <h2 class="text-white text-2xl font-semibold mb-6">Project Overview</h2>

    <p class="text-gray-300 mb-6">
      This document provides a comprehensive overview of our project
      timeline, key milestones, and associated deliverables for the
      upcoming quarter. It serves as the central reference for all
      team members and stakeholders to track progress, manage
      expectations, and ensure alignment across all project
      activities.
    </p>

    <h3 class="text-white text-xl font-medium mb-4">Key Objectives</h3>
    <ul class="text-gray-300 mb-6 list-disc pl-6 space-y-2">
      <li>Launch the new product features by Q3 2024</li>
      <li>Improve user engagement metrics by 25%</li>
      <li>Reduce system response time to under 200ms</li>
      <li>Implement automated testing coverage of 85%</li>
    </ul>

    <h3 class="text-white text-xl font-medium mb-4">Project Timeline</h3>
    <ol class="text-gray-300 mb-6 list-decimal pl-6 space-y-2">
      <li>Phase 1: Planning and Requirements (Week 1-2)
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Gather stakeholder requirements</li>
          <li>Define project scope</li>
          <li>Create initial project timeline</li>
        </ul>
      </li>
      <li>Phase 2: Development (Week 3-8)
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Core feature implementation</li>
          <li>Integration testing</li>
          <li>Performance optimization</li>
        </ul>
      </li>
      <li>Phase 3: Testing and Deployment (Week 9-12)
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>User acceptance testing</li>
          <li>Security audit</li>
          <li>Production deployment</li>
        </ul>
      </li>
    </ol>

    <h3 class="text-white text-xl font-medium mb-4">Resource Allocation</h3>
    <p class="text-gray-300 mb-4">
      The project will require a cross-functional team with expertise in various domains.
      We'll need to ensure proper resource allocation across different phases of the project.
    </p>

    <div class="bg-[#2a2a2a] p-4 rounded-lg mb-6">
      <h4 class="text-white font-medium mb-2">Important Note</h4>
      <p class="text-gray-300">
        All team members should update their progress in the project management tool daily.
        Weekly sync meetings will be held every Monday at 10:00 AM EST.
      </p>
    </div>

    <h3 class="text-white text-xl font-medium mb-4">Risk Assessment</h3>
    <table class="w-full text-gray-300 mb-6">
      <thead>
        <tr class="border-b border-[#2a2a2a]">
          <th class="text-left py-2">Risk</th>
          <th class="text-left py-2">Impact</th>
          <th class="text-left py-2">Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-[#2a2a2a]">
          <td class="py-2">Resource constraints</td>
          <td class="py-2">High</td>
          <td class="py-2">Early resource planning and allocation</td>
        </tr>
        <tr class="border-b border-[#2a2a2a]">
          <td class="py-2">Technical debt</td>
          <td class="py-2">Medium</td>
          <td class="py-2">Regular code reviews and refactoring</td>
        </tr>
        <tr>
          <td class="py-2">Scope creep</td>
          <td class="py-2">High</td>
          <td class="py-2">Strict change management process</td>
        </tr>
      </tbody>
    </table>
  `);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleContentChange = useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      setContent(e.currentTarget.innerHTML);
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        document.execCommand("insertText", false, "    ");
      }
    },
    []
  );

  const handleFormatChange = useCallback((format: string) => {
    if (format.startsWith("font-weight-")) {
      const weight = format.replace("font-weight-", "");
      document.execCommand("styleWithCSS", false, "true");
      document.execCommand(
        "fontWeight",
        false,
        weight === "normal"
          ? "400"
          : weight === "medium"
          ? "500"
          : weight === "semibold"
          ? "600"
          : "700"
      );
      return;
    }

    switch (format) {
      case "align-left":
        document.execCommand("justifyLeft", false);
        break;
      case "align-center":
        document.execCommand("justifyCenter", false);
        break;
      case "align-right":
        document.execCommand("justifyRight", false);
        break;
    }
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* Main Content Area with Collapsible Sidebar */}
      <div className="h-full flex-grow bg-[#1a1a1a] ml-0 overflow-hidden flex">
        {/* Document Editor Area */}
        <div className="flex-grow flex flex-col h-full bg-[#1a1a1a] relative">
          <div className="sticky top-0 z-10">
            <EditorToolbar
              onFormatChange={handleFormatChange}
              onBack={onBack}
            />
          </div>

          {/* Document Content */}
          <div
            className="flex-grow mb-[-100px] pb-[100px] p-16 overflow-auto"
            ref={editorRef}
          >
            <div className="max-w-3xl mx-auto editor-content">
              <div
                contentEditable
                className="outline-none"
                dangerouslySetInnerHTML={{ __html: content }}
                onInput={handleContentChange}
                onKeyDown={handleKeyDown}
                suppressContentEditableWarning
              />
            </div>
          </div>

          {/* Document Footer */}
          <div className="sticky bottom-0 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                stiffness: 100,
                mass: 0.5,
                delay: 0.25,
              }}
              className="bg-[#222] border-t border-[#2a2a2a] p-3 flex justify-between items-center"
            >
              <div className="flex items-center text-gray-400 text-xs">
                <span>Last edited: Today, 2:45 PM</span>
                <span className="mx-2">•</span>
                <span>5 collaborators</span>
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
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
      </div>
    </div>
  );
}
