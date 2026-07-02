// import ProductFilters from "@/app/products/ProductFilters";
// import ProductGrid from "@/app/products/ProductGrid";
// import { products } from "@/data/products";

// export default function ProductsPage() {
//   return (
//     <div className="bg-gray-100 min-h-screen mt-28">
//       <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6 items-start">

//         {/* Sidebar */}
//         <aside className="w-56 shrink-0 bg-white rounded-xl border border-gray-200 p-5">
//           <ProductFilters />
//         </aside>

//         {/* Main content */}
//         <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
//           <p className="text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
//             Showing{" "}
//             <span className="font-bold text-gray-900">1</span>
//             {" "}-{" "}
//             <span className="font-bold text-gray-900">12</span>
//             {" "}of{" "}
//             <span className="font-bold text-orange-500">113</span> products
//           </p>
//           <ProductGrid products={products} />
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductToolbar from "@/components/products/ProductToolbar";
import FilterPanel from "@/components/products/FilterPanel";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  const [sortValue, setSortValue] = useState("recommended");
  const [filterOpen, setFilterOpen] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterChange = (key, value) => {
    setActiveFilters((prev) => {
      const existing = prev[key] || [];
      return {
        ...prev,
        [key]: existing.includes(value)
          ? existing.filter((v) => v !== value)
          : [...existing, value],
      };
    });
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  const displayedProducts = useMemo(() => {
    let result = [...products];
    if (activeFilters.category?.length) {
      result = result.filter((p) => activeFilters.category.includes(p.category));
    }
    if (sortValue === "price_asc") result.sort((a, b) => a.price - b.price);
    if (sortValue === "price_desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [sortValue, activeFilters]);

  return (
    <div className="max-w-7xl mx-auto mt-40 px-4 py-6">

      {/* This should always be visible — if not, toolbar component has an error */}
      <div className="mb-4 p-2 bg-yellow-100 text-sm">
        Toolbar test: {displayedProducts.length} products loaded
      </div>

      <ProductToolbar
        totalCount={displayedProducts.length}
        sortValue={sortValue}
        onSortChange={setSortValue}
        onFilterOpen={() => setFilterOpen(true)}
        gridView={gridView}
        onGridViewChange={setGridView}
        activeFilterCount={activeFilterCount}
      />

      <FilterPanel
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearAll={() => setActiveFilters({})}
      />

      <div className={`grid gap-4 ${gridView ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} listView={!gridView} />
        ))}
      </div>
    </div>
  );
}