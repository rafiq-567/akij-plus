"use client";
import { useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

// Mark products as best sellers in your data, or just hardcode IDs for now
const bestSellerIds = [140, 141, 142, 143]; // add whichever product IDs are best sellers

export default function BestSellersPage() {
 const bestSellers = useMemo(() => {
  return products.filter((p) => p.bestSeller === true);
}, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mt-28">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Best Sellers</h1>
        <p className="text-sm text-gray-500 mt-1">
          Our most popular picks loved by customers
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}