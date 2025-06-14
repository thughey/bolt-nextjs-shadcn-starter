"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import styles from "./file-uploader.module.css";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface FileItem {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: Date;
  url: string;
  dimensions?: { width: number; height: number };
  isLoading?: boolean;
}

interface FileTypeFilter {
  id: string;
  label: string;
  types: string[];
}

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onAction: (action: string) => void;
}

function ContextMenu({ x, y, onClose, onAction }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showConvertSubmenu, setShowConvertSubmenu] = useState(false);
  const convertButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleAction = (action: string) => {
    onAction(action);
    onClose();
  };

  const handleConvertFormat = (format: string) => {
    onAction(`convert-${format}`);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed bg-[#1a1a1a] border border-[#222] rounded-lg shadow-lg py-1 z-50 min-w-[160px]"
      style={{ top: y, left: x }}
    >
      <button
        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
        onClick={() => handleAction("delete")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Delete
      </button>
      <button
        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
        onClick={() => handleAction("duplicate")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Duplicate
      </button>
      <button
        className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
        onClick={() => handleAction("compress")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Compress
      </button>
      <div className="relative">
        <button
          ref={convertButtonRef}
          className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center justify-between"
          onMouseEnter={() => setShowConvertSubmenu(true)}
          onMouseLeave={() => setShowConvertSubmenu(false)}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            Convert
          </div>
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
        {showConvertSubmenu && (
          <div
            className="absolute left-full top-0 bg-[#1a1a1a] border border-[#222] rounded-lg shadow-lg py-1 min-w-[120px]"
            onMouseEnter={() => setShowConvertSubmenu(true)}
            onMouseLeave={() => setShowConvertSubmenu(false)}
          >
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
              onClick={() => handleConvertFormat("webp")}
            >
              <span className="w-4 h-4 mr-2 bg-blue-500 rounded-sm"></span>
              WebP
            </button>
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
              onClick={() => handleConvertFormat("avif")}
            >
              <span className="w-4 h-4 mr-2 bg-green-500 rounded-sm"></span>
              AVIF
            </button>
            <button
              className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-[#222] flex items-center"
              onClick={() => handleConvertFormat("gif")}
            >
              <span className="w-4 h-4 mr-2 bg-purple-500 rounded-sm"></span>
              GIF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const FILE_TYPE_FILTERS: FileTypeFilter[] = [
  { id: "all", label: "All", types: [] },
  {
    id: "images",
    label: "Images",
    types: ["image/jpeg", "image/png", "image/gif", "image/webp"],
  },
  {
    id: "docs",
    label: "Docs",
    types: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
  },
  {
    id: "video",
    label: "Video",
    types: ["video/mp4", "video/webm", "video/ogg"],
  },
];

// Helper function to get image dimensions
async function getImageDimensions(
  file: File
): Promise<{ width: number; height: number } | undefined> {
  if (!file.type.startsWith("image/")) return undefined;

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = () => {
      resolve(undefined);
    };
    img.src = URL.createObjectURL(file);
  });
}

export default function FileUploader() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  // Add refs for custom navigation arrows
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    fileId: string;
  } | null>(null);

  // Handle file selection
  const handleFileSelect = useCallback(
    async (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;

      try {
        setError(null);

        // Create file items with URLs immediately
        const fileItems = Array.from(selectedFiles).map((file) => {
          const url = URL.createObjectURL(file);
          return {
            id: crypto.randomUUID(),
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: new Date(file.lastModified),
            url,
            isLoading: true,
          };
        });

        // Add files to state immediately
        setFiles((prevFiles) => [...fileItems, ...prevFiles]);

        // Process each file
        for (let i = 0; i < fileItems.length; i++) {
          const fileItem = fileItems[i];
          const file = selectedFiles[i];

          // Add delay for staggered loading effect
          await new Promise((resolve) => setTimeout(resolve, i * 400));

          // Get dimensions for images
          const dimensions = file.type.startsWith("image/")
            ? await getImageDimensions(file)
            : undefined;

          // Update the file in state
          setFiles((prevFiles) =>
            prevFiles.map((f) =>
              f.id === fileItem.id ? { ...f, dimensions, isLoading: false } : f
            )
          );

          // Select first file
          if (i === 0) {
            setSelectedFile({ ...fileItem, dimensions, isLoading: false });
          }
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to process files"
        );
      }
    },
    []
  );

  // Handle drag and drop
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFileSelect(e.dataTransfer.files);
    },
    [handleFileSelect]
  );

  // Filter files based on search and type
  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Handle file deletion
  const handleDeleteFile = useCallback(
    (fileId: string) => {
      setFiles((prevFiles) => {
        const fileToDelete = prevFiles.find((f) => f.id === fileId);
        if (fileToDelete) {
          URL.revokeObjectURL(fileToDelete.url);
        }
        const newFiles = prevFiles.filter((f) => f.id !== fileId);
        if (selectedFile?.id === fileId) {
          setSelectedFile(newFiles[0] || null);
        }
        return newFiles;
      });
    },
    [selectedFile]
  );

  // Handle zoom
  const handleZoom = useCallback((level: number) => {
    setZoomLevel(Math.max(0.1, Math.min(3, level))); // Limit zoom between 0.1x and 3x
  }, []);

  // Cleanup URLs when component unmounts
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.url));
    };
  }, [files]);

  // Handle keyboard navigation in zoom mode
  useEffect(() => {
    if (!isZoomed || !selectedFile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredFiles.findIndex(
          (f) => f.id === selectedFile.id
        );
        const prevIndex =
          (currentIndex - 1 + filteredFiles.length) % filteredFiles.length;
        setSelectedFile(filteredFiles[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredFiles.findIndex(
          (f) => f.id === selectedFile.id
        );
        const nextIndex = (currentIndex + 1) % filteredFiles.length;
        setSelectedFile(filteredFiles[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, selectedFile, filteredFiles]);

  // Add new handlers for context menu actions
  const handleContextMenuAction = useCallback(
    (action: string) => {
      if (!contextMenu) return;

      switch (action) {
        case "delete":
          handleDeleteFile(contextMenu.fileId);
          break;
        case "duplicate":
          setFiles((prevFiles) => {
            const fileToDuplicate = prevFiles.find(
              (f) => f.id === contextMenu.fileId
            );
            if (!fileToDuplicate) return prevFiles;

            const newFile = {
              ...fileToDuplicate,
              id: crypto.randomUUID(),
              name: `${fileToDuplicate.name} (copy)`,
              url: URL.createObjectURL(new Blob([fileToDuplicate.url])),
            };
            return [newFile, ...prevFiles];
          });
          break;
        case "compress":
          // TODO: Implement compression logic
          console.log("Compress file:", contextMenu.fileId);
          break;
        case "convert-webp":
        case "convert-avif":
        case "convert-gif":
          const format = action.split("-")[1];
          console.log(`Convert file to ${format}:`, contextMenu.fileId);
          // TODO: Implement conversion logic
          break;
      }
    },
    [contextMenu, handleDeleteFile]
  );

  return (
    <div className="w-full h-screen bg-[#111] text-gray-300 flex flex-col overflow-hidden p-6 antialiased subpixel-antialiased">
      <div className="h-full w-full bg-[#111] flex overflow-hidden">
        {/* Sidebar / File Browser */}
        <div className="w-1/3 min-w-[350px] max-w-[350px] border border-[#1b1b1b] rounded-xl flex flex-col h-full bg-[#111] mr-4 overflow-hidden">
          {/* Header Section - Sticky */}
          <div className="flex justify-between items-center bg-[#1a1a1a] px-4 py-3 border-b border-[#222] sticky mb-1 top-0 z-10">
            <h2 className="text-white text-regular font-regular">My Files</h2>
            <button
              className="bg-[#222] border border-[#292929] text-gray-300 p-1.5 rounded-lg hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white"
              onClick={() => fileInputRef.current?.click()}
            >
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </div>

          {/* Search/Filter Bar - Sticky */}
          <div className="relative p-3 bg-[#111] top-[0px] z-10">
            <Input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1a1a] text-gray-200 rounded-lg py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400 border border-[#222]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 absolute left-6 top-6"
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

          {/* Recent Files Section - Scrollable */}
          <div className="flex-grow overflow-y-auto p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-400 text-sm font-regular">
                Uploaded Files
              </h3>
              <button className="text-gray-400 hover:text-gray-300 text-xs flex items-center">
                <span>View All</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 ml-1"
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
            </div>

            {/* Empty State */}
            {filteredFiles.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-310px)] text-gray-300 border border-[#1b1b1b] bg-[#131313] rounded-xl p-4 text-center">
                <div className="w-16 h-16 mb-4 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-md font-medium text-gray-300 mb-1">
                  No files uploaded yet
                </h3>
                <p className="text-sm text-gray-400 mb-4 max-w-[250px]">
                  Upload your first file by dragging and dropping it here or
                  clicking below
                </p>
                <button
                  className="bg-[#1a1a1a] border border-[#222] text-gray-300 px-4 py-2 rounded-md text-sm flex items-center hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
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
                  Upload Files
                </button>
              </div>
            )}

            {/* File Items */}
            {filteredFiles.map((file) => (
              <div
                key={file.id}
                className={`file-item bg-[#1a1a1a] border border-[#222] rounded-lg p-2 mb-1.5 cursor-pointer transition-all duration-200 ${
                  selectedFile?.id === file.id ? "bg-[#222] border-[#333]" : ""
                }`}
                onClick={() => {
                  if (!file.isLoading) {
                    setSelectedFile(file);
                    const fileIndex = filteredFiles.findIndex(
                      (f) => f.id === file.id
                    );
                    if (mainSwiperRef.current && fileIndex !== -1) {
                      mainSwiperRef.current.slideTo(fileIndex);
                    }
                  }
                }}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextMenu({
                    x: e.clientX,
                    y: e.clientY,
                    fileId: file.id,
                  });
                }}
              >
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded bg-purple-500 flex items-center justify-center mr-2.5 file-icon overflow-hidden relative">
                    {file.type.startsWith("image/") ? (
                      <div className="w-full h-full relative">
                        <img
                          key={`${file.id}-${file.url}`}
                          src={file.url}
                          alt={file.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const parent = target.parentElement;
                            if (parent) {
                              target.style.display = "none";
                              parent.classList.add("bg-purple-500");
                              parent.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              `;
                            }
                          }}
                        />
                        {file.isLoading && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          </div>
                        )}
                      </div>
                    ) : file.type.startsWith("video/") ? (
                      <video
                        src={file.url}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-purple-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
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
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-[2px]">
                      <span className="text-gray-300 text-xs truncate">
                        {file.name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {file.isLoading ? (
                          <div className="h-3 w-12 bg-[#222] rounded animate-pulse"></div>
                        ) : (
                          `${(file.size / 1024 / 1024).toFixed(1)} MB`
                        )}
                      </span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">
                        {file.isLoading ? (
                          <div className="h-3 w-20 bg-[#222] rounded animate-pulse"></div>
                        ) : (
                          file.lastModified.toLocaleDateString()
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Storage Info - Sticky Bottom */}
          <div className="p-3 border-t bg-[#1a1a1a] border-[#222]  sticky bottom-0">
            <div className="text-xs text-gray-400">
              <span className="font-medium">Storage:</span>{" "}
              {files.length > 0 ? (
                <>
                  {(
                    files.reduce((acc, file) => acc + file.size, 0) /
                    1024 /
                    1024
                  ).toFixed(2)}{" "}
                  MB
                  <span className="ml-1 text-gray-500">
                    (
                    {(
                      files.reduce((acc, file) => acc + file.size, 0) /
                      1024 /
                      1024 /
                      1024
                    ).toFixed(2)}{" "}
                    GB)
                  </span>
                </>
              ) : (
                "0 MB"
              )}{" "}
              / 10 GB
            </div>
          </div>
        </div>

        {/* Main Image Preview Area */}
        <div className="w-2/3 flex flex-col p-4 h-full">
          {/* Header with Settings - Sticky */}
          <div className="flex justify-between items-center mb-4 bg-[#111] sticky top-0 z-10">
            <h2 className="text-white text-regular font-regular">
              File Preview
            </h2>
            <div className="flex space-x-2">
              <button
                className="bg-[#1a1a1a] border border-[#222] text-gray-300 p-1.5 rounded-lg hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white"
                onClick={() => fileInputRef.current?.click()}
              >
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
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button className="bg-[#1a1a1a] border border-[#222] text-gray-300 p-1.5 rounded-lg hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white">
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
              <button className="bg-[#1a1a1a] border border-[#222] text-gray-300 p-1.5 rounded-lg hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Preview Area - Swiper */}
          <div
            ref={dropZoneRef}
            className={`bg-[#0a0a0a] rounded-xl flex-grow flex items-center justify-center mb-4 relative overflow-hidden min-h-[300px] border border-[#1b1b1b] ${
              isDragging ? styles.dragActive : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {/* Custom navigation arrows */}
            {filteredFiles.length > 0 && (
              <div className="absolute right-2 bottom-2 z-20 flex flex-col space-y-2">
                <button
                  ref={prevRef}
                  className="bg-[#1a1a1a] border border-[#222] text-white p-2 rounded-lg shadow hover:bg-[#222] hover:border-[#333] focus:outline-none"
                  aria-label="Previous"
                  type="button"
                >
                  <svg
                    className="h-6 w-6"
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
                <button
                  ref={nextRef}
                  className="bg-[#1a1a1a] border border-[#222] text-white p-2 rounded-lg shadow hover:bg-[#222] hover:border-[#333] focus:outline-none"
                  aria-label="Next"
                  type="button"
                >
                  <svg
                    className="h-6 w-6"
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
            )}
            {filteredFiles.length > 0 ? (
              <Swiper
                modules={[Thumbs, Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                loop={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : undefined,
                  multipleActiveThumbs: false,
                }}
                onSwiper={(swiper) => {
                  mainSwiperRef.current = swiper;
                }}
                onInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation.prevEl = prevRef.current;
                  // @ts-ignore
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                  mainSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  if (
                    filteredFiles.length > 0 &&
                    filteredFiles[swiper.realIndex]
                  ) {
                    setSelectedFile(filteredFiles[swiper.realIndex]);
                  }
                }}
                initialSlide={
                  selectedFile
                    ? filteredFiles.findIndex((f) => f.id === selectedFile.id)
                    : 0
                }
                className="w-full h-full"
              >
                {filteredFiles.map((file) => (
                  <SwiperSlide key={file.id}>
                    {file.type.startsWith("video/") ? (
                      <video
                        src={file.url}
                        controls
                        className="w-full h-full object-contain mx-auto bg-black"
                        style={{ transform: `scale(${zoomLevel})` }}
                      />
                    ) : (
                      <img
                        src={file.url}
                        alt={file.name}
                        className="w-full h-full object-contain mx-auto"
                        style={{ transform: `scale(${zoomLevel})` }}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-gray-500 bg-[#1a1a1aa7] rounded-xl text-center w-full h-full flex items-center justify-center">
                <p>
                  Drag and drop new files here or <br /> click the upload button
                </p>
              </div>
            )}
          </div>

          {/* Thumbnails Row - Swiper Thumbs */}
          {filteredFiles.length > 0 && (
            <div className="bg-[#111] mb-4 flex items-center">
              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                loop={true}
                slidesPerView={Math.min(filteredFiles.length || 1, 6)}
                spaceBetween={4}
                className="w-full"
                slideToClickedSlide={true}
              >
                {filteredFiles.map((file, index) => (
                  <SwiperSlide
                    key={file.id}
                    className={`!w-16 !h-16 flex-none rounded-lg border overflow-hidden transition-opacity duration-300 cursor-pointer ${
                      selectedFile?.id === file.id
                        ? "border-[#aaaaaa] opacity-100 swiper-slide-thumb-active"
                        : "border-transparent hover:border-[#aaaaaa] opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => {
                      mainSwiperRef.current?.slideTo(index);
                      setSelectedFile(file);
                    }}
                  >
                    <div className="w-full h-full aspect-square flex items-center justify-center overflow-hidden bg-black">
                      {file.type.startsWith("video/") ? (
                        <video
                          src={file.url}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          src={file.url}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* File Info - Sticky */}
          {selectedFile && (
            <div className="bg-[#1a1a1a] border border-[#222] rounded-xl p-4 mb-4 sticky bottom-[64px] z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-sm font-medium">
                  {selectedFile.name}
                </span>
                <span className="text-gray-400 text-xs">
                  {(selectedFile.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedFile.dimensions && (
                  <div>
                    <span className="text-gray-500">Dimensions:</span>
                    <span className="text-gray-300 ml-1">
                      {selectedFile.dimensions.width} x{" "}
                      {selectedFile.dimensions.height} px
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-gray-500">Created:</span>
                  <span className="text-gray-300 ml-1">
                    {selectedFile.lastModified.toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Format:</span>
                  <span className="text-gray-300 ml-1">
                    {selectedFile.type.split("/")[1].toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Modified:</span>
                  <span className="text-gray-300 ml-1">
                    {selectedFile.lastModified.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Bar - Sticky */}
          {filteredFiles.length > 0 && (
            <div className="mt-auto flex justify-between bg-[#111] sticky bottom-0 z-10">
              <button
                className="bg-[#1a1a1a] border border-[#222] text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white"
                onClick={() =>
                  selectedFile && handleDeleteFile(selectedFile.id)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Delete</span>
              </button>
              <div className="flex space-x-2">
                <button className="bg-[#1a1a1a] border border-[#222] text-gray-300 px-4 py-2 rounded-lg text-sm flex items-center hover:bg-[#222] hover:border-[#333] hover:text-white active:bg-[#333] active:border-[#6366f1] active:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Edit</span>
                </button>
                <button
                  className="bg-blue-700 border border-[#222] text-white px-4 py-2 rounded-lg text-sm flex items-center hover:bg-blue-800 active:bg-blue-900"
                  onClick={() =>
                    selectedFile && window.open(selectedFile.url, "_blank")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Zoom Overlay */}
      <div
        className={`fixed inset-0 zoom-overlay flex items-center justify-center z-50 ${
          isZoomed ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-95"
          onClick={() => setIsZoomed(false)}
        ></div>
        {selectedFile && (
          <div className="relative z-10 max-w-4xl max-h-screen p-4">
            {selectedFile.type.startsWith("video/") ? (
              <video
                src={selectedFile.url}
                controls
                autoPlay
                className="zoom-image max-h-[90vh] max-w-full object-contain bg-black"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            ) : (
              <img
                src={selectedFile.url}
                alt="Zoomed Preview"
                className="zoom-image max-h-[90vh] max-w-full object-contain"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            )}
            <button
              className="absolute top-4 right-4 bg-[#1a1a1a] border border-[#222] bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-lg"
              onClick={() => setIsZoomed(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {filteredFiles.map((file, index) => (
                <button
                  key={file.id}
                  className={`bg-white w-2 h-2 rounded-full ${
                    selectedFile.id === file.id ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setSelectedFile(file)}
                />
              ))}
            </div>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] border border-[#222] bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-lg"
              onClick={() => {
                const currentIndex = filteredFiles.findIndex(
                  (f) => f.id === selectedFile.id
                );
                const prevIndex =
                  (currentIndex - 1 + filteredFiles.length) %
                  filteredFiles.length;
                setSelectedFile(filteredFiles[prevIndex]);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#1a1a1a] border border-[#222] bg-opacity-80 hover:bg-opacity-100 text-white p-2 rounded-lg"
              onClick={() => {
                const currentIndex = filteredFiles.findIndex(
                  (f) => f.id === selectedFile.id
                );
                const nextIndex = (currentIndex + 1) % filteredFiles.length;
                setSelectedFile(filteredFiles[nextIndex]);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
          </div>
        )}
      </div>

      {/* Add error message display */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {error}
        </div>
      )}

      {/* Add context menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onAction={handleContextMenuAction}
        />
      )}
    </div>
  );
}
