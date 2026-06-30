import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Accessories", slug: "accessories", image: "/products/accessories.jpg" },
  { name: "Panjabi", slug: "panjabi", image: "/products/panjabi.jpg" },
  { name: "Polo T-Shirt", slug: "polo-t-shirt", image: "/products/polo.jpg" },
  { name: "Pant", slug: "pant", image: "/products/pant.jpg" },
  { name: "Half Sleeve T-Shirt", slug: "half-sleeve-t-shirt", image: "/products/half-sleeve.jpg" },
  { name: "Shirt", slug: "shirt", image: "/products/shirt-category.jpg" },
];

export default function NewArrivalCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-[#ece5dd] shadow-xl rounded-md py-5 mb-8 text-center">
        <h2 className="text-3xl font-bold text-amber-700 tracking-wide">
          NEW ARRIVAL
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products?category=${cat.slug}`}
            className="group flex flex-col"
          >
            <div className="border-t-2 border-gray-800 mb-3 pt-2 text-center">
              <span className="text-xs font-semibold tracking-widest text-gray-700 uppercase">
                {cat.name}
              </span>
            </div>
            <div className="relative w-full aspect-square bg-gray-100 rounded-md overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}