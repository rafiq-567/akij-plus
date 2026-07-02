"use client";
import { useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function BestSellers() {
  const bestSellers = useMemo(() => {
    return products.filter((p) => p.bestSeller === true);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-30">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-600">Best Sellers</h1>
        <p className="text-sm text-gray-500 mt-2">
          Top rated products loved by our customers
        </p>
        <div className="w-16 h-0.5 bg-indigo-500 mx-auto mt-3" />
      </div>

      {/* Empty State */}
      {bestSellers.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg py-20 flex flex-col items-center justify-center gap-4">
          <ShoppingCart className="w-16 h-16 text-gray-300" />
          <h2 className="text-lg font-semibold text-gray-800">
            No Best Sellers Yet
          </h2>
          <p className="text-sm text-gray-400">
            Our best selling products will appear here soon.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 text-white text-sm px-6 py-2.5 rounded hover:bg-blue-700 transition-colors"
          >
            Browse All Products
          </Link>
        </div>
      ) : (
        /* Product Grid */
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}