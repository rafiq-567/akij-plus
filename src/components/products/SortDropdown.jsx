"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "New Arrivals", value: "newest" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = sortOptions.find((o) => o.value === value) || sortOptions[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm font-medium hover:border-black transition-colors"
      >
        Sort: {selected.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 shadow-lg z-30">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => { onChange(option.value); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                value === option.value ? "font-semibold text-black" : "text-gray-600"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}