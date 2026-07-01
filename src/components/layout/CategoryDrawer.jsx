"use client";
import { X, Plus } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Men",
    count: 113,
    slug: "men",
    subcategories: [
      { name: "Show All", count: 113, slug: "men" },
      { name: "Shirt", count: 19, slug: "shirt" },
      { name: "Half Sleeve T-shirt", count: 15, slug: "half-sleeve-t-shirt" },
      { name: "Pant", count: 7, slug: "pant" },
      { name: "Polo T-shirt", count: 18, slug: "polo-t-shirt" },
      { name: "Panjabi", count: 23, slug: "panjabi" },
      { name: "Accessories", count: 31, slug: "accessories" },
    ],
  },
];

export default function CategoryDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
          <h2 className="text-base font-semibold tracking-wide">Categories</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category list */}
        <div className="overflow-y-auto h-full pb-20">
          {categories.map((cat) => (
            <div key={cat.slug}>
              {/* Parent category */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
                <Link
                  href={`/products?category=${cat.slug}`}
                  onClick={onClose}
                  className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                >
                  {cat.name}
                </Link>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded">
                  {cat.count}
                </span>
              </div>

              {/* Subcategories */}
              {cat.subcategories.map((sub) => (
                <div
                  key={sub.slug}
                  className="flex items-center justify-between px-6 py-2.5 border-b border-gray-800 hover:bg-gray-800 transition-colors"
                >
                  <Link
                    href={`/products?category=${sub.slug}`}
                    onClick={onClose}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex-1"
                  >
                    {sub.name}
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{sub.count}</span>
                    <button className="text-gray-500 hover:text-orange-400 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}