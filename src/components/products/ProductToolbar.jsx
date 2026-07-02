"use client";
import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import SortDropdown from "./SortDropdown";

export default function ProductToolbar({
  totalCount,
  sortValue,
  onSortChange,
  onFilterOpen,
  gridView,
  onGridViewChange,
  activeFilterCount,
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 mb-6">
      <p className="text-sm text-gray-500">
        Showing <span className="text-black font-medium">{totalCount}</span> products
      </p>

      <div className="flex items-center gap-3">
        <SortDropdown value={sortValue} onChange={onSortChange} />

        <button
          onClick={onFilterOpen}
          className="relative flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm font-medium hover:border-black transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
          {activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => onGridViewChange(true)}
            className={`p-2 ${gridView ? "bg-black text-white" : "text-gray-400 hover:text-black"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onGridViewChange(false)}
            className={`p-2 ${!gridView ? "bg-black text-white" : "text-gray-400 hover:text-black"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}