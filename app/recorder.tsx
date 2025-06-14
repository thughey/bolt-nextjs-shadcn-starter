"use client";
import React, { useState, useRef, useEffect } from "react";

function Recorder() {
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Start or stop the timer based on isRecording
  useEffect(
    function handleTimer() {
      if (isRecording) {
        intervalRef.current = setInterval(() => {
          setSeconds((s) => s + 1);
        }, 1000);
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    },
    [isRecording]
  );

  function handleRestart() {
    setSeconds(0);
    setIsRecording(false);
  }

  function handlePlayPause() {
    setIsRecording((prev) => !prev);
  }

  // Format seconds as mm:ss
  function formatTime(secs: number): string {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  // Split time into array for slot animation
  const timeString = formatTime(seconds);
  const timeChars = timeString.split("");

  return (
    <>
      <div className="w-full max-w-[500px] min-h-screen flex flex-col items-center justify-center mx-auto">
        <div
          className="w-full flex flex-col rounded-[24px] overflow-clip bg-black"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          {/* Timer and Status */}
          <div className="bg-black px-6 pt-12 pb-6">
            <div className="text-6xl font-bold text-white text-center mb-2 flex justify-center gap-0.5">
              {timeChars.map((char, idx) =>
                char === ":" ? (
                  <span
                    key={idx}
                    className="mx-1 flex items-center justify-center select-none h-[72px] -translate-y-1.5"
                  >
                    :
                  </span>
                ) : (
                  <span key={idx} className="flex items-center justify-center">
                    <SlotDigit digit={char} />
                  </span>
                )
              )}
            </div>
            <div className="flex items-center justify-center">
              <span className="h-3 w-3 bg-red-500 rounded-full mr-2 pulse-animation"></span>
              <p className="text-red-500 font-medium">Recording in progress</p>
            </div>
          </div>
          {/* Waveform Visualization - Enlarged and Centered */}
          <div className="flex-1 flex items-center px-4 py-3 bg-black">
            <div className="w-full bg-black rounded-2xl p-4">
              <div className="flex items-end justify-between h-8 w-full">
                {Array.from({ length: 38 }).map((_, i) => {
                  const heights = [
                    5, 10, 12, 16, 10, 14, 20, 16, 8, 12, 18, 14, 10, 6, 12, 16,
                    14, 8, 12, 18, 10, 6, 14, 12, 8, 14, 16, 10, 6, 12, 14, 10,
                    14, 8, 6, 12, 10, 5,
                  ];
                  return (
                    <div
                      key={i}
                      className="wave-bar bg-white w-1.5 rounded-full"
                      style={
                        {
                          height: `${heights[i]}px`,
                          ["--i" as any]: i,
                        } as React.CSSProperties
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Instruction Text */}
          <div className="bg-black px-6 pb-4">
            <p className="text-gray-400 text-sm text-center">
              Speak clearly into your microphone
            </p>
          </div>
          {/* Controls in a Row */}
          <div className="bg-white rounded-t-3xl pt-8 pb-6">
            {/* Recording Controls */}
            <div className="flex justify-center items-center px-6 mb-8 gap-6">
              {/* Restart Button */}
              <button
                className="flex flex-col items-center"
                onClick={handleRestart}
              >
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Restart</span>
              </button>
              {/* Pause/Record Button */}
              <button
                className="flex flex-col items-center mx-4"
                onClick={handlePlayPause}
              >
                <div
                  className={`w-20 h-20 bg-black rounded-full flex items-center justify-center mb-2 pulse-animation`}
                >
                  {isRecording ? (
                    // Pause icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M8 6v12m8-12v12"
                      />
                    </svg>
                  ) : (
                    // Standard Play icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 5.5v13a1 1 0 0 0 1.52.86l10.01-6.5a1 1 0 0 0 0-1.72l-10.01-6.5A1 1 0 0 0 7 5.5z" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-gray-600">
                  {isRecording ? "Pause" : "Play"}
                </span>
              </button>
              {/* Done Button */}
              <button className="flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Done</span>
              </button>
            </div>
            {/* Recording Options as Toggles */}
            <div className="px-6 mb-6">
              <div className="flex justify-between items-center mb-1 bg-gray-100 p-4 rounded-t-xl">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">Quality</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">High</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-b-xl">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">Format</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-3">MP3</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="px-6">
              <button className="w-full py-4 bg-black rounded-xl text-white font-medium hover:bg-gray-900 active:bg-gray-800 transition-colors mb-3">
                Save Recording
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .slot-animate {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .flip-out {
          animation: flipOut 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .flip-in {
          animation: flipIn 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        @keyframes flipOut {
          0% {
            opacity: 1;
            transform: rotateX(0deg);
          }
          40% {
            opacity: 0;
          }
          80% {
            transform: rotateX(95deg);
          }
          100% {
            opacity: 0;
            transform: rotateX(90deg);
          }
        }
        @keyframes flipIn {
          0% {
            opacity: 0;
            transform: rotateX(-90deg);
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: rotateX(-5deg);
          }
          100% {
            opacity: 1;
            transform: rotateX(0deg);
          }
        }
        .fade-out {
          animation: fadeOut 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .fade-in {
          animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 0;
            transform: scale(0.75);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

// SlotDigit component for animated digit
function SlotDigit({ digit }: { digit: string }) {
  const [displayDigit, setDisplayDigit] = useState(digit);
  const [prevDigit, setPrevDigit] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (digit !== displayDigit) {
      setPrevDigit(displayDigit);
      setDisplayDigit(digit);
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setPrevDigit(null);
        setIsAnimating(false);
      }, 300); // Animation duration
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digit]);

  return (
    <span className="relative inline-block w-[40px] h-[72px] align-middle">
      {/* Previous digit fades out */}
      {prevDigit !== null && (
        <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-6xl font-bold fade-out">
          {prevDigit}
        </span>
      )}
      {/* Current digit fades in */}
      <span
        className={`absolute left-0 top-0 w-full h-full flex items-center justify-center text-6xl font-bold ${
          isAnimating ? "fade-in" : ""
        }`}
      >
        {displayDigit}
      </span>
    </span>
  );
}

export default Recorder;
