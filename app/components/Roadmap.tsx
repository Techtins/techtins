"use client";
import { useState } from "react";

interface Etapa {
    ano: string;
    titulo: string;
    detalhes: string;
    lado: "left" | "right";
    imagem: string;
    atual?: boolean;
}

const etapas: Etapa[] = [
    {
        ano: "1967 – 1988",
        titulo: "O Surgimento do MEJ",
        detalhes:
            "O movimento surgiu na França (1967) e chegou ao Brasil em 1988. Hoje, a Brasil Júnior coordena uma rede de mais de 1600 EJs em 27 federações estaduais.",
        lado: "left",
        imagem: "/assets/logoBrasilJunior.png",
    },
    {
        ano: "2024",
        titulo: "Início da Colaboração",
        detalhes:
            "A Techtins inicia sua jornada oficial no movimento, oferecendo palestras e consultorias alinhadas aos objetivos estratégicos nacionais da rede.",
        lado: "right",
        imagem: "/assets/inicio.png",
    },
    {
        ano: "2025",
        titulo: "Capacitação e Cultura",
        detalhes:
            "Foco total em imersões, treinamentos e participação em eventos da rede para consolidar a cultura de alto impacto e promover mudanças no empreendedorismo jovem.",
        lado: "left",
        imagem: "/assets/palestra.png",
    },
    {
        ano: "2026",
        titulo: "O Ano da Federação",
        detalhes:
            "Estamos em pleno processo de federação pela entidade estadual tocantinense. Este marco nos permitirá operar com CNPJ e garantir o selo de excelência e qualidade do MEJ.",
        lado: "right",
        atual: true,
        imagem: "/assets/federacao.jpeg",
    },
    {
        ano: "Futuro",
        titulo: "Conexão com o Mercado",
        detalhes:
            "Nossa meta é consolidar o impacto socioeducativo, conectando diretamente o talento acadêmico às demandas reais do mercado de trabalho através de tecnologia de ponta.",
        lado: "left",
        imagem: "/assets/grupoTechtins.jpeg",
    },
];

const TOTAL = etapas.length;

function EtapaCard({
    etapa,
    index,
    isOpen,
    onToggle,
}: {
    etapa: Etapa;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const isRight = etapa.lado === "right";
    const progress = ((index + 1) / TOTAL) * 100;

    return (
        <>
            <style>{`
        @keyframes pulseRing {
          0%  { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(2.4); opacity: 0; }
          100%{ transform: scale(2.4); opacity: 0; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeImg {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        .ring-anim {
          animation: pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        .slide-down {
          animation: slideDown 0.35s ease both;
        }
        .fade-img {
          animation: fadeImg 0.45s ease both;
        }
      `}</style>

            <div className="block md:hidden mb-8">
                <div
                    onClick={onToggle}
                    className="relative rounded-3xl overflow-hidden cursor-pointer group"
                    style={{
                        background: "#fff",
                        border: `1.5px solid ${isOpen ? "#5e2a84" : "#e9e3f0"}`,
                        boxShadow: isOpen
                            ? "0 20px 60px rgba(94,42,132,0.15), 0 4px 16px rgba(94,42,132,0.08)"
                            : "0 4px 20px rgba(94,42,132,0.06)",
                        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    }}
                >
                    {/* barra de progresso e cards */}
                    <div
                        className="absolute top-0 left-0 h-0.5 rounded-full transition-all duration-700"
                        style={{
                            background: "linear-gradient(90deg, #5e2a84, #9b59b6)",
                            width: isOpen ? "100%" : "0%",
                        }}
                    />

                    <div className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <div>
                                <span
                                    className="font-montserrat text-[10px] font-bold tracking-[0.28em] uppercase block mb-1"
                                    style={{ color: "#9b59b6" }}
                                >
                                    {etapa.ano}
                                </span>
                                <h3
                                    className="font-montserrat font-extrabold text-lg leading-tight"
                                    style={{ color: "#1a0a2e" }}
                                >
                                    {etapa.titulo}
                                </h3>
                            </div>
                            <div className="flex flex-col items-end gap-2 shrink-0">
                                {etapa.atual && (
                                    <span
                                        className="font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                                        style={{
                                            background: "rgba(94,42,132,0.1)",
                                            color: "#5e2a84",
                                            border: "1px solid rgba(94,42,132,0.2)",
                                        }}
                                    >
                                        ATUAL
                                    </span>
                                )}
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                                    style={{
                                        background: isOpen
                                            ? "linear-gradient(135deg, #5e2a84, #9b59b6)"
                                            : "rgba(94,42,132,0.08)",
                                        transition: "all 0.3s",
                                    }}
                                >
                                    <svg
                                        className="transition-transform duration-300"
                                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={isOpen ? "#fff" : "#5e2a84"}
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {isOpen && (
                            <div className="slide-down">
                                <div
                                    className="h-px mb-4"
                                    style={{ background: "linear-gradient(90deg, #5e2a84 0%, rgba(94,42,132,0.1) 100%)" }}
                                />
                                <p
                                    className="font-montserrat text-sm leading-relaxed mb-5"
                                    style={{ color: "#4a3060" }}
                                >
                                    {etapa.detalhes}
                                </p>

                                {/* Image */}
                                <div
                                    className="relative rounded-2xl overflow-hidden fade-img"
                                    style={{
                                        height: 200,
                                        background: "linear-gradient(135deg, #f0eaf8, #e8dff5)",
                                    }}
                                >
                                    <img
                                        src={etapa.imagem}
                                        alt={etapa.titulo}
                                        className="w-full h-full object-cover"
                                        style={{ opacity: 0.95 }}
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(30,5,60,0.35) 0%, transparent 50%)",
                                        }}
                                    />
                                    <div className="absolute bottom-3 left-4">
                                        <span
                                            className="font-montserrat text-[10px] font-bold uppercase tracking-widest text-white"
                                            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                                        >
                                            {etapa.ano}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-8 mb-10 items-start">
                <div className={`${isRight ? "opacity-0 pointer-events-none" : ""}`}>
                    {!isRight && (
                        <div
                            onClick={onToggle}
                            className="cursor-pointer rounded-3xl overflow-hidden ml-auto"
                            style={{
                                maxWidth: 420,
                                background: "#fff",
                                border: `1.5px solid ${isOpen ? "#5e2a84" : "#ede8f5"}`,
                                boxShadow: isOpen
                                    ? "0 24px 64px rgba(94,42,132,0.16), 0 4px 20px rgba(94,42,132,0.1)"
                                    : "0 4px 24px rgba(94,42,132,0.07)",
                                transition: "all 0.38s cubic-bezier(0.4,0,0.2,1)",
                                transform: isOpen ? "translateY(-3px)" : "translateY(0)",
                            }}
                            onMouseEnter={(e) => {
                                if (!isOpen) {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                                        "0 12px 40px rgba(94,42,132,0.13), 0 2px 12px rgba(94,42,132,0.08)";
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isOpen) {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                                        "0 4px 24px rgba(94,42,132,0.07)";
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                                }
                            }}
                        >
                            <DesktopCardInner etapa={etapa} isOpen={isOpen} />
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center" style={{ paddingTop: 24 }}>
                    <div className="relative flex items-center justify-center">
                        {etapa.atual && (
                            <div
                                className="ring-anim absolute w-5 h-5 rounded-full"
                                style={{ background: "rgba(94,42,132,0.25)" }}
                            />
                        )}
                        <div
                            className="relative z-10 flex items-center justify-center rounded-full transition-all duration-300"
                            style={{
                                width: 20,
                                height: 20,
                                background: isOpen
                                    ? "linear-gradient(135deg, #5e2a84, #9b59b6)"
                                    : "#fff",
                                border: `3px solid ${isOpen ? "#5e2a84" : "#c4a8e0"}`,
                                boxShadow: isOpen ? "0 0 0 4px rgba(94,42,132,0.15)" : "none",
                            }}
                        >
                            {isOpen && (
                                <div
                                    className="w-2 h-2 rounded-full"
                                    style={{ background: "rgba(255,255,255,0.9)" }}
                                />
                            )}
                        </div>
                    </div>

                    {index < TOTAL - 1 && (
                        <div
                            className="mt-2 flex-1 w-px"
                            style={{
                                minHeight: 60,
                                background: `linear-gradient(to bottom, ${isOpen ? "#5e2a84" : "#d5c5ea"
                                    } 0%, #d5c5ea 100%)`,
                                transition: "background 0.3s",
                            }}
                        />
                    )}
                </div>

                <div className={`${!isRight ? "opacity-0 pointer-events-none" : ""}`}>
                    {isRight && (
                        <div
                            onClick={onToggle}
                            className="cursor-pointer rounded-3xl overflow-hidden"
                            style={{
                                maxWidth: 420,
                                background: "#fff",
                                border: `1.5px solid ${isOpen ? "#5e2a84" : "#ede8f5"}`,
                                boxShadow: isOpen
                                    ? "0 24px 64px rgba(94,42,132,0.16), 0 4px 20px rgba(94,42,132,0.1)"
                                    : "0 4px 24px rgba(94,42,132,0.07)",
                                transition: "all 0.38s cubic-bezier(0.4,0,0.2,1)",
                                transform: isOpen ? "translateY(-3px)" : "translateY(0)",
                            }}
                            onMouseEnter={(e) => {
                                if (!isOpen) {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                                        "0 12px 40px rgba(94,42,132,0.13), 0 2px 12px rgba(94,42,132,0.08)";
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isOpen) {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                                        "0 4px 24px rgba(94,42,132,0.07)";
                                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                                }
                            }}
                        >
                            <DesktopCardInner etapa={etapa} isOpen={isOpen} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function DesktopCardInner({ etapa, isOpen }: { etapa: Etapa; isOpen: boolean }) {
    return (
        <>
            <div
                className="relative overflow-hidden"
                style={{
                    height: isOpen ? 220 : 80,
                    transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)",
                    background: "linear-gradient(135deg, #f0eaf8, #e5d9f2)",
                }}
            >
                <img
                    src={etapa.imagem}
                    alt={etapa.titulo}
                    className="w-full h-full object-cover"
                    style={{
                        opacity: isOpen ? 0.95 : 0.55,
                        transform: isOpen ? "scale(1)" : "scale(1.08)",
                        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: isOpen
                            ? "linear-gradient(to top, rgba(30,5,60,0.5) 0%, rgba(30,5,60,0.1) 45%, transparent 70%)"
                            : "linear-gradient(to top, rgba(240,234,248,0.7) 0%, rgba(240,234,248,0.2) 100%)",
                        transition: "background 0.4s",
                    }}
                />

                <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
                    <span
                        className="font-montserrat text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full"
                        style={{
                            background: isOpen ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.75)",
                            color: isOpen ? "#fff" : "#5e2a84",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            transition: "all 0.3s",
                        }}
                    >
                        {etapa.ano}
                    </span>
                    {etapa.atual && (
                        <span
                            className="font-montserrat text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-full"
                            style={{
                                background: "linear-gradient(135deg, #5e2a84, #9b59b6)",
                                color: "#fff",
                                boxShadow: "0 2px 12px rgba(94,42,132,0.4)",
                            }}
                        >
                            ATUAL
                        </span>
                    )}
                </div>

                {!isOpen && (
                    <div className="absolute bottom-3 left-4 right-4">
                        <p
                            className="font-montserrat font-extrabold text-sm leading-tight truncate"
                            style={{ color: "#1a0a2e" }}
                        >
                            {etapa.titulo}
                        </p>
                    </div>
                )}
            </div>

            <div className="p-5">
                {isOpen ? (
                    <div className="slide-down">
                        <h3
                            className="font-montserrat font-extrabold text-lg leading-tight mb-3"
                            style={{ color: "#1a0a2e" }}
                        >
                            {etapa.titulo}
                        </h3>
                        <div
                            className="h-px mb-3"
                            style={{ background: "linear-gradient(90deg, #5e2a84, rgba(94,42,132,0.1))" }}
                        />
                        <p
                            className="font-montserrat text-sm leading-relaxed"
                            style={{ color: "#4a3060" }}
                        >
                            {etapa.detalhes}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ background: "#9b59b6" }}
                            />
                            <span
                                className="font-montserrat text-[11px] font-semibold uppercase tracking-widest"
                                style={{ color: "#9b59b6" }}
                            >
                                Clique para fechar
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-between">
                        <span
                            className="font-montserrat text-[11px] font-semibold uppercase tracking-widest"
                            style={{ color: "#9b59b6" }}
                        >
                            Ver detalhes
                        </span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9b59b6"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )}
            </div>
        </>
    );
}

export default function Roadmap() {
    const [openSteps, setOpenSteps] = useState<number[]>([]);

    const toggle = (i: number) =>
        setOpenSteps((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

            <section
                className="w-full font-montserrat py-20 md:py-28 px-5 md:px-12 relative overflow-hidden"
                style={{ background: "#fff" }}
            >
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: -120,
                        right: -80,
                        width: 520,
                        height: 520,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(94,42,132,0.07) 0%, transparent 68%)",
                    }}
                />
                <div
                    className="absolute pointer-events-none"
                    style={{
                        bottom: -60,
                        left: -60,
                        width: 380,
                        height: 380,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(155,89,182,0.06) 0%, transparent 68%)",
                    }}
                />

                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(94,42,132,0.04) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="max-w-5xl mx-auto relative z-10">

                    <div className="text-center mb-16 md:mb-20">
                        <h1
                            className="font-montserrat font-extrabold text-4xl md:text-6xl uppercase tracking-wide leading-none mb-5"
                            style={{ color: "#1a0a2e" }}
                        >
                            Nossa Jornada
                            <span
                                className="block"
                                style={{
                                    WebkitTextStrokeWidth: "2px",
                                    WebkitTextStrokeColor: "#5e2a84",
                                    color: "transparent",
                                }}
                            >
                                Techtins
                            </span>
                        </h1>
                        <p
                            className="font-montserrat text-sm mt-5 font-medium"
                            style={{ color: "rgba(94,42,132,0.5)" }}
                        >
                            Clique em cada etapa para explorar
                        </p>
                    </div>

                    <div
                        className="block md:hidden mb-8 rounded-full overflow-hidden"
                        style={{ height: 3, background: "rgba(94,42,132,0.1)" }}
                    >
                        <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                                background: "linear-gradient(90deg, #5e2a84, #9b59b6)",
                                width: `${(openSteps.length / TOTAL) * 100}%`,
                            }}
                        />
                    </div>

                    <div className="relative">
                        <div
                            className="absolute hidden md:block"
                            style={{
                                left: "50%",
                                top: 0,
                                bottom: 0,
                                width: 2,
                                transform: "translateX(-50%)",
                                background:
                                    "linear-gradient(to bottom, #5e2a84 0%, rgba(94,42,132,0.15) 100%)",
                                zIndex: 0,
                            }}
                        />

                        {etapas.map((etapa, i) => (
                            <EtapaCard
                                key={i}
                                etapa={etapa}
                                index={i}
                                isOpen={openSteps.includes(i)}
                                onToggle={() => toggle(i)}
                            />
                        ))}
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-3">
                        {etapas.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => toggle(i)}
                                className="transition-all duration-300"
                                style={{
                                    width: openSteps.includes(i) ? 28 : 8,
                                    height: 8,
                                    borderRadius: 4,
                                    background: openSteps.includes(i)
                                        ? "linear-gradient(90deg, #5e2a84, #9b59b6)"
                                        : "rgba(94,42,132,0.2)",
                                }}
                                aria-label={`Etapa ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}