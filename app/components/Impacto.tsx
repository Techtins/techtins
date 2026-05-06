import { MapPin } from "lucide-react";
import Image from "next/image";


export default function ContatoFooter() {
    return (
        <footer className="w-full bg-black text-white px-6 md:px-16 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">

                <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
                    <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
                        TENHA <br />
                        PRESENÇA <br />
                        DIGITAL E <span className="text-purple-brand">GERE</span> <br />
                        <span className="text-purple-brand">IMPACTO</span>
                    </h2>

                    <a
                        href="/faleConosco"
                        className="px-10 py-3 border-2 border-yellow-400 text-yellow-400 font-medium rounded-full transition-all duration-300 hover:bg-yellow-400 hover:text-black shadow-lg"
                    >
                        Fale Conosco
                    </a>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="relative w-70 h-70 sm:w-95 sm:h-95 md:w-112.5 md:h-112.5 shrink-0">
                        <Image
                            src="/assets/celular.png"
                            alt="Mãos segurando um celular"
                            fill
                            sizes="(max-width: 768px) 280px, 450px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400 text-sm">
                <div className="flex flex-col items-start justify-center gap-4">
                    <div className="relative w-40 h-10">
                        <Image
                            src="/assets/nomeTechtins.png"
                            alt="Logo Techtins"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <h3 className="text-yellow-brand font-bold text-base tracking-wider uppercase">
                        Onde nos encontrar?
                    </h3>
                    <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                        <p className="leading-relaxed text-gray-400 max-w-xs">
                            Q. 108 Sul Alameda 11, 03 - Plano Diretor Sul, Palmas - TO, 77020-122
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h3 className="text-yellow-brand font-bold text-base tracking-wider uppercase">
                        Fique ligado!
                    </h3>
                    <div className="flex gap-4 items-center">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-all duration-300 hover:text-purple-400"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com/techtins.jr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-white transition-all duration-300 hover:text-purple-400"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}