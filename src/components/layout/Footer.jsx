import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white ">
            <div className="max-w-6xl mx-auto px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-3">Company</h3>
                    <p className="text-sm text-gray-400 hover:text-white">
                        About Us
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-sm">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/products" className="hover:text-white">Terms & Conditions</Link></li>
                        <li><Link href="/products?category=6" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/products?category=6" className="hover:text-white">Payment Policy</Link></li>
                        <li><Link href="/products?category=6" className="hover:text-white">Shipping Policy</Link></li>
                        <li><Link href="/products?category=6" className="hover:text-white">Return & Refund Policy</Link></li>
                    </ul>
                </div>



                <div>
                    <h4 className="font-semibold mb-3 text-sm">Head Office</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex gap-2">
                            <MapPin size={22} stroke="red"/>
                            <Link href="/account/login" className="hover:text-white">Akij Center, 97 Shaheed Tajuddin Ahmed Saroni,
                            Tejgaon I/A, Dhaka-1208</Link></li>
                        <li className="flex gap-2">
                            <Phone size={16} stroke="red" fill="red"/>
                            <Link href="/account/orders" className="hover:text-white">+8801755662545</Link></li>
                        <li className="flex gap-2">
                            <Mail size={16} stroke="red"/>
                            <Link href="/account/orders" className="hover:text-white">info@akijdynamics.com</Link></li>
                        <li><Link href="/account/orders" className="hover:text-white">Trade License No: TRAD/DNCC/010235/2025</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Akij+ Clothing. All rights reserved.
            </div>

            <p>© 2026 All Rights Reserved
            </p>
        </footer>
    );
}