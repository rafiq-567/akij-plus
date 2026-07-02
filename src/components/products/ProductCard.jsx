"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product, listView = false }) {
  const [wishlisted, setWishlisted] = useState(false);

  if (listView) {
    return (
      <div className="flex gap-4 border border-gray-200 p-3 hover:shadow-md transition-shadow">
        <div className="relative w-32 h-40 flex-shrink-0">
          <Image
            src={product.image || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 py-1">
          <div>
            <h3 className="font-medium text-sm text-gray-900">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {product.salePrice ? (
                <>
                  <span className="text-sm font-semibold text-black">৳{product.salePrice}</span>
                  <span className="text-xs text-gray-400 line-through">৳{product.price}</span>
                </>
              ) : (
                <span className="text-sm font-semibold text-black">৳{product.price}</span>
              )}
            </div>
            <button className="text-xs border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Sale badge */}
        {product.salePrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 font-medium">
            SALE
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`}
          />
        </button>

        {/* View Details hover overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-xs text-center py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 px-1">
        <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          {product.salePrice ? (
            <>
              <span className="text-sm font-semibold text-black">৳{product.salePrice}</span>
              <span className="text-xs text-gray-400 line-through">৳{product.price}</span>
              <span className="text-xs text-green-600 font-medium">
                Save ৳{product.price - product.salePrice}
              </span>
            </>
          ) : (
            <span className="text-sm font-semibold text-black">৳{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}