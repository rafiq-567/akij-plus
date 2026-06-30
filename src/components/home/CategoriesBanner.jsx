import Image from "next/image";
import Link from "next/link";

export default function CategoriesBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-10">
      <div className="relative bg-zinc-100 rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-10 md:p-14 z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome to our categories
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our latest products and hand-picked items for you!
          </p>
          <Link
            href="/products"
            className="inline-block bg-black text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>

        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/products/categories-banner.jpg"
            alt="Categories"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}