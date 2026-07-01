"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full aspect-[3/4] bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-top"
        />
        <button
          onClick={() => setWished((prev) => !prev)}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wished ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-base font-bold text-gray-900">
            ৳{product.price.toLocaleString()}
          </span>
          {product.save && (
            <span className="text-xs font-semibold bg-gray-900 text-white px-2 py-0.5 rounded-full">
              Save ৳{product.save.toLocaleString()}
            </span>
          )}
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-auto text-center bg-black text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}