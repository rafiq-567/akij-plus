import Image from "next/image";

export default function CategoryBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between rounded-2xl bg-[linear-gradient(135deg,_#f2f5fa_0%,_#edf3fb_30%,_#e8efe9_60%,_#dce1f1_100%)] px-14 py-12 shadow-[0_12px_30px_rgba(17,24,39,0.08),0_2px_8px_rgba(17,24,39,0.04)]">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-[46px] font-extrabold uppercase tracking-wide text-[#22344d] leading-tight">
            Welcome To Our Categories
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Explore our latest products and hand-picked items for you!
          </p>

          <button className="mt-8 rounded-lg bg-[#0b1220] px-8 py-4 text-white font-semibold uppercase tracking-wide transition hover:bg-[#16263d]">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <Image
            src="/shirt/shirt-1.jpg"
            alt="Categories"
            width={420}
            height={260}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}