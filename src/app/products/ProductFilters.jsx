"use client";
import { useState } from "react";
import { Settings2, RotateCcw, ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Men", count: 113, slug: "men",
    subcategories: [
      { name: "Shirt", count: 19, slug: "shirt", children: [{ name: "Casual Shirt", count: 10 }, { name: "Formal Shirt", count: 9 }] },
      { name: "Half Sleeve T-shirt", count: 15, slug: "half-sleeve", children: [{ name: "Drop Shoulder T-Shirt", count: 8 }, { name: "T-Shirt", count: 7 }] },
      { name: "Pant", count: 7, slug: "pant", children: [{ name: "Denim Jeans", count: 4 }, { name: "Mens Denim Cargo Pant", count: 3 }] },
      { name: "Polo T-shirt", count: 18, slug: "polo", children: [{ name: "Sports T-shirt", count: 7 }, { name: "Classic", count: 11 }] },
      { name: "Panjabi", count: 23, slug: "panjabi", children: [{ name: "Premium Panjabi", count: 19 }, { name: "Printed Panjabi", count: 2 }, { name: "Regular Panjabi", count: 2 }] },
      { name: "Accessories", count: 31, slug: "accessories", children: [{ name: "Cap", count: 31 }] },
    ],
  },
];

export default function ProductFilters() {
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-purple-700 font-bold text-sm tracking-wide">
          <Settings2 className="w-4 h-4" />
          FILTERS
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors">
          <RotateCcw className="w-3 h-3" />
          Clear All
        </button>
      </div>

      {/* Categories heading */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
        <span className="text-sm font-bold text-gray-900">Categories</span>
        <span className="bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          1
        </span>
      </div>

      {categories.map((cat) => (
        <div key={cat.slug}>
          {/* Parent category */}
          <label className="flex items-center justify-between py-2 cursor-pointer">
            <span className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded bg-purple-700 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-bold text-purple-700">{cat.name}</span>
            </span>
            <span className="text-xs text-gray-400 font-medium">{cat.count}</span>
          </label>

          {/* Subcategories */}
          <div className="mt-1 space-y-0.5">
            {cat.subcategories.map((sub) => (
              <div key={sub.slug}>
                <button
                  onClick={() => toggle(sub.slug)}
                  className="flex items-center justify-between w-full py-1.5 pl-2 text-left hover:bg-gray-50 rounded transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 accent-purple-600 cursor-pointer rounded"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <span className="text-sm text-gray-700 font-medium">{sub.name}</span>
                  </span>
                  <span className="flex items-center gap-1 shrink-0">
                    <span className="text-xs text-gray-400">{sub.count}</span>
                    {sub.children?.length > 0 && (
                      <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${expanded[sub.slug] ? "rotate-180" : ""}`} />
                    )}
                  </span>
                </button>

                {expanded[sub.slug] && (
                  <div className="ml-7 mt-1 space-y-1 mb-1">
                    {sub.children?.map((child) => (
                      <label key={child.name} className="flex items-center justify-between py-1 cursor-pointer hover:bg-gray-50 rounded px-1">
                        <span className="flex items-center gap-2">
                          <input type="checkbox" className="w-3 h-3 accent-purple-600 cursor-pointer" />
                          <span className="text-xs text-gray-600">{child.name}</span>
                        </span>
                        <span className="text-xs text-gray-400">{child.count}</span>
                      </label>
                    ))}
                  </div>
                )}

                <div className="ml-2 border-b border-gray-50" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}