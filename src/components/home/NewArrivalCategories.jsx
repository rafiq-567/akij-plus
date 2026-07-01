

"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Accessories", slug: "accessories", image: "/shirt/shirt-1.jpg" },
  { name: "Panjabi", slug: "panjabi", image: "/shirt/shirt-1.jpg" },
  { name: "Polo T-Shirt", slug: "polo-t-shirt", image: "/shirt/shirt-1.jpg" },
  { name: "Pant", slug: "pant", image: "/shirt/shirt-1.jpg" },
  { name: "Half Sleeve T-Shirt", slug: "half-sleeve-t-shirt", image: "/shirt/shirt-1.jpg" },
  { name: "Shirt", slug: "shirt", image: "/shirt/shirt-1.jpg" },
];

export default function NewArrivalCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-amber-50 rounded-md py-3 mb-8 text-center">
        <h2 className="text-xl font-bold text-orange-500 tracking-wide">
          NEW ARRIVAL
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        className="!pb-4"
      >
      {categories.map((cat) => (
  <SwiperSlide key={cat.slug}>
    <Link
      href={`/products?category=${cat.slug}`}
      className="group flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
    >
     
      <div className="py-3 px-2 text-center border-b border-gray-100">
        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
          {cat.name}
        </span>
      </div>

      <div className="relative w-full aspect-[3/4] bg-gray-50">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
  </SwiperSlide>
))}
      </Swiper>
    </section>
  );
}