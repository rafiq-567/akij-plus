import Image from "next/image";
import { Mail, Phone, Clock } from "lucide-react";
import Link from "next/link";

export default function PaymentSystem() {
    return (
        <section>
            <div className="bg-[#f5f8fc] py-10">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

                    {/* Left Card */}

                    <div className="rounded-3xl bg-white p-10 shadow-xl">
                        <div className="flex items-center gap-4">
                            <Mail className="text-orange-500" size={20} />

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
                                <Phone fill="red" stroke="red" size={16} />
                                <span className="text-xs">+8801755662545</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock className="text-orange-500" size={16} />
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

                        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">

                            <Image
                                className="hover:scale-110 transition-transform duration-300"
                                src="/payment logo/sslcommerz.png"
                                alt="sslcommerz"
                                loading="eager"
                                width={30}
                                height={35}
                              style={{
                                    width: "40px",
                                    height: "auto"
                                }}
                            />

                            <Image
                                className="hover:scale-110 transition-transform duration-300"
                                src="/payment logo/mastercard.png"
                                alt="mastercard"
                                loading="eager"
                                width={30}
                                height={25}
                              style={{
                                    width: "30px",
                                    height: "auto"
                                }}
                            />

                            <Image
                                className="hover:scale-110 transition-transform duration-300"
                                src="/payment logo/bkash.png"
                                alt="bkash"
                                loading="eager"
                                width={30}
                                height={25}
                                style={{
                                    width: "40px",
                                    height: "auto"
                                }}
                            />

                            <Link href="https://nagad.com.bd/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="hover:scale-110 transition-transform duration-300"
                                    src="/payment logo/nagad.png"
                                    alt="nagad"
                                    loading="eager"
                                    width={30}
                                    height={25}
                                   style={{
                                    width: "30px",
                                    height: "auto"
                                }}
                                />
                            </Link>

                            <Image
                                className="hover:scale-110 transition-transform duration-300"
                                src="/payment logo/rocket.png"
                                alt="rocket"
                                loading="eager"
                                width={30}
                                height={25}
                               style={{
                                    width: "30px",
                                    height: "auto"
                                }}
                            />

                            <Image
                                className="hover:scale-110 transition-transform duration-300"
                                src="/payment logo/visa.png"
                                alt="visa"
                                loading="eager"
                                width={30}
                                height={25}
                                style={{
                                    width: "30px",
                                    height: "auto"
                                }}
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}