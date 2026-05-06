"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";

// projetos
const projetos = [
    {
        id: 1,
        nome: "FARMTINS",
        categoria: "Consultoria Agronômica",
        descricao: "Rebranding de identidade visual e desenvolvimento de site, com posicionamento profissional e acadêmico para a marca.",
        logo: "/assets/logoFarmtins.jpeg",
        alt: "Logo Farmtins",
        number: "01",
        url: "https://farmtins.vercel.app/",
    },
    {
        id: 2,
        nome: "EVENTOS",
        categoria: "Organização de eventos",
        descricao: "Idealização, organização e participação ativa de eventos os quais contribuem para o Movimento Empresa Júnior tocantinense, promovendo debates relevantes e inegração da comunidade",
        logo: "/assets/organizacaoEventos.jpg",
        alt: "Organização de eventos",
        number: "02",
        url: "",
    },
];

type Direction = "left" | "right";

interface ComputerPreviewProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    nome: string;
}

// componente de previa
function ComputerPreview({ isOpen, onClose, url, nome }: ComputerPreviewProps) {
    const [showPreview, setShowPreview] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 p-4 md:p-6 overflow-y-auto">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition shadow-lg"
                aria-label="Fechar prévia"
            >
                <X size={18} />
            </button>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 md:mb-10 text-center">
                Prévia do Site: {nome}
            </h2>
            {/* computador */}
            <div className="relative flex flex-col items-center w-full max-w-5xl px-2 sm:px-4">
                <div className="w-full h-90 sm:h-105 md:h-120 bg-slate-900 rounded-3xl md:rounded-4xl p-2 md:p-4 shadow-2xl border-[6px] md:border-10 border-slate-800 relative group overflow-hidden">

                    {!showPreview ? (
                        <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 text-purple-brand animate-pulse">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-full h-full"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
                                Visualizar {nome}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm max-w-xs md:max-w-md mb-6 md:mb-8">
                                Clique no botão abaixo para carregar a prévia do site diretamente na tela.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => setShowPreview(true)}
                                    className="px-5 py-2.5 bg-purple-brand hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 duration-200"
                                >
                                    Carregar Prévia
                                </button>
                                <button
                                    onClick={onClose}
                                    className="px-5 py-2.5 bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-700 hover:bg-slate-700/50 transition"
                                >
                                    Voltar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative border border-slate-700 flex flex-col">
                            <div className="absolute top-0 left-0 right-0 h-9 md:h-10 bg-slate-100 border-b border-slate-200 flex items-center px-3 md:px-4 justify-between select-none z-10">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                                </div>

                                <div className="text-[10px] md:text-xs font-mono text-slate-400 truncate max-w-30 sm:max-w-xs bg-slate-200/50 px-2 md:px-3 py-0.5 rounded-full">
                                    {url}
                                </div>

                                <div>
                                    <button
                                        onClick={() => setShowPreview(false)}
                                        className="text-xs text-slate-500 hover:text-slate-700 font-medium px-2 py-1 rounded transition"
                                    >
                                        Ocultar
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 w-full h-full pt-9 md:pt-10">
                                <iframe
                                    src={url}
                                    title={`Prévia do ${nome}`}
                                    className="w-full h-full border-none bg-white"
                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-32 sm:w-36 md:w-40 h-6 md:h-8 bg-slate-800 rounded-b-xl shadow-inner"></div>
                <div className="w-56 sm:w-64 md:w-72 h-3 md:h-4 bg-slate-700 rounded-b-2xl shadow-lg"></div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<Direction>("right");
    const [visible, setVisible] = useState(true);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const navigate = (newIndex: number, dir: Direction) => {
        if (animating) return;
        setAnimating(true);
        setDirection(dir);
        setVisible(false);

        timeoutRef.current = setTimeout(() => {
            setCurrentIndex(newIndex);
            setVisible(true);
            setAnimating(false);
        }, 320);
    };

    useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

    const prevProject = () => {
        const newIndex = currentIndex === 0 ? projetos.length - 1 : currentIndex - 1;
        navigate(newIndex, "left");
    };

    const nextProject = () => {
        const newIndex = currentIndex === projetos.length - 1 ? 0 : currentIndex + 1;
        navigate(newIndex, "right");
    };

    const projeto = projetos[currentIndex];

    return (
        <>
            <style>{`
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(48px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-48px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideOutRight {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(-48px); }
                }
                @keyframes slideOutLeft {
                    from { opacity: 1; transform: translateX(0); }
                    to   { opacity: 0; transform: translateX(48px); }
                }

                .pf-content-enter-right { animation: slideInRight 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .pf-content-enter-left  { animation: slideInLeft  0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .pf-content-exit-right  { animation: slideOutRight 0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
                .pf-content-exit-left   { animation: slideOutLeft  0.32s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

                .pf-nav-btn {
                    transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
                }
                .pf-nav-btn:hover:not(:disabled) {
                    transform: scale(1.08);
                    box-shadow: 0 6px 24px rgba(0,0,0,0.12);
                }
                .pf-nav-btn:active:not(:disabled) { transform: scale(0.97); }
                .pf-nav-btn:disabled { opacity: 0.35; cursor: not-allowed; }

                .pf-logo-card {
                    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
                }
                .pf-logo-card:hover {
                    transform: scale(1.04) rotate(-1deg);
                    box-shadow: 0 20px 48px rgba(0,0,0,0.10);
                }

                .pf-dot {
                    transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.25s ease;
                }

                @keyframes progressBar {
                    from { width: 0%; }
                    to   { width: 100%; }
                }
                .pf-progress { animation: progressBar 4s linear forwards; }
            `}</style>

            <section
                id="portfolio"
                className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center px-4 md:px-16 py-20 overflow-hidden"
            >
                <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-transparent via-purple-brand to-transparent opacity-20" />

                <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-10">
                    <div className="flex items-end justify-between px-2 md:px-0">
                        <h2 className="font-montserrat font-extrabold text-3xl md:text-5xl text-purple-brand tracking-wider leading-tight">
                            PORTFÓLIO
                        </h2>

                        <span className="font-montserrat text-sm font-semibold text-gray-400 tracking-widest hidden md:block">
                            <span className="text-purple-brand font-extrabold text-lg">{String(currentIndex + 1).padStart(2, "0")}</span>
                            {" / "}
                            {String(projetos.length).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Card Principal */}
                    <div className="relative w-full rounded-3xl border border-gray-100 bg-gray-50 overflow-hidden shadow-sm">
                        <div
                            key={currentIndex}
                            className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 p-6 md:p-14 ${visible
                                ? direction === "right" ? "pf-content-enter-right" : "pf-content-enter-left"
                                : direction === "right" ? "pf-content-exit-right" : "pf-content-exit-left"
                                }`}
                        >
                            <div className="flex-1 flex flex-col gap-4 md:gap-6 text-left">
                                <span className="font-montserrat text-xs font-bold uppercase tracking-[0.2em] text-purple-brand">
                                    {projeto.categoria}
                                </span>

                                <h3 className="font-montserrat font-extrabold text-2xl md:text-5xl text-gray-900 tracking-wider leading-tight">
                                    {projeto.nome}
                                </h3>

                                <div className="h-0.75 w-12 bg-purple-brand rounded-full" />

                                <p className="font-montserrat text-sm md:text-base leading-relaxed text-gray-500 max-w-md">
                                    {projeto.descricao}
                                </p>

                                {projeto.url && (
                                    <button
                                        onClick={() => setIsPreviewOpen(true)}
                                        className="group flex items-center gap-2 w-fit mt-2 font-montserrat font-bold text-sm text-purple-brand hover:gap-3 transition-all duration-200"
                                    >
                                        Ver projeto
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </button>
                                )}
                            </div>

                            <div className="hidden md:block w-px h-56 bg-gray-200 mx-10 shrink-0" />

                            <div className="shrink-0 flex justify-center items-center">
                                <div className="pf-logo-card bg-white rounded-2xl border border-gray-100 shadow-md flex flex-col items-center justify-center w-60 h-60 sm:w-72 sm:h-72 gap-5 p-8">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                                        <Image
                                            src={projeto.logo}
                                            alt={projeto.alt}
                                            fill
                                            sizes="128px"
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
                                        {projeto.categoria}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 md:px-0">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={prevProject}
                                disabled={animating}
                                className="pf-nav-btn p-3 rounded-full border border-gray-200 bg-white text-purple-brand hover:bg-purple-brand hover:text-white hover:border-purple-brand"
                                aria-label="Projeto anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextProject}
                                disabled={animating}
                                className="pf-nav-btn p-3 rounded-full border border-gray-200 bg-white text-purple-brand hover:bg-purple-brand hover:text-white hover:border-purple-brand"
                                aria-label="Próximo projeto"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            {projetos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => navigate(i, i > currentIndex ? "right" : "left")}
                                    aria-label={`Ir para projeto ${i + 1}`}
                                    className={`pf-dot h-2 rounded-full ${i === currentIndex
                                        ? "w-8 bg-purple-brand"
                                        : "w-2 bg-gray-300 hover:bg-purple-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ComputerPreview
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                url={projeto.url}
                nome={projeto.nome}
            />
        </>
    );
}