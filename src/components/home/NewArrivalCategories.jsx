
"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Accessories", slug: "accessories", image: "/shirt/shirt-2.jpg" },
  { name: "Panjabi", slug: "panjabi", image: "/shirt/shirt-2.jpg" },
  { name: "Polo T-Shirt", slug: "polo-t-shirt", image: "/shirt/shirt-2.jpg" },
  { name: "Pant", slug: "pant", image: "/shirt/shirt-2.jpg" },
  { name: "Half Sleeve T-Shirt", slug: "half-sleeve-t-shirt", image: "/shirt/shirt-2.jpg" },
  { name: "Shirt", slug: "shirt", image: "/shirt/shirt-2.jpg" },
];

export default function NewArrivalCategories() {
  return (
    <section className="max-w-7xl mx-auto py-10">


      <div className="bg-amber-50 shadow-2xl rounded-md border border-orange-100 py-4 mb-8 text-center">
        <h2 className="text-xl font-bold text-orange-500 tracking-widest uppercase">
          New Arrival
        </h2>
      </div>

      <div className="px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.slug}>
              <Link
                href={`/products?category=${cat.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Category label with lines on both sides */}
                <div className="flex items-center gap-2 px-3 py-2.5">
                  {/* fades from transparent (left) to orange (right, near text) */}
                  <span className="flex-1 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(to right, transparent, #f97316)" }}
                  />

                  <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase whitespace-nowrap">
                    {cat.name}
                  </span>

                  {/* fades from orange (left, near text) to transparent (right) */}
                  <span className="flex-1 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(to left, transparent, #f97316)" }}
                  />
                </div>

                {/* Image with padding so it floats inside the card */}
                <div className="px-3 pb-3">
                  <div className="relative w-full h-44 rounded-md overflow-hidden bg-gray-50">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}