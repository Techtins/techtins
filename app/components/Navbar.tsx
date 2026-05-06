"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ variant = "light" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (variant === "light") {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [variant]);

    const isDarkVariant = variant === "dark";
    const showScrolled = variant === "light" && isScrolled;

    return (
        <>
            <nav
                className={`w-full md:px-12 flex items-center justify-between max-w-7xl mx-auto z-50 transition-all duration-300 ${showScrolled
                    ? "sticky top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4 text-slate-900"
                    : isDarkVariant
                        ? "absolute top-0 left-0 right-0 bg-transparent py-6 text-white"
                        : "max-w-full sticky top-0 bg-transparent py-6 text-slate-900"
                    }`}
            >
                <Link href="/" className="flex items-center">
                    <Image
                        width={160}
                        height={40}
                        src={isDarkVariant ? "/assets/logoHorizontalBranca.png" : "/assets/logoHorizontalPreta.png"}
                        alt="Logo Techtins"
                        className="w-32 md:w-40 h-auto transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 focus:outline-none transition-transform duration-300 hover:text-purple-brand text-inherit"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8 font-medium">
                    <Link className="hover:text-yellow-400 transition-colors duration-300 relative group" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-yellow-400 transition-colors duration-300 relative group" href="/saibaMais">
                        Sobre nós
                    </Link>
                    <Link
                        href="/faleConosco"
                        className={`px-6 py-2 border-2 rounded-full transition-all duration-300 ${isDarkVariant
                            ? "border-white hover:bg-white hover:text-[#331c5e]"
                            : "border-slate-900 text-slate-900 hover:border-purple-brand hover:text-purple-brand hover:shadow-md"
                            }`}
                    >
                        Fale Conosco
                    </Link>
                </div>
            </nav>

            {/* Menu Sanduíche */}
            {isMenuOpen && (
                <div className={`md:hidden fixed top-18 left-0 w-full flex flex-col items-center py-6 space-y-4 shadow-md border-b z-40 transition-all duration-300 ease-in-out ${isDarkVariant
                    ? "bg-[#331c5e] text-white border-[#331c5e]"
                    : "bg-white/95 backdrop-blur-lg text-slate-900 border-gray-100"
                    }`}>
                    <Link
                        className="hover:text-yellow-400 transition-colors w-full text-center py-2"
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:text-yellow-400 transition-colors w-full text-center py-2"
                        href="/saibaMais"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre nós
                    </Link>
                    <Link
                        href="/faleConosco"
                        className={`px-6 py-2 border-2 rounded-full text-center w-3/4 transition-all duration-300 ${isDarkVariant
                            ? "border-white hover:bg-white hover:text-[#331c5e]"
                            : "border-slate-900 hover:border-purple-brand hover:text-purple-brand"
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Fale Conosco
                    </Link>
                </div>
            )}
        </>
    );
}