import { showcaseCategories } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="relative w-full aspect-square bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-xs font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-sm font-bold text-gray-900">
            ৳{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategorySection({ category }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex gap-4">

        {/* Left — large featured image */}
        <div className="w-72 shrink-0 flex flex-col">
          <div className="relative flex-1 min-h-[400px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={category.featuredImage}
              alt={category.name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="bg-white border border-gray-100 rounded-b-xl py-3 text-center">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">
              {category.name}
            </span>
          </div>
        </div>

        {/* Right — 2 rows x 4 cols product grid */}
        <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-3">
          {category.products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function CategoryShowcase({ categories }) {
  return (
    <div className="bg-gray-50 divide-y divide-gray-100">
      {showcaseCategories.map((category) => (
        <CategorySection key={category.name} category={category} />
      ))}
    </div>
  );
}