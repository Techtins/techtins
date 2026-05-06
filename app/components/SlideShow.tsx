"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Sobre nós",
        image: "/assets/organizacaoEventos.jpg",
    },
    {
        id: 2,
        title: "Jornada",
        image: "/assets/techtinsMej.jpg",
    },
    {
        id: 3,
        title: "Membros",
        image: "/assets/techtinsTv.jpeg",
    },
];

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div className="absolute inset-0 bg-black/50 z-10" />

                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index === 0}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-6 md:px-12">
                        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-center leading-tight">
                            {slide.title}
                        </h2>
                    </div>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/40 transition-all focus:outline-none"
                aria-label="Slide anterior"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/40 transition-all focus:outline-none"
                aria-label="Próximo slide"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}