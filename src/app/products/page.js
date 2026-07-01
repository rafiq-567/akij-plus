import ProductFilters from "@/app/products/ProductFilters";
import ProductGrid from "@/app/products/ProductGrid";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="bg-gray-100 min-h-screen mt-32">
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6 items-start">

        {/* Sidebar */}
        <aside className="w-56 shrink-0 bg-white rounded-xl border border-gray-200 p-5">
          <ProductFilters />
        </aside>

        {/* Main content */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
            Showing{" "}
            <span className="font-bold text-gray-900">1</span>
            {" "}-{" "}
            <span className="font-bold text-gray-900">12</span>
            {" "}of{" "}
            <span className="font-bold text-orange-500">113</span> products
          </p>
          <ProductGrid products={products} />
        </div>

      </div>
    </div>
  );
}