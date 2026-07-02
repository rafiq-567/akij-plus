"use client";
import { X } from "lucide-react";

const filters = [
  {
    label: "Category",
    key: "category",
    options: ["Shirt", "Half Sleeve T-shirt", "Polo T-shirt", "Pant", "Panjabi", "Accessories"],
  },
  {
    label: "Price Range",
    key: "price",
    options: ["Under ৳500", "৳500 - ৳1000", "৳1000 - ৳2000", "Above ৳2000"],
  },
  {
    label: "Color",
    key: "color",
    options: ["Black", "White", "Blue", "Green", "Red", "Brown"],
  },
  {
    label: "Size",
    key: "size",
    options: ["S", "M", "L", "XL", "XXL"],
  },
];

export default function FilterPanel({ isOpen, onClose, activeFilters, onFilterChange, onClearAll }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b sticky top-0 bg-white">
          <h2 className="font-semibold text-base">Filter</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={onClearAll}
              className="text-sm text-gray-500 underline hover:text-black"
            >
              Clear All
            </button>
            <button onClick={onClose}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Groups */}
        <div className="px-5 py-4 space-y-6">
          {filters.map((filter) => (
            <div key={filter.key}>
              <h3 className="font-semibold text-sm mb-3">{filter.label}</h3>
              <div className="space-y-2">
                {filter.options.map((option) => {
                  const isActive = activeFilters[filter.key]?.includes(option);
                  return (
                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => onFilterChange(filter.key, option)}
                        className={`w-4 h-4 border-2 flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-black border-black"
                            : "border-gray-400 group-hover:border-black"
                        }`}
                      >
                        {isActive && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-black">{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}