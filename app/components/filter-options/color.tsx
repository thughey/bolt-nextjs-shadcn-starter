"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React, { useState } from "react";

const COLORS = [
  { name: "Black", className: "bg-black ring-2 ring-offset-2 ring-black" },
  { name: "White", className: "bg-white border border-gray-300" },
  { name: "Red", className: "bg-red-500" },
  { name: "Blue", className: "bg-blue-500" },
  { name: "Green", className: "bg-green-500" },
  { name: "Yellow", className: "bg-yellow-400" },
  { name: "Purple", className: "bg-purple-500" },
  { name: "Orange", className: "bg-orange-500" },
  { name: "Pink", className: "bg-pink-400" },
  { name: "Gray", className: "bg-gray-400" },
];

export function Color() {
  const [open, setOpen] = useState<string>("");
  const previewColors = COLORS.slice(0, 4);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={open}
      onValueChange={(v) => setOpen(v || "")}
    >
      <AccordionItem value="color">
        <AccordionTrigger className="px-0 border-0">
          <span className="text-base font-medium">Color</span>
        </AccordionTrigger>
        {/* Always show preview row */}
        <div className="flex items-center gap-2 px-0 pb-4 pt-2">
          {previewColors.map((color) => (
            <div
              key={color.name}
              className={`w-6 h-6 rounded-md cursor-pointer ${color.className}`}
              title={color.name}
            />
          ))}
        </div>
        <AccordionContent>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color) => (
              <div
                key={color.name}
                className={`w-6 h-6 rounded-md cursor-pointer ${color.className}`}
                title={color.name}
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
