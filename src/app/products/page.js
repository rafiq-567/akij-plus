
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
    <div className="max-w-7xl mt-30 mx-auto px-4 py-6">

    
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