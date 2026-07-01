import Image from "next/image";
import { Mail, Phone, Clock } from "lucide-react";

export default function PaymentSystem() {
  return (
    <section>
      {/* Top */}
      <div className=" text-center">
      </div>

      {/* Bottom */}
      <div className="bg-[#f5f8fc] py-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

          {/* Left Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" size={24} />

              <h3 className="text-xl font-bold text-[#183552]">
                Get Special Discounts
              </h3>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Subscribe to receive exclusive offers & updates directly in your
              inbox.
            </p>

            <div className="mt-2 space-y-1">

              <div className="flex items-center gap-3">
                <Phone className="text-orange-500" size={18} />
                <span className="text-xs">+8801755662545</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" size={18} />
                <span className="text-xs">Open 24/7</span>
              </div>

            </div>
          </div>

          {/* Right Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl text-center">

            <h3 className="text-xl font-bold text-[#183552]">
              Secure Payment Partners
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Safe, fast & trusted payment gateways
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">

              <Image
              className="hover:scale-110 transition-transform duration-300"
                src="/payment logo/mastercard.png"
                alt=""
                width={30}
                height={25}
              />

              <Image
                className="hover:scale-110 transition-transform duration-300"
                src="/payment logo/bkash.png"
                alt=""
                width={30}
                height={25}
              />

              <Image
                className="hover:scale-110 transition-transform duration-300"
                src="/payment logo/nagad.png"
                alt=""
                width={30}
                height={25}
              />

              <Image
                className="hover:scale-110 transition-transform duration-300"
                src="/payment logo/rocket.png"
                alt=""
                width={30}
                height={25}
              />

              <Image
                className="hover:scale-110 transition-transform duration-300"
                src="/payment logo/visa.png"
                alt=""
                width={30}
                height={25}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}