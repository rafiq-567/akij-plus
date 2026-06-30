"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    { id: 1, image: "/shirt.jpg", alt: "Fall Collection" },
    { id: 2, image: "/elegant-young-handsome-man.jpg", alt: "New Arrivals" },
    { id: 3, image: "/man-jacket-outside.jpg", alt: "Happy Hour Sale" },
    { id: 4, image: "/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man.jpg", alt: "Happy Hour Sale" },
];

export default function HeroBanner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        console.log("Interval started");
        const timer = setInterval(() => {
            setCurrent((prev) => {
                console.log("Changing to slide", prev + 1);
                return (prev + 1) % slides.length;
            });
        }, 4000);
        return () => {
            console.log("Interval cleared");
            clearInterval(timer);
        };
    }, []);
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <Image
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition ${index === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
              
        </div>
    );
}